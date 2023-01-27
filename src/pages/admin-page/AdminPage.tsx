import { FC, useContext, useEffect, useState } from "react";
import { Loader } from "../../common/components/loader/Loader";
import { ErrorPanel } from "../../common/components/error-panel.tsx/ErrorPanel";
import { Typography } from "@mui/material";
import { adminPageStyles } from "./style/adminPageStyles";
import { ProductsContext } from "../../contexts/ProductContext";
import { AdminFilterPanel } from "./AdminsFilterPanel";
import { AdminProductsList } from "./AdminProductsList";
import { ProductsAddDialog } from "./ProductsAddDialog";

export const AdminPage: FC = () => {
  const classes = adminPageStyles();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { products, isProductsLoading, productsError, fetchProductsHandler } =
    useContext(ProductsContext);

  useEffect(() => {
    fetchProductsHandler();
  }, []);

  const openDialogHandler = () => {
    setIsDialogOpen(true);
  };

  if (productsError) return <ErrorPanel errorMsg={productsError} />;

  return (
    <div className={classes.root}>
      <Typography variant={"h2"} mb={2}>
        Admin
      </Typography>
      <AdminFilterPanel onDialogOpenClick={openDialogHandler} />
      {isProductsLoading ? (
        <Loader />
      ) : (
        <AdminProductsList products={products} />
      )}
      <ProductsAddDialog
        isDialogOpen={isDialogOpen}
        onDialogCloseClick={() => setIsDialogOpen(false)}
      />
    </div>
  );
};
