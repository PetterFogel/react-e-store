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
    gap: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1),
      width: "100%"
    }
  },
  editDialogButtonHolder: {
    padding: theme.spacing(2),
    display: "flex",
    justifyContent: "space-between",
    gap: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1),
      width: "100%"
    }
  },
  actionButton: {
    width: "7rem",
    [theme.breakpoints.down("sm")]: {
      width: "auto"
    }
  }
}));
