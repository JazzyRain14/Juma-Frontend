import axios from "axios";
import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useReducer,
} from "react";

export const CartContext = createContext();

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "SET_CART":
      return action.payload; // Replace current cart with backend cart
    case "ADD_TO_CART":
      return [...state, action.payload];
    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.payload.id);

    case "INCREMENT_QUANTITY":
      return state.map((item) => {
        if (item._id === action.payload._id) {
          return {
            ...item,
            quantityOfProduct: action.payload.quantityOfProduct.toString(),
          };
        }
        return item;
      });
    case "DECREMENT_QUANTITY":
      return state.map((item) =>
        item._id === action.payload._id &&
        parseInt(item.quantityOfProduct, 10) > 1
          ? {
              ...item,
              quantityOfProduct: parseInt(item.quantityOfProduct, 10) - 1,
            }
          : item
      );
    case "CLEAR_CART":
      return [];
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export const CartProvider = ({ children }) => {
  const endpoint =
    "https://juma-backend-delta.vercel.app/usercontrol/getcartproduct";
  const [cart, dispatch] = useReducer(cartReducer, []);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        // const response = await fetch(endpoint);
        // console.log(response);
        let userId = localStorage.getItem("userId");
        const response = await axios.post(endpoint, { userId });
        // console.log(cart);
        const data = response.data;
        dispatch({ type: "SET_CART", payload: data.cartProducts });
      } catch (error) {
        console.error("Failed to fetch cart:", error);
      }
    };
    fetchCart();
  });

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => useContext(CartContext);
