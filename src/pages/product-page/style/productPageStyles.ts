import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const productPageStyles = makeStyles((theme: Theme) => ({
  root: {
    maxWidth: "1400px",
    margin: "auto",
    padding: theme.spacing(2)
  },
  listContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    marginTop: theme.spacing(2),
    gap: theme.spacing(2),
    [theme.breakpoints.down("lg")]: {
      gridTemplateColumns: "repeat(3, 1fr)"
    },
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: theme.spacing(1)
    }
  },
  listImage: {
    width: "100%",
    cursor: "pointer"
  },
  detailsRoot: {
    maxWidth: "900px",
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column"
    }
  },
  detailsImage: {
    flex: "1"
  },
  detailsImageStyle: {
    width: "100%"
  },
  detailsInfo: {
    flex: "1",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(3, 1.5),
    gap: theme.spacing(2)
  },
  sizes: {
    display: "flex",
    flexWrap: "wrap",
    gap: theme.spacing(1)
  },
  size: {
    display: "flex",
    cursor: "pointer",
    justifyContent: "center",
    border: "1px solid #ddd",
    padding: theme.spacing(0.7, 1.8),
    "&:hover": {
      background: "#ddd"
    }
  },
  activeSize: {
    display: "flex",
    cursor: "pointer",
    border: "1px solid #ddd",
    justifyContent: "center",
    background: "#333",
    color: "#fff",
    padding: theme.spacing(0.7, 1.8)
  }
}));
