import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const aboutPageStyles = makeStyles((theme: Theme) => ({
  root: {
    maxWidth: "1000px",
    margin: "auto",
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column"
  },
  contentRow: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
    [theme.breakpoints.down("md")]: {
      display: "block"
    }
  },
  contentImage: {
    flex: 1,
    height: "60vh",
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      height: "70vh"
    }
  },
  imageStyle: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "bottom",
    [theme.breakpoints.down("md")]: {}
  },
  contentInfo: {
    flex: 1,
    marginBottom: theme.spacing(4)
  },
  contentHolder: {
    padding: theme.spacing(0, 4),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(0)
    }
  }
}));
