import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    productCarts: [{ id: 100, name: "Baju" }],
  },
  reducers: {
    addToCart: (state, action) => {
      // MISAL MAU MASUKIN KE DATABASE -> PANGGIL SERVER MENGGUNAKAN AXIOS
      // KARENA HARUS PURE FUNCTION
      state.productCarts.push(action.payload);
    },
  },
});

export const cartReducer = cartSlice.reducer;

// console.log(cartReducer, "<<< cart reducer");
export const { addToCart } = cartSlice.actions;
