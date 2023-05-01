import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import {
  fetchProductRequest,
  fetchProductsRequest
} from "../../../api/specific-pages-calls/productsApiCalls";
import { toastOptions } from "../../../common/constants/toastOptions";
import { ProductItem } from "../../../models/product";
import { AppThunk } from "../../../redux/store";
import { adminSlice } from "./adminSlice";

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

export const fetchProductsHandler = (): AppThunk => {
  return async (dispatch) => {
    try {
      dispatch(setIsProductsLoading(true));
      dispatch(setProductsError(null));

      const products = await fetchProductsRequest();

      dispatch(setProducts(products));
      dispatch(setIsProductsLoading(false));
    } catch (error) {
      if (error instanceof AxiosError) {
        dispatch(setIsProductsLoading(false));
        dispatch(setProductsError(error.message));
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
      dispatch(setIsDialogOpen(true));
    } catch (error) {
      if (error instanceof AxiosError) {
        dispatch(setIsProductLoading(false));
        dispatch(setIsDialogOpen(false));
        toast.error(error.message, toastOptions);
      }
    }
  };
};

export const addProductHandler = (product: ProductItem): AppThunk => {
  return async (dispatch) => {
    try {
      dispatch(setIsModifiedProductLoading(true));

      await axios(`${process.env.REACT_APP_API_BASEURL}/shoes`, {
        method: "POST",
        data: product
      });

      dispatch(setIsModifiedProductLoading(false));
      dispatch(setIsDialogOpen(false));
      dispatch(fetchProductsHandler());
      toast.success("The product has been created!", toastOptions);
    } catch (error) {
      if (error instanceof AxiosError) {
        dispatch(setIsModifiedProductLoading(false));
        toast.error(error.message, toastOptions);
      }
    }
  };
};

export const updateProductHandler = (
  productId: string,
  product: ProductItem
): AppThunk => {
  return async (dispatch) => {
    try {
      dispatch(setIsModifiedProductLoading(true));

      await axios(`${process.env.REACT_APP_API_BASEURL}/shoes/${productId}`, {
        method: "PUT",
        data: product
      });

      dispatch(setIsModifiedProductLoading(false));
      dispatch(setIsDialogOpen(false));
      dispatch(fetchProductsHandler());
      toast.success("The product has been updated!", toastOptions);
    } catch (error) {
      if (error instanceof AxiosError) {
        dispatch(setIsModifiedProductLoading(false));
        toast.error(error.message, toastOptions);
      }
    }
  };
};

export const deleteProductHandler = (productId: string): AppThunk => {
  return async (dispatch) => {
    try {
      dispatch(setIsModifiedProductLoading(true));

      await axios(`${process.env.REACT_APP_API_BASEURL}/shoes/${productId}`, {
        method: "DELETE"
      });

      dispatch(setIsModifiedProductLoading(false));
      dispatch(setIsDialogOpen(false));
      dispatch(fetchProductsHandler());
      toast.success("The product has been deleted!", toastOptions);
    } catch (error) {
      if (error instanceof AxiosError) {
        dispatch(setIsModifiedProductLoading(false));
        toast.error(error.message, toastOptions);
      }
    }
  };
};
