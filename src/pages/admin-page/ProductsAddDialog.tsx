import { FC, useContext } from "react";
import { Dialog, Typography } from "@mui/material";
import { Loader } from "../../common/components/loader/Loader";
import { ProductsAddDialogForm } from "./ProductsAddDialogForm";
import { AdminContext } from "../../contexts/AdminContext";

interface Props {
  isDialogOpen: boolean;
  onDialogCloseClick: () => void;
}

export const ProductsAddDialog: FC<Props> = ({
  isDialogOpen,
  onDialogCloseClick
}) => {
  const { isModifiedProductLoading } = useContext(AdminContext);

  return (
    <Dialog
      maxWidth="sm"
      open={isDialogOpen}
      onClose={onDialogCloseClick}
      fullWidth>
      <Typography variant="h3" p={2}>
        Add a Product
      </Typography>
      {isModifiedProductLoading ? (
        <Loader />
      ) : (
        <ProductsAddDialogForm onDialogCloseClick={onDialogCloseClick} />
      )}
    </Dialog>
  );
};
