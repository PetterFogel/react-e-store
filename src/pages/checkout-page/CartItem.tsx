import { FC, useContext } from "react";
import { CartProduct } from "../../models/cartProduct";
import { Divider, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import { CartContext } from "../../contexts/CartContext";

interface Props {
  cartProduct: CartProduct;
}

export const CartItem: FC<Props> = ({ cartProduct }) => {
  const { addToCartHandler, quantityChangeHandler, removeFromCartHandler } =
    useContext(CartContext);
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}>
        <div style={{ height: "6rem" }}>
          <img
            src={cartProduct.imageUrl}
            style={{ width: "auto", height: "100%" }}
            alt={cartProduct.imageUrl}
          />
        </div>
        <div>
          <Typography variant={"subtitle1"}>{cartProduct.title}</Typography>
          <Typography variant={"subtitle1"}>{cartProduct.size}</Typography>
        </div>
        <Typography variant={"subtitle1"}>
          SEK {cartProduct.price}/pcs
        </Typography>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <RemoveIcon
            fontSize="small"
            onClick={() => quantityChangeHandler(cartProduct.id)}
          />
          <Typography variant={"subtitle1"}>{cartProduct.quantity}</Typography>
          <AddIcon
            fontSize="small"
            onClick={() => addToCartHandler(cartProduct)}
          />
        </div>
        <Typography variant={"subtitle1"}>
          SEK {cartProduct.quantity * cartProduct.price}
        </Typography>
        <CloseIcon
          fontSize="small"
          onClick={() => removeFromCartHandler(cartProduct)}
        />
      </div>
      <Divider />
    </>
  );
};
