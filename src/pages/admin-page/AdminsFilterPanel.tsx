import { FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { adminPageStyles } from "./style/adminPageStyles";

export const AdminFilterPanel: FC = () => {
  const classes = adminPageStyles();
  return (
    <div className={classes.filterPanel}>
      <Button variant="contained" color="success" size="medium">
        Add a product
      </Button>
    </div>
  );
};
