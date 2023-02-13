import { Typography } from "@mui/material";
import { FC, useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { CartList } from "./CartList";
import { EmptyCartPanel } from "./EmptyCartPanel";
import { checkoutPageStyles } from "./style/checkoutPageStyles";

export const CheckoutPage: FC = () => {
  const classes = checkoutPageStyles();
  const { cart } = useContext(CartContext);

  return (
    <div className={classes.root}>
      <Typography variant={"h2"} mb={3}>
        Checkout
      </Typography>
      {cart.length === 0 ? <EmptyCartPanel /> : <CartList />}
    </div>
  );
};
