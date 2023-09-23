import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartData",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      // const newItem = action.payload;
      // const existingItem = state.find((item) => item.id === newItem.id);

      // if (existingItem) {
      //   existingItem.quantity++;
      // } else {
      //   state.push(newItem);
      // }
      state.push(action.payload);
    },

    removeCart(state, action) {
      return state.filter((val) => val.id !== action.payload);
    },

    incrementCart(state, action) {
      const item = state.find((item) => item.id === action.payload);
      if (item) {
        item.quantity++;
      }
    },

    decrementCart(state, action) {
      const item = state.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },
  },
});

export const { addToCart, removeCart, incrementCart, decrementCart } =
  cartSlice.actions;

export default cartSlice.reducer;
