import { FC } from "react";
import { Button } from "@mui/material";
import { adminPageStyles } from "./style/adminPageStyles";
import { adminSlice } from "./redux/adminSlice";
import { useAppDispatch } from "../../redux/hooks";
import { productState } from "../../common/constants/productState";

export const AdminFilterPanel: FC = () => {
  const classes = adminPageStyles();
  const dispatch = useAppDispatch();
  const { setIsDialogOpen, setProduct } = adminSlice.actions;

  const openDialogHandler = () => {
    dispatch(setIsDialogOpen(true));
    dispatch(setProduct(productState));
  };

  return (
    <div className={classes.filterPanel}>
      <Button
        variant="contained"
        color="success"
        size="medium"
        onClick={openDialogHandler}>
        Add a product
      </Button>
    </div>
  );
};
