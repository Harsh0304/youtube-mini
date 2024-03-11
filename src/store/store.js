import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";

const store = configureStore({
  reducer: { items: dataSlice },
});
export default store;
