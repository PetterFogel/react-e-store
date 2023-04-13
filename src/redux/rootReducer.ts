import { Reducer } from "@reduxjs/toolkit";
import { ProductState } from "../pages/product-page/redux/types";
import { AdminState } from "../pages/admin-page/redux/types";
import { CheckoutState } from "../pages/checkout-page/redux/types";
import productsReducer from "../pages/product-page/redux/productsSlice";
import adminReducer from "../pages/admin-page/redux/adminSlice";
import checkoutReducer from "../pages/checkout-page/redux/checkoutSlice";

interface RootReducer {
  productState: Reducer<ProductState>;
  adminState: Reducer<AdminState>;
  checkoutState: Reducer<CheckoutState>;
}

export const rootReducer: RootReducer = {
  productState: productsReducer,
  adminState: adminReducer,
  checkoutState: checkoutReducer
};
