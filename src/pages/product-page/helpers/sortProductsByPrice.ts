import { Product } from "../../../models/product";

export const sortProductsByPrice = (
  products: Product[],
  sortValue: string | null
) => {
  const sortedProducts =
    sortValue === "ASC"
      ? products.slice().sort((a, b) => a.price - b.price)
      : products.slice().sort((a, b) => b.price - a.price);

  return sortValue === null ? products : sortedProducts;
};
