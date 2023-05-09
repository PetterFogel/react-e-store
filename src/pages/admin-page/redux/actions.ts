import { toast } from "react-toastify";
import { AppThunk } from "../../../redux/store";
import { adminSlice } from "./adminSlice";
import { ProductItem } from "../../../models/product";
import { toastOptions } from "../../../common/constants/toastOptions";
import {
  addProductRequest,
  deleteProductRequest,
  fetchProductRequest,
  fetchProductsRequest,
  updateProductRequest
} from "../../../api/specific-pages-calls/productsApiCalls";

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
      if (error instanceof Error) {
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
      dispatch(setIsDialogOpen(false));

      const product = await fetchProductRequest(id);

      dispatch(setProduct(product));
      dispatch(setIsProductLoading(false));
      dispatch(setIsDialogOpen(true));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(setIsProductLoading(false));
        toast.error(error.message, toastOptions);
      }
    }
  };
};

export const addProductHandler = (product: ProductItem): AppThunk => {
  return async (dispatch) => {
    try {
      dispatch(setIsModifiedProductLoading(true));

      await addProductRequest(product);

      dispatch(setIsModifiedProductLoading(false));
      dispatch(setIsDialogOpen(false));
      dispatch(fetchProductsHandler());
      toast.success("The product has been created!", toastOptions);
    } catch (error) {
      if (error instanceof Error) {
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

      await updateProductRequest(productId, product);

      dispatch(setIsModifiedProductLoading(false));
      dispatch(setIsDialogOpen(false));
      dispatch(fetchProductsHandler());
      toast.success("The product has been updated!", toastOptions);
    } catch (error) {
      if (error instanceof Error) {
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

      await deleteProductRequest(productId);

      dispatch(setIsModifiedProductLoading(false));
      dispatch(setIsDialogOpen(false));
      dispatch(fetchProductsHandler());
      toast.success("The product has been deleted!", toastOptions);
    } catch (error) {
      if (error instanceof Error) {
        dispatch(setIsModifiedProductLoading(false));
        toast.error(error.message, toastOptions);
      }
    }
  };
};
