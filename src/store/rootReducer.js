import { combineReducers } from "redux";
import apiDataSlice from "./apiDataSlice";
import counterSlice from "./counterSlice";
import postDataSlice from "./postDataSlice";
import deleteDataSlice from "./deleteDataSlice";
import editDataSlice from "./editDataSlice";

export const rootReducer = combineReducers([
  apiDataSlice.reducer,
  counterSlice.reducer,
  postDataSlice.reducer,
  deleteDataSlice.reducer,
  editDataSlice.reducer,
]);
