import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productState } from "../../../common/constants/productState";
import { Product } from "../../../models/product";
import { RootState } from "../../../redux/store";
import { ProductState } from "./types";

const initialState: ProductState = {
  products: [],
  isProductsLoading: false,
  productsError: null,
  product: productState,
  isProductLoading: false,
  productError: null
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
    },
    setProduct: (state, { payload }: PayloadAction<Product>) => {
      state.product = payload;
    },
    setIsProductLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isProductsLoading = payload;
    },
    setProductError: (state, { payload }: PayloadAction<string | null>) => {
      state.productsError = payload;
    }
  }
});

export const {
  setProducts,
  setIsProductsLoading,
  setProductsError,
  setIsProductLoading,
  setProduct,
  setProductError
} = productSlice.actions;

export const productsSelector = (state: RootState): ProductState =>
  state.productState;

export default productSlice.reducer;
