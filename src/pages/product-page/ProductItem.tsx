import { FC } from "react";
import { Product } from "../../models/product";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { productPageStyles } from "./style/productPageStyles";
import { fetchProductHandler } from "./redux/actions";

interface Props {
  product: Product;
}
export const ProductItem: FC<Props> = ({ product }) => {
  const classes = productPageStyles();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <div onClick={() => dispatch(fetchProductHandler(product.id, navigate))}>
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
