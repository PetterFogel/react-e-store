import { FC, useContext } from "react";
import { CartProduct } from "../../models/cartProduct";
import { Divider, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import { CartContext } from "../../contexts/CartContext";
import { checkoutPageStyles } from "./style/checkoutPageStyles";

interface Props {
  cartProduct: CartProduct;
}

export const CartItem: FC<Props> = ({ cartProduct }) => {
  const classes = checkoutPageStyles();
  const { addToCartHandler, quantityChangeHandler, removeFromCartHandler } =
    useContext(CartContext);
  return (
    <>
      <div className={classes.itemContainer}>
        <div className={classes.imageHolder}>
          <img
            src={cartProduct.imageUrl}
            alt={cartProduct.imageUrl}
            className={classes.image}
          />
        </div>
        <div style={{ flex: 2 }}>
          <Typography variant={"subtitle1"}>
            {cartProduct.title} - {cartProduct.size}
          </Typography>
        </div>
        <div style={{ flex: 1 }}>
          <Typography variant={"subtitle1"}>
            SEK {cartProduct.price}/pcs
          </Typography>
        </div>
        <div className={classes.quantityHolder}>
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
        <div className={classes.closeIconHolder}>
          <Typography variant={"subtitle1"}>
            SEK {cartProduct.quantity * cartProduct.price}
          </Typography>
          <CloseIcon
            fontSize="small"
            onClick={() => removeFromCartHandler(cartProduct)}
          />
        </div>
      </div>
      <Divider />
    </>
  );
};
