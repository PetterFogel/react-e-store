import { Product } from "../../../models/product";

export interface AdminState {
  products: Product[];
  isProductsLoading: boolean;
  productsError: string | null;
  product: Product;
  isProductLoading: boolean;
  productError: string | null;
  isModifiedProductLoading: boolean;
  isDialogOpen: boolean;
}
