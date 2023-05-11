import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const sectionStyles = makeStyles((theme: Theme) => ({
  latestContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: theme.spacing(2)
    }
  },
  dummyImage: {
    width: "100%",
    backgroundColor: "#ddd",
    marginBottom: theme.spacing(1)
  }
}));
