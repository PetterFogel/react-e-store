import { FC, useContext } from "react";
import { AdminContext } from "../../contexts/AdminContext";
import { Dialog, Typography } from "@mui/material";
import { ProductsAddDialogForm } from "./AdminProductDialogForm";

export const ProductsAddDialog: FC = () => {
  const { setIsDialogOpen, isDialogOpen, product } = useContext(AdminContext);

  return (
    <Dialog
      maxWidth="sm"
      open={isDialogOpen}
      onClose={() => setIsDialogOpen(false)}
      fullWidth>
      <Typography variant="h3" p={2}>
        {product.id ? "Edit product" : "Add a product"}
      </Typography>
      <ProductsAddDialogForm />
    </Dialog>
  );
};
