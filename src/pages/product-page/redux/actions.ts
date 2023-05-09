import { toast } from "react-toastify";
import { AppThunk } from "../../../redux/store";
import { toastOptions } from "../../../common/constants/toastOptions";
import { productSlice } from "./productsSlice";
import {
  fetchProductRequest,
  fetchProductsRequest
} from "../../../api/specific-pages-calls/productsApiCalls";
import { routeFactory } from "../../../common/constants/routeFactory";
import { NavigateFunction } from "react-router-dom";

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
        dispatch(setIsProductsLoading(false));
        dispatch(setProductsError(error.message));
      }
    }
  };
};

export const fetchProductHandler = (
  id: string,
  navigate: NavigateFunction
): AppThunk => {
  return async (dispatch) => {
    try {
      dispatch(setIsProductLoading(true));
      dispatch(setProductError(null));

      const product = await fetchProductRequest(id);

      dispatch(setProduct(product));
      navigate(routeFactory.productScreen.productDetails(id));
      dispatch(setIsProductLoading(false));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(setIsProductLoading(false));
        navigate(routeFactory.productScreen.products());
        toast.error(error.message, toastOptions);
      }
    }
  };
};
