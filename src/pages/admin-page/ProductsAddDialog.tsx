import { FC, useContext } from "react";
import { AdminContext } from "../../contexts/AdminContext";
import { Dialog, Typography } from "@mui/material";
import { ProductsAddDialogForm } from "./ProductsAddDialogForm";

export const ProductsAddDialog: FC = () => {
  const { setIsDialogOpen, isDialogOpen } = useContext(AdminContext);

  return (
    <Dialog
      maxWidth="sm"
      open={isDialogOpen}
      onClose={() => setIsDialogOpen(false)}
      fullWidth>
      <Typography variant="h3" p={2}>
        Add a Product
      </Typography>
      <ProductsAddDialogForm />
    </Dialog>
  );
};
