import { FC } from "react";
import { Typography } from "@mui/material";
import { ProductList } from "./ProductList";
import { productPageStyles } from "./style/productPageStyles";

export const ProductPage: FC = () => {
  const classes = productPageStyles();
  return (
    <div className={classes.root}>
      <Typography variant={"h2"}>Products</Typography>
      <ProductList />
    </div>
  );
};
