import { FC, useContext } from "react";
import { Typography } from "@mui/material";
import { ProductList } from "./ProductList";
import { productPageStyles } from "./style/productPageStyles";
import { AdminContext } from "../../contexts/AdminContext";

export const ProductPage: FC = () => {
  const classes = productPageStyles();
  const { products } = useContext(AdminContext);

  return (
    <div className={classes.root}>
      <Typography variant={"h2"}>Products</Typography>
      <ProductList products={products} />
    </div>
  );
};
