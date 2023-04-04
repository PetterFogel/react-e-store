import { FC, useState } from "react";
import { Dialog, Typography } from "@mui/material";
import { ProductsAddDialogForm } from "./AdminProductDialogForm";
import { DeleteProductDialog } from "./DeleteProductDialog";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { adminSelector, adminSlice } from "./redux/adminSlice";

export const ProductsAddDialog: FC = () => {
  const dispatch = useAppDispatch();
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const { isDialogOpen, product } = useAppSelector(adminSelector);
  const { setIsDialogOpen } = adminSlice.actions;

  return (
    <Dialog
      maxWidth="sm"
      open={isDialogOpen}
      onClose={() => dispatch(setIsDialogOpen(false))}
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
