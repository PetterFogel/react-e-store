import { FC, useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export const CartList: FC = () => {
  const { cart } = useContext(CartContext);

  console.log(cart);
  return (
    <div>
      {cart.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};
