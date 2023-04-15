import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartProduct } from "../../../models/cartProduct";
import { RootState } from "../../../redux/store";
import { CheckoutState } from "./types";

const initialState: CheckoutState = {
  cart: [],
  isCartLoading: false,
  cartError: null,
  cartProducts: [],
  cartOrder: [],
  totalAmount: 0,
  orderAmount: 0,
  tax: 0,
  isModifiedCartLoading: false
};

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setCart: (state, { payload }: PayloadAction<CartProduct[]>) => {
      state.cart = payload;
    },
    setIsCartLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isCartLoading = payload;
    },
    setCartError: (state, { payload }: PayloadAction<string | null>) => {
      state.cartError = payload;
    },
    setCartProducts: (state, { payload }: PayloadAction<CartProduct[]>) => {
      state.cartProducts = payload;
    },
    setCartOrder: (state, { payload }: PayloadAction<CartProduct[]>) => {
      state.cartOrder = payload;
    },
    setTotalAmount: (state, { payload }: PayloadAction<number>) => {
      state.totalAmount = payload;
    },
    setOrderAmount: (state, { payload }: PayloadAction<number>) => {
      state.orderAmount = payload;
    },
    setTax: (state, { payload }: PayloadAction<number>) => {
      state.tax = payload;
    },
    setIsModifiedCartLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isModifiedCartLoading = payload;
    }
  }
});

export const checkoutSelector = (state: RootState): CheckoutState =>
  state.checkoutState;

export default checkoutSlice.reducer;
