import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/authSlice'
import productsReducer from "./slices/productsSlice";
import authtypeslice from "./slices/authtypeslice";
import pageSlice from "./slices/pageSlice";
export const store = configureStore({
  reducer : {
    auth : authReducer,
    products : productsReducer,
    authtype : authtypeslice,
    currentPage : pageSlice,
  }  
})