import { Reducer } from "@reduxjs/toolkit";
import { ProductState } from "../pages/product-page/redux/types";
import productsReducer from "../pages/product-page/redux/productsSlice";
import adminReducer from "../pages/admin-page/redux/adminSlice";
import { AdminState } from "../pages/admin-page/redux/types";

interface RootReducer {
  productState: Reducer<ProductState>;
  adminState: Reducer<AdminState>;
}

export const rootReducer: RootReducer = {
  productState: productsReducer,
  adminState: adminReducer
};
