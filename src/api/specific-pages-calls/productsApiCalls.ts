import { Product } from "../../models/product";
import { fetchHttp } from "../httpApiClient";
import { HttpMethod } from "../../common/constants/enums";

export const fetchProductsRequest = async (): Promise<Product[]> => {
  return await fetchHttp("products", HttpMethod.GET);
};
