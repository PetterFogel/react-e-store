import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const homePageStyles = makeStyles((theme: Theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "5vh",
    padding: "0rem 2rem",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 99,
    background: "#fff",
    borderBottom: "1px solid #ddd",
    [theme.breakpoints.down("lg")]: {
      padding: "0rem 1rem",
    },
  },
  nav: {
    display: "flex",
    alignItems: "center",
  },
  ul: {
    display: "flex",
    justifyContent: "space-between",
    listStyle: "none",
    width: "15rem",
    [theme.breakpoints.down("lg")]: {
      position: "fixed",
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignItems: "center",
      background: "#fff",
      zIndex: 200,
      width: "50%",
      height: "94vh",
      top: "6vh",
      transition: "right 500ms ease-in",
    },
    [theme.breakpoints.down("md")]: {
      position: "absolute",
      width: "100%",
      right: "-100%",
    },
  },
  cartLink: {
    marginLeft: "1.5rem",
    letterSpacing: "1px",
    fontSize: "0.9rem",
    textDecoration: "none",
    color: "#333",
    [theme.breakpoints.down("lg")]: {
      marginLeft: "0rem",
    },
  },
  link: {
    letterSpacing: "1px",
    fontSize: "0.9rem",
    textDecoration: "none",
    color: "#333",
    [theme.breakpoints.down("lg")]: {
      fontSize: "1.3rem",
      margin: "1rem 0rem",
    },
  },
}));
