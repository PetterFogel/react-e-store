import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const errorPanelStyle = makeStyles((theme: Theme) => ({
  root: {
    margin: "auto",
    height: "60vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      padding: theme.spacing(1)
    }
  },
  panel: {
    "&.css-1nmfsuj-MuiPaper-root-MuiAlert-root .MuiAlert-icon": {
      padding: theme.spacing(1.5, 0)
    },
    "&.css-1nmfsuj-MuiPaper-root-MuiAlert-root": {
      border: "1px solid #ddd"
    },
    [theme.breakpoints.down("md")]: {
      width: "100%"
    }
  },
  link: {
    color: "#333"
  }
}));
