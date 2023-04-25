import { createSlice } from "@reduxjs/toolkit";
import products from "../productData";
const initialState = {
  cart: [],
  items: products,
  totalPrice: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    add: (state, action) => {
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        state.cart.push(action.payload);
      }
    },

    getTotal: (state) => {
      let totalPrice = 0;
      let totalQuantity = 0;
      state.cart.forEach((item) => {
        const { price, quantity } = item;
        let total = price * quantity;
        totalPrice += total;
        totalQuantity += quantity;
        console.log(totalPrice, totalQuantity);
      });
      state.totalPrice = totalPrice;
      state.totalQuantity = totalQuantity;
    },
     // Removing
    deleteItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    increment: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item.quantity = item.quantity + 1;
        }
        return item;
      });
    },
  // decrement 
    decrement: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          if (item.quantity < 1) return item;
          else item.quantity = item.quantity - 1;
        }
        return item;
      });
    },
  },
});

export const { add, getTotal, deleteItem, increment, decrement } =
  cartSlice.actions;

export default cartSlice.reducer;
