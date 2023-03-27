import { Reducer } from "@reduxjs/toolkit";
import { ProductState } from "../pages/product-page/redux/types";
import productsReducer from "../pages/product-page/redux/productsSlice";

interface RootReducer {
  productState: Reducer<ProductState>;
}

export const rootReducer: RootReducer = {
  productState: productsReducer
};
