import { FC, useContext } from "react";
import { AdminContext } from "../../contexts/AdminContext";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  Typography
} from "@mui/material";

interface Props {
  isDialogOpen: boolean;
  onDialogCloseClick: () => void;
}

export const DeleteProductDialog: FC<Props> = ({
  isDialogOpen,
  onDialogCloseClick
}) => {
  const { product, deleteProductHandler } = useContext(AdminContext);

  const deleteProduct = () => {
    onDialogCloseClick();
    deleteProductHandler(product.id);
  };

  return (
    <Dialog
      onClose={onDialogCloseClick}
      open={isDialogOpen}
      maxWidth={"xs"}
      fullWidth>
      <Box m={2}>
        <Typography variant={"h3"} align={"center"}>
          Are you sure?
        </Typography>
      </Box>
      <DialogContent>
        <Typography variant={"subtitle1"}>
          The product wont be available later if you delete it
        </Typography>
      </DialogContent>
      <DialogActions sx={{ margin: 1.5 }}>
        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            <Button
              variant={"outlined"}
              sx={{ width: "100%" }}
              onClick={onDialogCloseClick}>
              CANCEL
            </Button>
          </Grid>
          <Grid item md={6} xs={12}>
            <Button
              variant={"contained"}
              sx={{ width: "100%" }}
              onClick={deleteProduct}>
              YES
            </Button>
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog>
  );
};
