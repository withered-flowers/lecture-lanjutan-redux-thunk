import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterSlice";
import { cartReducer } from "./cartSlice";
import productSlice from "./productSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    barang: productSlice,
  },
});

export default store;
