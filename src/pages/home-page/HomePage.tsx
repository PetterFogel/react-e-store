import { FC } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import { homePageStyles } from "./styles/HomePageStyles";

export const HomePage: FC = () => {
  const classes = homePageStyles();
  const navigate = useNavigate();
  return (
    <div className={classes.root}>
      <div className={classes.introContainer}>
        <h1 className={classes.headTitle}>Welcome to shoeway</h1>
        <p className={classes.subTitle}>Quality shoes to match your style</p>
        <Button
          onClick={() => navigate("/products")}
          variant="contained"
          size="large"
          className={classes.button}
        >
          Go Shopping
        </Button>
      </div>
    </div>
  );
};
