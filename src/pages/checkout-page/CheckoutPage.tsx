import { FC, useContext } from "react";
import { CartList } from "./CartList";
import { Typography } from "@mui/material";
import { CartContext } from "../../contexts/CartContext";
import { EmptyCartPanel } from "./EmptyCartPanel";
import { checkoutPageStyles } from "./style/checkoutPageStyles";

export const CheckoutPage: FC = () => {
  const classes = checkoutPageStyles();
  const { cartProducts, totalAmount } = useContext(CartContext);

  return (
    <div className={classes.root}>
      <Typography variant={"h2"} mb={3}>
        Checkout
      </Typography>
      {cartProducts.length === 0 ? <EmptyCartPanel /> : <CartList />}
      <div
        style={{
          float: "right",
          display: "flex",
          justifyContent: "space-between",
          width: "20rem"
        }}>
        <Typography variant={"h3"} fontWeight={700}>
          Total
        </Typography>
        <Typography variant={"h3"}>SEK: {totalAmount}</Typography>
      </div>
    </div>
  );
};
