import { FC } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import { homePageStyles } from "./styles/HomePageStyles";

export const HomePage: FC = () => {
  const classes = homePageStyles();
  const history = useHistory();
  return (
    <div className={classes.root}>
      <div className={classes.introContainer}>
        <h1 className={classes.headTitle}>Welcome to shoeway</h1>
        <p className={classes.subTitle}>Quality shoes to match your style</p>
        <Button
          onClick={() => history.push("/products")}
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
