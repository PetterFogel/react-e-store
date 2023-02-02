import { FC, useContext } from "react";
import { Button } from "@mui/material";
import { adminPageStyles } from "./style/adminPageStyles";
import { AdminContext } from "../../contexts/AdminContext";
import { productState } from "../../common/constants/productState";

export const AdminFilterPanel: FC = () => {
  const classes = adminPageStyles();
  const { setIsDialogOpen, setProduct } = useContext(AdminContext);

  const openDialogHandler = () => {
    setIsDialogOpen(true);
    setProduct(productState);
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
