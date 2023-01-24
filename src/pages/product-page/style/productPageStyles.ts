import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const productPageStyles = makeStyles((theme: Theme) => ({
  root: {
    maxWidth: "1400px",
    margin: "4rem auto",
    padding: theme.spacing(0, 2),
  },
  listContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    marginTop: theme.spacing(2),
    gap: theme.spacing(2),
    [theme.breakpoints.down("lg")]: {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: theme.spacing(1),
    },
  },
  image: {
    width: "100%",
  },
}));
