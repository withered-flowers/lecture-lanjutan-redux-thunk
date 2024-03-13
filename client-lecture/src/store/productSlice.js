import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    isLoading: false,
    isError: false,
    products: [],
  },
  reducers: {
    // property dimana dalamnya harus "function"

    // Sifatnya harus PURE FUNCTION
    fetchDataProductsPending: (state) => {
      // Ganti si isLoading jadi true

      // Sebenarnya data / state di dalam reducer sifatnya adalah "immutable"
      state.isLoading = true;
      state.isError = false;
      state.products = [];
    },
    fetchDataProductsFulfilled: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.products = action.payload;
    },
    fetchDataProductsRejected: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.products = action.payload;
    },
  },
});

// ? OPTIONAL - Karena ini fungsi, boleh dikasih argument / parameter
export const fetchProducts =
  () =>
  // Fungsi ini AKAN MEGEMBALIKAN FUNGSI LAINNYA YANG DIGUNAKAN UNTUK NGEDELAY EKSEKUSI (THUNK)
  // THUNK udah ada Aturannya:
  // - Parameternya cm ada 2
  //    - dispatch
  //    - getState
  async (dispatch, getState) => {
    // Di sini KARENA SIFATNYA ASYNC, berarti BOLEH menerima SIDE EFFECT !
    try {
      dispatch(fetchDataProductsPending());

      // Dispatch => suatu Function yang hanya bisa membaca Action
      // - Action itu adalah suatu Plain Objacet
      // - Yang isinya adalah Type dan Payload

      // HTTP Status Code = 2xx dan 3xx
      // HTTP Status Code = 4xx dan 5xx
      const { data } = await axios({
        url: "http://localhost:3001/products",
      });

      dispatch(fetchDataProductsFulfilled(data || []));

      console.log(getState());
      // setProducts(data || []);
    } catch (error) {
      dispatch(fetchDataProductsRejected(error));
      console.log(error, "<<< An error while fetch products");
    }
  };

// ! EXPORT
export const {
  fetchDataProductsPending,
  fetchDataProductsFulfilled,
  fetchDataProductsRejected,
} = productSlice.actions;

export default productSlice.reducer;
