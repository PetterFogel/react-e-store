import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Background from "../../../assets/main-bg.jpg";

export const homePageStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "94vh",
    width: "100%",
    backgroundImage: `url(${Background})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  introContainer: {
    background: "#00ffa2",
    padding: "2rem",
    marginBottom: "7rem",
    [theme.breakpoints.down("md")]: {
      padding: "1rem",
    },
  },
}));
