import axios from "axios";
import { AppThunk } from "../../../redux/store";
import {
  setIsProductsLoading,
  setProducts,
  setProductsError,
  setProduct,
  setIsProductLoading,
  setProductError
} from "./productsSlice";

export const fetchProductsHandler = (): AppThunk => {
  return async (dispatch) => {
    try {
      dispatch(setIsProductsLoading(true));
      dispatch(setProductsError(null));

      const response = await axios(
        `${process.env.REACT_APP_API_BASEURL}/shoes`
      );

      dispatch(setProducts(response.data));
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

      const response = await axios(
        `${process.env.REACT_APP_API_BASEURL}/shoes/${id}`
      );

      console.log(response);

      dispatch(setProduct(response.data));
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