import { FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { Product } from "../../data/productData";
import { routeFactory } from "../../route-factory/routeFactory";
import "./style/Products.css";

interface Props {
  product: Product;
}
export const ProductItem: FC<Props> = ({ product }) => {
  return (
    <div className="product-item">
      <h2 className="title">{product.title}</h2>
      <img className="product-image" src={product.image} alt="" />
      <h4 className="price">{product.price + " sek"}</h4>
      <Link to={routeFactory.productScreen.productDetails(product.title)}>
        <Button variant="contained" className="add-btn">
          More info...
        </Button>
      </Link>
    </div>
  );
};
