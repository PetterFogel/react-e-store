import { FC, useContext, useEffect } from "react";
import { Loader } from "../../common/components/loader/Loader";
import { ErrorPanel } from "../../common/components/error-panel/ErrorPanel";
import { Typography } from "@mui/material";
import { AdminContext } from "../../contexts/AdminContext";
import { adminPageStyles } from "./style/adminPageStyles";
import { AdminFilterPanel } from "./AdminsFilterPanel";
import { AdminProductsList } from "./AdminProductsList";
import { ProductsAddDialog } from "./AdminProductDialog";

export const AdminPage: FC = () => {
  const classes = adminPageStyles();
  const { products, isProductsLoading, productsError, fetchProductsHandler } =
    useContext(AdminContext);

  useEffect(() => {
    fetchProductsHandler();
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
