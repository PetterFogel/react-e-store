import { Divider, Typography } from "@mui/material";
import { FC, useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";

export const CartList: FC = () => {
  const { cart } = useContext(CartContext);

  console.log(cart);
  return (
    <div>
      <Divider sx={{ mb: 1.5 }} />
      {cart.map((item) => (
        <>
          <div
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}>
            <div style={{ height: "6rem" }}>
              <img
                src={item.imageUrl}
                style={{ width: "auto", height: "100%" }}
                alt={item.imageUrl}
              />
            </div>
            <div>
              <Typography variant={"subtitle1"}>{item.title}</Typography>
              <Typography variant={"subtitle1"}>{item.size}</Typography>
            </div>
            <Typography variant={"subtitle1"}>SEK {item.price}/pcs</Typography>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <RemoveIcon fontSize="small" />
              <Typography variant={"subtitle1"}>{item.quantity}</Typography>
              <AddIcon fontSize="small" />
            </div>
            <Typography variant={"subtitle1"}>
              SEK {item.quantity * item.price}
            </Typography>
            <CloseIcon fontSize="small" />
          </div>
          <Divider sx={{ mt: 1.5 }} />
        </>
      ))}
    </div>
  );
};
