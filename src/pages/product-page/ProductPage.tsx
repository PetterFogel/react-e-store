import { FC } from "react";
import { Typography } from "@mui/material";
import { ProductList } from "./ProductList";

export const ProductPage: FC = () => {
  return (
    <div>
      <Typography variant={"h2"}>Products</Typography>
      <ProductList />
    </div>
  );
};
