import { FC } from "react";
import { Button } from "@mui/material";
import { adminPageStyles } from "./style/adminPageStyles";

interface Props {
  onDialogOpenClick: () => void;
}

export const AdminFilterPanel: FC<Props> = ({ onDialogOpenClick }) => {
  const classes = adminPageStyles();
  return (
    <div className={classes.filterPanel}>
      <Button
        variant="contained"
        color="success"
        size="medium"
        onClick={onDialogOpenClick}>
        Add a product
      </Button>
    </div>
  );
};
