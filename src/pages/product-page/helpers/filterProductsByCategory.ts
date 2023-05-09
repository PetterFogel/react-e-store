import { Product } from "../../../models/product";
import { Categories } from "../../../common/constants/enums";

export const filterProductsByCategory = (
  products: Product[],
  category: string
) => {
  return category === Categories.ALL
    ? products
    : products.filter((p) => p.category == category);
};
