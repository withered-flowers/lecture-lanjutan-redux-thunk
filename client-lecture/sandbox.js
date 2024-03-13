import { legacy_createStore as createStore } from "redux";

const initialState = {
  count: 0,
  theme: "light",
  products: [],
  cart: [],
};

function reducer(state = initialState, action) {
  // tidak boleh ada async / Math.random()
  // WAJIB PURE FUNCTION
  // console.log({ state, action }, "<<< ini di reducer");

  switch (action.type) {
    case "counter/increment":
      // state.count += 1; // ini mutabble
      // return {
      //   count: state.count + 1,
      //   theme: state.theme,
      //   products: state.products,
      //   cart: state.cart,
      // };
      return {
        ...state,
        count: state.count + 1,
      };
    case "counter/decrement":
      return {
        ...state,
        count: state.count - 1,
      };
    case "counter/incrementByAmount":
      return {
        ...state,
        count: state.count + action.payload,
      };
  }
  return state;
}

const store = createStore(reducer);

console.log(store.getState(), "<<< get state ");

store.dispatch({
  type: "counter/increment",
});

console.log(store.getState(), "<<< get state 2");

store.dispatch({
  type: "counter/increment",
});

console.log(store.getState(), "<<< get state 3");

store.dispatch({
  type: "counter/incrementByAmount",
  payload: 100,
});

console.log(store.getState(), "<<< get state 4");
