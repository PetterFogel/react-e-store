import { Product } from "../../../models/product";

export interface ProductState {
  products: Product[];
  isProductsLoading: boolean;
  productsError: string | null;
}
