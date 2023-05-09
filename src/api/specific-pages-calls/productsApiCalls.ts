import { Product, ProductItem } from "../../models/product";
import { fetchHttp, fetchHttpById } from "../httpApiClient";
import { HttpMethod } from "../../common/constants/enums";

export const fetchProductsRequest = async (): Promise<Product[]> => {
  return await fetchHttp("products", HttpMethod.GET);
};

export const fetchProductRequest = async (
  id: string | undefined
): Promise<Product> => {
  return await fetchHttpById("products", id, HttpMethod.GET);
};

export const addProductRequest = async (
  product: ProductItem
): Promise<void> => {
  return await fetchHttp("products", HttpMethod.POST, product);
};

export const updateProductRequest = async (
  id: string | undefined,
  product: ProductItem
): Promise<void> => {
  return await fetchHttpById("products", id, HttpMethod.PUT, product);
};

export const deleteProductRequest = async (
  id: string | undefined
): Promise<void> => {
  return await fetchHttpById("products", id, HttpMethod.DELETE);
};
