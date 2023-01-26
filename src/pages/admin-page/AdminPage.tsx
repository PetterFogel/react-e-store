import { FC, useContext, useEffect } from "react";
import { Loader } from "../../common/components/loader/Loader";
import { ErrorPanel } from "../../common/components/error-panel.tsx/ErrorPanel";
import { Typography } from "@mui/material";
import { adminPageStyles } from "./style/adminPageStyles";
import { ProductsContext } from "../../contexts/ProductContext";
import { AdminFilterPanel } from "./AdminsFilterPanel";
import { AdminProductsList } from "./AdminProductsList";

export const AdminPage: FC = () => {
  const classes = adminPageStyles();
  const { products, isLoading, error, fetchProductsHandler } =
    useContext(ProductsContext);

  useEffect(() => {
    fetchProductsHandler();
  }, []);

  if (error) return <ErrorPanel errorMsg={error} />;

  return (
    <div className={classes.root}>
      <Typography variant={"h2"} mb={2}>
        Admin
      </Typography>
      <AdminFilterPanel />
      {isLoading ? <Loader /> : <AdminProductsList products={products} />}
    </div>
  );
};
