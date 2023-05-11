import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const homePageStyles = makeStyles((theme: Theme) => ({
  heroSection: {
    position: "relative",
    height: "94vh",
    width: "100%",
    overflow: "hidden",
    background:
      "linear-gradient(90deg, #f12711, #f5af19, #3dc5b3, #41b3e6, #7b53e6, #f12711)",
    backgroundSize: "1200% 1200%",
    animation: "$changeGradient 30s ease-in-out infinite"
  },
  introContainer: {
    margin: theme.spacing(4, 0),
    padding: theme.spacing(0, 4),
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(3, 0),
      padding: theme.spacing(0, 3)
    },
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(3, 0),
      padding: theme.spacing(0, 2)
    }
  },
  "@keyframes changeGradient": {
    "0%": {
      backgroundPosition: "0% 50%"
    },
    "50%": {
      backgroundPosition: "100% 50%"
    },
    "100%": {
      backgroundPosition: "0% 50%"
    }
  },
  heroSection2: {
    position: "relative",
    height: "calc(100vh - 80px)",
    width: "100%",
    overflow: "hidden"
  },
  diamond: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50px",
    height: "50px",
    background: "#f5af19",
    clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
    animation: "$moveDiamond 10s linear infinite"
  },
  "@keyframes moveDiamond": {
    "0%": {
      transform: "translate(-50%, -50%) rotate(0deg)"
    },
    "50%": {
      transform: "translate(-50%, -50%) rotate(180deg)"
    },
    "100%": {
      transform: "translate(-50%, -50%) rotate(360deg)"
    }
  }
}));
