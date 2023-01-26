import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const adminPageStyles = makeStyles((theme: Theme) => ({
  root: {
    maxWidth: "1000px",
    margin: "5rem auto",
    padding: theme.spacing(0, 2),
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      margin: "4.5rem auto"
    }
  }
}));
