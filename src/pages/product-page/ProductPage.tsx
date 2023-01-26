import { FC, useContext, useEffect } from "react";
import { Typography } from "@mui/material";
import { ProductList } from "./ProductList";
import { productPageStyles } from "./style/productPageStyles";
import { ProductsContext } from "../../contexts/ProductContext";
import { ErrorPanel } from "../../common/components/error-panel.tsx/ErrorPanel";

export const ProductPage: FC = () => {
  const classes = productPageStyles();
  const { products, isLoading, error, fetchProductsHandler } =
    useContext(ProductsContext);

  useEffect(() => {
    fetchProductsHandler();
  }, []);

  if (error) return <ErrorPanel errorMsg={error} />;

  return (
    <div className={classes.root}>
      {isLoading ? (
        <Typography variant={"h3"}>Loading...</Typography>
      ) : (
        <>
          <Typography variant={"h2"}>Products</Typography>
          <ProductList products={products} />
        </>
      )}
    </div>
  );
};
