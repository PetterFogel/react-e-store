import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const checkoutPageStyles = makeStyles((theme: Theme) => ({
  root: {
    maxWidth: "950px",
    margin: "auto",
    padding: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(1.5)
    }
  },
  itemContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  imageHolder: {
    height: "6rem",
    flex: 0.7,
    marginRight: 10
  },
  image: {
    width: "auto",
    height: "100%"
  },
  quantityHolder: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    flex: 1
  },
  closeIconHolder: {
    display: "flex",
    justifyContent: "space-between",
    flex: 1
  }
}));
