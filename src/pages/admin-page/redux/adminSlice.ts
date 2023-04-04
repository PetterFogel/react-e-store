import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productState } from "../../../common/constants/productState";
import { Product } from "../../../models/product";
import { RootState } from "../../../redux/store";
import { AdminState } from "./types";

const initialState: AdminState = {
  products: [],
  isProductsLoading: false,
  productsError: null,
  product: productState,
  isProductLoading: false,
  productError: null,
  isModifiedProductLoading: false,
  isDialogOpen: false
};

export const adminSlice = createSlice({
  name: "admin",
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
    },
    setProduct: (state, { payload }: PayloadAction<Product>) => {
      state.product = payload;
    },
    setIsProductLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isProductLoading = payload;
    },
    setProductError: (state, { payload }: PayloadAction<string | null>) => {
      state.productsError = payload;
    },
    setIsModifiedProductLoading: (
      state,
      { payload }: PayloadAction<boolean>
    ) => {
      state.isModifiedProductLoading = payload;
    },
    setIsDialogOpen: (state, { payload }: PayloadAction<boolean>) => {
      state.isDialogOpen = payload;
    }
  }
});

export const {
  setProducts,
  setIsProductsLoading,
  setProductsError,
  setIsProductLoading,
  setProduct,
  setProductError,
  setIsModifiedProductLoading,
  setIsDialogOpen
} = adminSlice.actions;

export const adminSelector = (state: RootState): AdminState => state.adminState;

export default adminSlice.reducer;
