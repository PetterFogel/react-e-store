import { FC, useContext } from "react";
import { CartList } from "./CartList";
import { Typography } from "@mui/material";
import { CartContext } from "../../contexts/CartContext";
import { EmptyCartPanel } from "./EmptyCartPanel";
import { checkoutPageStyles } from "./style/checkoutPageStyles";

export const CheckoutPage: FC = () => {
  const classes = checkoutPageStyles();
  const { cartProducts } = useContext(CartContext);

  return (
    <div className={classes.root}>
      <Typography variant={"h2"} mb={3}>
        Checkout
      </Typography>
      {cartProducts.length === 0 ? <EmptyCartPanel /> : <CartList />}
    </div>
  );
};
