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
  },
  section: {
    padding: theme.spacing(6)
  },
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
