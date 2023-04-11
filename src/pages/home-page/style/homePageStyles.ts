import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const homePageStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "94vh",
    width: "100%",
    backgroundColor: "orange",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  },
  introContainer: {
    background: "#fff",
    padding: "2rem",
    marginBottom: "7rem",
    [theme.breakpoints.down("md")]: {
      padding: "1rem"
    }
  }
}));
