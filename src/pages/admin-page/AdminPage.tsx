import { FC } from "react";
import { AddItem } from "./AddItem";
import { Typography } from "@mui/material";
import { AdminHandler } from "./AdminHandler";
import { adminPageStyles } from "./style/adminPageStyles";

export const AdminPage: FC = () => {
  const classes = adminPageStyles();

  return (
    <div className={classes.root}>
      <Typography variant={"h2"} mb={4}>
        Admin
      </Typography>
      <AdminHandler />
      <AddItem />
    </div>
  );
};
