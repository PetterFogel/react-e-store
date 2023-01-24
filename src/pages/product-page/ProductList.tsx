import { FC, useContext } from "react";
import { ProductItem } from "./ProductItem";
import { AdminContext } from "../../contexts/AdminContext";
import { productPageStyles } from "./style/productPageStyles";

export const ProductList: FC = () => {
  const classes = productPageStyles();
  const productDataList = useContext(AdminContext);

  return (
    <div className={classes.listContainer}>
      {productDataList.products.map((product, index) => (
        <ProductItem key={index} product={product} />
      ))}
    </div>
  );
};
