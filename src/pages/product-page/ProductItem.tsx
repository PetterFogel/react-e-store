import { FC } from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { Product } from "../../data/productData";
import { routeFactory } from "../../route-factory/routeFactory";
import { productPageStyles } from "./style/productPageStyles";

interface Props {
  product: Product;
}
export const ProductItem: FC<Props> = ({ product }) => {
  const classes = productPageStyles();
  return (
    <div>
      <Link
        to={routeFactory.productScreen.productDetails(product.title)}
        style={{ textDecoration: "none" }}
      >
        <img
          className={classes.image}
          src={product.image}
          alt={product.image}
        />
        <Typography variant="h5" mb={0.2}>
          {product.title}
        </Typography>
      </Link>
      <Typography variant="h6">{product.price + " SEK"}</Typography>
    </div>
  );
};
