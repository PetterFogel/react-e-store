import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const homePageStyles = makeStyles((theme: Theme) => ({
  introContainer: {
    backgroundColor: "orange",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "94vh"
  },
  introHolder: {
    backgroundColor: "#fff",
    padding: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(1)
    }
  }
}));
