import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const adminPageStyles = makeStyles((theme: Theme) => ({
  root: {
    maxWidth: "1200px",
    margin: "5rem auto",
    padding: theme.spacing(0, 2),
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      margin: "4.5rem auto"
    }
  },
  filterPanel: {
    alignSelf: "flex-end",
    marginBottom: theme.spacing(2)
  },
  addDialogButtonHolder: {
    padding: theme.spacing(2),
    display: "flex",
    justifyContent: "flex-end",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      width: "100%"
    }
  }
}));
