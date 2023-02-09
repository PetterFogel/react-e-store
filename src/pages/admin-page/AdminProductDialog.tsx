import { FC, useContext, useState } from "react";
import { AdminContext } from "../../contexts/AdminContext";
import { Dialog, Typography } from "@mui/material";
import { ProductsAddDialogForm } from "./AdminProductDialogForm";
import { DeleteProductDialog } from "./DeleteProductDialog";

export const ProductsAddDialog: FC = () => {
  const { setIsDialogOpen, isDialogOpen, product } = useContext(AdminContext);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  return (
    <Dialog
      maxWidth="sm"
      open={isDialogOpen}
      onClose={() => setIsDialogOpen(false)}
      fullWidth>
      <Typography variant="h3" p={2}>
        {product.id ? "Edit product" : "Add a product"}
      </Typography>
      <ProductsAddDialogForm
        onDeleteDialogOpenClick={() => setIsDeleteDialogOpen(true)}
      />
      <DeleteProductDialog
        isDialogOpen={isDeleteDialogOpen}
        onDialogCloseClick={() => setIsDeleteDialogOpen(false)}
      />
    </Dialog>
  );
};
