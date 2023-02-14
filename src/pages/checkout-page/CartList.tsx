import { FC, useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Divider } from "@mui/material";
import { CartItem } from "./CartItem";

export const CartList: FC = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <Divider />
      {cart.map((item, index) => (
        <CartItem key={index} cartProduct={item} />
      ))}
    </div>
  );
};
