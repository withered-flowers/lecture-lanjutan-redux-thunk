import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

const counterReducer = counterSlice.reducer;
const { increment, decrement, incrementByAmount } = counterSlice.actions;

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
  },
  reducers: {
    addProduct: (state) => {
      state.data.push({
        name: "ini product baru",
      });
    },
  },
});

const productReducer = productSlice.reducer;
const { addProduct } = productSlice.actions;

const store = configureStore({
  reducer: {
    counter: counterReducer,
    productReducer,
  },
});

console.log(store.getState(), "<<< state");

store.dispatch({
  type: "counter/increment",
});

console.log(store.getState(), "<<< state 2");

console.log(increment(), "<<< ini func increment");
store.dispatch(increment());
console.log(store.getState(), "<<< state 3");

store.dispatch(increment());
console.log(store.getState(), "<<< state 4");

store.dispatch(incrementByAmount(100));
console.log(store.getState(), "<<< state 5");
