import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "Name",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const product = state.cart.find((item) => item.id == action.payload.id);
      if (product) {
        product.quality += 1;
      } else {
        state.cart.push(action.payload);
      }
    },
    removeToCart: (state, action) => {
      const data = state.cart.filter((item) => item.id !== action.payload.id);
      state.cart = data;
    },
    decreaseCart: (state, action) => {
      const product = state.cart.find((item) => item.id == action.payload);
      product.quality -= 1;
    },

    increaseCart: (state, action) => {
      const product = state.cart.find((item) => item.id == action.payload);
      product.quality -= 1;
    },
  },
});

export const { addToCart, removeToCart } = CartSlice.actions;

export default CartSlice;
