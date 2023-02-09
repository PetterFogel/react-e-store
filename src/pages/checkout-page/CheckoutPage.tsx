import { Typography } from "@mui/material";
import { FC } from "react";
import { checkoutPageStyles } from "./style/checkoutPageStyles";

export const CheckoutPage: FC = () => {
  const classes = checkoutPageStyles();

  return (
    <div className={classes.root}>
      <Typography variant={"h2"}>Checkout</Typography>
    </div>
  );
};
