import { TYPES } from "@/actions/actions";
import { shoppingInitialState } from "./shoppingInitialState";
import axios from "axios";

const ENDPOINTS = {
  products: "http://localhost:5000/products",
  cart: "http://localhost:5000/cart",
};
export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.READ_STATE: {
      return {
        ...state,
        products: action.payload.products,
        cart: action.payload.cart,
      };
    }

    case TYPES.ADD_TO_CART: {
      const newItem = state.products.find(
        (product) => product.id === action.payload
      );
      const itemInCart = state.cart.find((item) => item.id === newItem.id);

      if (itemInCart) {
        const updatedCart = state.cart.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );

        axios
          .patch(`${ENDPOINTS.cart}/${itemInCart.id}`, {
            quantity: itemInCart.quantity + 1,
          })
          .then(() => {
            console.log(
              "Producto actualizado en el carrito en la base de datos"
            );
          })
          .catch((error) => {
            console.error(
              "Error al actualizar el producto en el carrito en la base de datos",
              error
            );
          });

        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        const newCartItem = { ...newItem, quantity: 1 };

        axios
          .post(ENDPOINTS.cart, newCartItem)
          .then(() => {
            console.log("Producto agregado al carrito en la base de datos");
          })
          .catch((error) => {
            console.error(
              "Error al agregar el producto al carrito en la base de datos",
              error
            );
          });

        return {
          ...state,
          cart: [...state.cart, newCartItem],
        };
      }
    }

    case TYPES.REMOVE_ONE_PRODUCT: {
      const itemToDelete = state.cart.find(
        (item) => item.id === action.payload
      );
      const updatedCart = state.cart.map((item) =>
        item.id === itemToDelete.id
          ? { ...itemToDelete, quantity: item.quantity - 1 }
          : item
      );

      if (itemToDelete.quantity <= 1) {
        axios
          .delete(`${ENDPOINTS.cart}/${itemToDelete.id}`)
          .then(() => {
            console.log("Producto eliminado del carrito en la base de datos");
          })
          .catch((error) => {
            console.error(
              "Error al eliminar el producto del carrito en la base de datos",
              error
            );
          });

        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload),
        };
      } else {
        axios
          .patch(`${ENDPOINTS.cart}/${itemToDelete.id}`, {
            quantity: itemToDelete.quantity - 1,
          })
          .then(() => {
            console.log(
              "Producto actualizado en el carrito en la base de datos"
            );
          })
          .catch((error) => {
            console.error(
              "Error al actualizar el producto en el carrito en la base de datos",
              error
            );
          });

        return {
          ...state,
          cart: updatedCart,
        };
      }
    }

    case TYPES.REMOVE_ALL_PRODUCTS: {
      const idToRemove = action.payload;

      axios
        .delete(`${ENDPOINTS.cart}/${idToRemove}`)
        .then(() => {
          console.log("Productos eliminados del carrito en la base de datos");
        })
        .catch((error) => {
          console.error(
            "Error al eliminar los productos del carrito en la base de datos",
            error
          );
        });

      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== idToRemove),
      };
    }

    case TYPES.CLEAR_CART:
      state.cart.forEach((item) => {
        axios
          .delete(`${ENDPOINTS.cart}/${item.id}`)
          .then(() => {
            console.log("Producto eliminado del carrito en la base de datos");
          })
          .catch((error) => {
            console.error(
              "Error al eliminar el producto del carrito en la base de datos",
              error
            );
          });
      });
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
}
