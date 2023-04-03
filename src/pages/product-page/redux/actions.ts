import axios from "axios";
import { AppThunk } from "../../../redux/store";
import {
  setIsProductsLoading,
  setProducts,
  setProductsError
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
