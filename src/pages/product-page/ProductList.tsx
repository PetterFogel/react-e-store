import { FC } from "react";
import { Product } from "../../models/product";
import { ProductItem } from "./ProductItem";
import { productPageStyles } from "./style/productPageStyles";

interface Props {
  products: Product[];
}

export const ProductList: FC<Props> = ({ products }) => {
  const classes = productPageStyles();
  return (
    <div className={classes.listContainer}>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};
