import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const homePageStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "90%",
    width: "100%",
    margin: "auto",
    gap: "1rem",
  },
  introContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "1rem",
    background: "#fff",
    padding: "2rem",
  },
  headTitle: {
    fontSize: "4rem",
    fontWeight: 500,
    color: "#222",
    [theme.breakpoints.down("md")]: {
      fontSize: "3rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
  },
  subTitle: {
    fontSize: "2rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  button: {
    background: "#56EAC6",
    color: "#fff",
  },
}));
