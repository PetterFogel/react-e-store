import {
  fetchProductRequest,
  fetchProductsRequest
} from "../../../api/specific-pages-calls/productsApiCalls";
import { AppThunk } from "../../../redux/store";
import { productSlice } from "./productsSlice";

export const {
  setProducts,
  setIsProductsLoading,
  setProductsError,
  setIsProductLoading,
  setProduct,
  setProductError
} = productSlice.actions;

export const fetchProductsHandler = (): AppThunk => {
  return async (dispatch) => {
    try {
      dispatch(setIsProductsLoading(true));
      dispatch(setProductsError(null));

      const products = await fetchProductsRequest();

      dispatch(setProducts(products));
      dispatch(setIsProductsLoading(false));
    } catch (error) {
      if (error instanceof Error) {
        const errorMsg = error.message;
        dispatch(setIsProductsLoading(false));
        dispatch(setProductsError(errorMsg));
      }
    }
  };
};

export const fetchProductHandler = (id: string | undefined): AppThunk => {
  return async (dispatch) => {
    try {
      dispatch(setIsProductLoading(true));
      dispatch(setProductError(null));

      const product = await fetchProductRequest(id);

      dispatch(setProduct(product));
      dispatch(setIsProductLoading(false));
    } catch (error) {
      if (error instanceof Error) {
        const errorMsg = error.message;
        dispatch(setIsProductLoading(false));
        dispatch(setProductError(errorMsg));
      }
    }
  };
};
