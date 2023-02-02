import { FC, useContext, useEffect } from "react";
import { Loader } from "../../common/components/loader/Loader";
import { ErrorPanel } from "../../common/components/error-panel/ErrorPanel";
import { Typography } from "@mui/material";
import { ProductList } from "./ProductList";
import { ProductsContext } from "../../contexts/ProductContext";
import { productPageStyles } from "./style/productPageStyles";

export const ProductPage: FC = () => {
  const classes = productPageStyles();
  const { products, isProductsLoading, productsError, fetchProductsHandler } =
    useContext(ProductsContext);

  useEffect(() => {
    fetchProductsHandler();
  }, []);

  if (productsError) return <ErrorPanel errorMsg={productsError} />;

  return (
    <div className={classes.root}>
      {isProductsLoading ? (
        <Loader />
      ) : (
        <>
          <Typography variant={"h2"}>Products</Typography>
          <ProductList products={products} />
        </>
      )}
    </div>
  );
};
