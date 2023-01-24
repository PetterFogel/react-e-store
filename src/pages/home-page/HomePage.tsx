import { FC } from "react";
import { useNavigate } from "react-router";
import { homePageStyles } from "./style/HomePageStyles";
import { Button, Typography, useMediaQuery, useTheme } from "@mui/material";

export const HomePage: FC = () => {
  const classes = homePageStyles();
  const navigate = useNavigate();
  const theme = useTheme();
  const isBreakpointMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div className={classes.root}>
      <div className={classes.introContainer}>
        <Typography variant="h1">WELCOME TO SHOEWAY</Typography>
        <Typography variant="h2" mt={2} mb={2}>
          Quality shoes to match your style
        </Typography>
        <Button
          onClick={() => navigate("/products")}
          color="info"
          variant="contained"
          size={isBreakpointMd ? "medium" : "large"}
        >
          Go Shopping
        </Button>
      </div>
    </div>
  );
};
