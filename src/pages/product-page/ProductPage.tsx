import { FC, useEffect } from "react";
import { Loader } from "../../common/components/loader/Loader";
import { ErrorPanel } from "../../common/components/error-panel/ErrorPanel";
import { Typography } from "@mui/material";
import { ProductList } from "./ProductList";
import { productPageStyles } from "./style/productPageStyles";
import { fetchProductsHandler } from "./redux/actions";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { productsSelector } from "./redux/productsSlice";

export const ProductPage: FC = () => {
  const dispatch = useAppDispatch();
  const classes = productPageStyles();
  const { products, isProductsLoading, productsError } =
    useAppSelector(productsSelector);

  useEffect(() => {
    dispatch(fetchProductsHandler());
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
