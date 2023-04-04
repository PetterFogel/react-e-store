import { FC, useEffect } from "react";
import { Loader } from "../../common/components/loader/Loader";
import { ErrorPanel } from "../../common/components/error-panel/ErrorPanel";
import { Typography } from "@mui/material";
import { adminSelector } from "./redux/adminSlice";
import { adminPageStyles } from "./style/adminPageStyles";
import { AdminFilterPanel } from "./AdminsFilterPanel";
import { AdminProductsList } from "./AdminProductsList";
import { ProductsAddDialog } from "./AdminProductDialog";
import { fetchProductsHandler } from "./redux/actions";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

export const AdminPage: FC = () => {
  const classes = adminPageStyles();
  const dispatch = useAppDispatch();
  const { products, isProductsLoading, productsError } =
    useAppSelector(adminSelector);

  useEffect(() => {
    dispatch(fetchProductsHandler());
  }, []);

  if (productsError) return <ErrorPanel errorMsg={productsError} />;

  return (
    <div className={classes.root}>
      <Typography variant={"h2"} mb={2}>
        Admin
      </Typography>
      <AdminFilterPanel />
      {isProductsLoading ? (
        <Loader />
      ) : (
        <AdminProductsList products={products} />
      )}
      <ProductsAddDialog />
    </div>
  );
};
