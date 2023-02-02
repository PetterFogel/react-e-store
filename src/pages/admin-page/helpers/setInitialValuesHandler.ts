import { Product, ProductItem } from "../../../models/product";

export const setInitialValuesHandler = (product: Product): ProductItem => {
  return {
    title: product ? product.title : "",
    imageUrl: product ? product.imageUrl : "",
    category: product ? product.category : "",
    info: product ? product.info : "",
    sizes: product ? product.sizes : [],
    size: product ? product.size : 0,
    price: product ? product.price : 0,
    rating: product ? product.rating : 0
  };
};
