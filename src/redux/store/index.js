// import { createStore } from 'redux';
// import { devToolsEnchancer } from 'redux-devtools-extension';
// import { rootReducer } from '../reducers';
import { configureStore } from "@reduxjs/toolkit";
import items from "../slices/items";
import filter from "../slices/filter";
// const store = createStore(rootReducer, devToolsEnchancer());
const rootReducer = {
  items,
  filter,
};

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});
export default store;
