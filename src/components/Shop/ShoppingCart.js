import { useReducer, useEffect } from "react";
import { shoppingReducer } from "../reducer/shoppingReducer";
import { shoppingInitialState } from "../reducer/shoppingInitialState";
import { TYPES } from "@/actions/actions";
import Product from "./Product";
import CartWidget from "./CartWidget";
import axios from "axios";

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  const { products, cart } = state;

  const updateState = async () => {
    const ENDPOINTS = {
      products: "http://localhost:5000/products",
      cart: "http://localhost:5000/cart",
    };
    const resProducts = await axios.get(ENDPOINTS.products),
      resCart = await axios.get(ENDPOINTS.cart);

    const productsList = await resProducts.data,
      cartItems = await resCart.data;

    dispatch({
      type: TYPES.READ_STATE,
      payload: {
        products: productsList,
        cart: cartItems,
      },
    });
  };

  useEffect(() => {
    updateState();
  }, []);

  const addToCart = async (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
    updateState();
  };

  const deleteFromCart = async (id, all = false) => {
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_PRODUCTS, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_PRODUCT, payload: id });
    }
    updateState();
  };

  const clearCart = () => dispatch({ type: TYPES.CLEAR_CART });

  return (
    <>
      <div className="title">
        <h2>Tienda</h2>
        <div></div>
        <CartWidget
          cart={cart}
          deleteFromCart={deleteFromCart}
          clearCart={clearCart}
        />
      </div>
      <div className="box grid-responsive">
        {products.length === 0 ? (
          <h2>No hay datos</h2>
        ) : (
          products.map((product) => (
            <Product key={product.id} product={product} addToCart={addToCart} />
          ))
        )}
      </div>

      <style jsx>{`
        .title {
          display: flex;
          justify-content: space-around;
          align-items: center;
          height: 70px;
          border-bottom: 2px solid whitesmoke;
        }
        h2 {
          font-size: 2rem;
          letter-spacing: 2px;
        }
        .grid-responsive {
          display: grid;
          justify-items: center;
          gap: 1rem;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        }
      `}</style>
    </>
  );
};

export default ShoppingCart;
