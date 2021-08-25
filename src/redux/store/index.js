// import { createStore } from 'redux';
// import { devToolsEnchancer } from 'redux-devtools-extension';
// import { rootReducer } from '../reducers';
import { configureStore } from "@reduxjs/toolkit";
import contactsSlice from "../slices/items";
import filterSlice from "../slices/filter";
// const store = createStore(rootReducer, devToolsEnchancer());
const rootReducer = {
  contactsSlice,
  filterSlice,
};

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});
export default store;
