import React, { useEffect, useState, useReducer } from "react";
import { shoppingReducer } from "../reducer/shoppingReducer";
import { shoppingInitialState } from "../reducer/shoppingInitialState";
import { TYPES } from "@/actions/actions";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import axios from "axios";

const CrudApp = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { products, cart } = state;
  const ENDPOINTS = {
    products: "http://localhost:5000/products",
    cart: "http://localhost:5000/cart",
  };
  const updateState = async () => {
    const resProducts = await axios.get(ENDPOINTS.products);
    const resCart = await axios.get(ENDPOINTS.cart);
    const productsList = resProducts.data;
    const cartItems = resCart.data;
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

  const createData = async (data) => {
    try {
      const response = await axios.post(ENDPOINTS.products, data);
      if (response.status === 201) {
        const newProduct = response.data;
        dispatch({
          type: TYPES.CREATE_PRODUCT,
          payload: newProduct,
        });
      }
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  const updateData = async (data) => {
    try {
      const response = await axios.put(
        `${ENDPOINTS.products}/${data.id}`,
        data
      );
      if (response.status === 200) {
        const updatedProduct = response.data;
        dispatch({
          type: TYPES.UPDATE_PRODUCT,
          payload: updatedProduct,
        });
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const deleteData = async (productId) => {
    try {
      const response = await axios.delete(`${ENDPOINTS.products}/${productId}`);
      if (response.status === 200) {
        dispatch({
          type: TYPES.DELETE_PRODUCT,
          payload: productId,
        });
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const [dataToEdit, setDataToEdit] = useState(null);

  return (
    <>
      <div>
        <h2>Crud App</h2>
        <CrudForm
          createData={createData}
          updateData={updateData}
          setDataToEdit={setDataToEdit}
          dataToEdit={dataToEdit}
        />
        <CrudTable
          data={products}
          deleteData={deleteData}
          setDataToEdit={setDataToEdit}
        />
      </div>

      <style jsx>{`
        div {
          background-color: white-smoke;
        }
      `}</style>
    </>
  );
};

export default CrudApp;
