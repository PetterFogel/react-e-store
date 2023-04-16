import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "../../models/product";
import { Typography } from "@mui/material";
import { productPageStyles } from "./style/productPageStyles";
import { routeFactory } from "../../common/constants/routeFactory";

interface Props {
  product: Product;
}
export const ProductItem: FC<Props> = ({ product }) => {
  const classes = productPageStyles();
  const navigate = useNavigate();
  return (
    <div
      onClick={() =>
        navigate(routeFactory.productScreen.productDetails(product.id))
      }>
      <img
        className={classes.listImage}
        src={product.imageUrl}
        alt={product.imageUrl}
      />
      <Typography variant="h4" mb={0.2} sx={{ cursor: "pointer" }}>
        {product.title}
      </Typography>
      <Typography variant="h5">{product.price + " SEK"}</Typography>
    </div>
  );
};
