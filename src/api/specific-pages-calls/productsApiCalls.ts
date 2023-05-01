import { Product } from "../../models/product";
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
