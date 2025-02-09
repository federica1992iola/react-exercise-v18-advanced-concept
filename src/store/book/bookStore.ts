import { useDispatch, useSelector, useStore } from "react-redux";
import bookReducer, { BookState } from "./bookReducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: bookReducer
});

export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
  
export default store;