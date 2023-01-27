import { FC } from "react";
import { Dialog, Typography } from "@mui/material";
import { Loader } from "../../common/components/loader/Loader";
import { ProductsAddDialogForm } from "./ProductsAddDialogForm";

interface Props {
  isDialogOpen: boolean;
  onDialogCloseClick: () => void;
}

export const ProductsAddDialog: FC<Props> = ({
  isDialogOpen,
  onDialogCloseClick
}) => {
  return (
    <Dialog
      maxWidth="sm"
      open={isDialogOpen}
      onClose={onDialogCloseClick}
      fullWidth>
      <Typography variant="h3" p={2}>
        Add a Product
      </Typography>
      <ProductsAddDialogForm onDialogCloseClick={onDialogCloseClick} />
    </Dialog>
  );
};
