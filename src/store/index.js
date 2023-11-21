// import { createStore } from "redux";

// const reducerFunction = (state = { counter: 10 }, action) => {
//   //Synchronous Function
//   //We should not mutate the original state..
//   if (action.type === "INC") {
//     return { counter: state.counter + 1 };
//   }
//   if (action.type === "DIC") {
//     return { counter: state.counter - 1 };
//   }
//   if (action.type === "ADD") {
//     return { counter: state.counter + action.payload };
//   }
//   return state;
// };
// const store = createStore(reducerFunction);
// export default store;
import { applyMiddleware, getDefaultMiddleware } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";

//Note:- This is a middleware function which is used to intercept the actions before going to the reducer..
const myLogger = (store) => {
  return (next) => {
    return (action) => {
      console.log("Hello This is midldleware..");
      return next(action);
    };
  };
};

const store = configureStore({
  reducer: rootReducer,
  middleware: [myLogger],
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: false,
  //   }),
});
export default store;
