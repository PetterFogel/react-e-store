import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../../models/product";
import { ProductState } from "./types";

const initialState: ProductState = {
  products: [],
  isProductsLoading: false,
  productsError: null
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, { payload }: PayloadAction<Product[]>) => {
      state.products = payload;
    },
    setIsProductsLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isProductsLoading = payload;
    },
    setProductsError: (state, { payload }: PayloadAction<string | null>) => {
      state.productsError = payload;
    }
  }
});
