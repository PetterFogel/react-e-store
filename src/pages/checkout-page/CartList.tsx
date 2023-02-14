import { FC, useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Divider } from "@mui/material";
import { CartItem } from "./CartItem";

export const CartList: FC = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <Divider sx={{ mb: 1.5 }} />
      {cart.map((item) => (
        <CartItem key={item.id} cartProduct={item} />
      ))}
    </div>
  );
};
