import { FC, useContext } from "react";
import { AdminContext } from "../../contexts/AdminContext";
import { ProductItem } from "./ProductItem";
import "./style/Products.css";

export const ProductList: FC = () => {
  const productDataList = useContext(AdminContext);

  return (
    <div className="product-list">
      <div className="product-container">
        {productDataList.products.map((product) => (
          <ProductItem key={product.title} product={product} />
        ))}
      </div>
    </div>
  );
};
