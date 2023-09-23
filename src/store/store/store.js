import { configureStore } from "@reduxjs/toolkit";
import dataSlicer from "../reducer/dataSlicer";
import cartSlicer from "../reducer/cartSlicer";

export const store = configureStore({
  reducer: {
    productsData: dataSlicer,
    cartData:cartSlicer
  },
});
