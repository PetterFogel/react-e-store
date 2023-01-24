import { FC, useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { AdminContext } from "../../contexts/AdminContext";
import { useParams } from "react-router";
import { Button, Divider, Typography } from "@mui/material";
import { productPageStyles } from "./style/productPageStyles";

const sizes = ["36", "37", "38", "39", "40", "41", "42", "43", "44"];

export const ProductDetails: FC = () => {
  const { id } = useParams();
  const classes = productPageStyles();
  const cart = useContext(CartContext);
  const admin = useContext(AdminContext);
  let currentProduct = admin.products.find(
    (specificProduct) => specificProduct.title === id
  );
  const [isSize, setSize] = useState(false);

  const handleClick = (size: number) => {
    //mutera ej statet
    if (currentProduct) {
      currentProduct.size = size;
      setSize(!isSize);
    }
  };
  if (!currentProduct) {
    return <p>Product isnt available</p>;
  }
  return (
    <div className={classes.detailsRoot}>
      <div className={classes.detailsImage}>
        <img
          className={classes.detailsImageStyle}
          src={currentProduct.image}
          alt={currentProduct.image}
        />
      </div>
      <div className={classes.detailsInfo}>
        <Typography variant={"h3"}>{currentProduct.title}</Typography>
        <Typography variant={"h3"}>{currentProduct.price} SEK</Typography>

        <Divider />

        <div>
          <Typography variant={"subtitle1"} mb={0.5}>
            Product info
          </Typography>
          <Typography variant={"subtitle2"}>{currentProduct.info}</Typography>
        </div>

        <Divider />

        <div>
          <Typography variant={"subtitle1"} mb={0.5}>
            Size
          </Typography>
          <div className={classes.sizes}>
            {sizes.map((size, index) => (
              <div
                key={index}
                className={classes.size}
                onClick={() => handleClick(parseInt(size))}
              >
                <Typography variant="subtitle1">{size}</Typography>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* {isSize ? ( */}
        <Button
          variant="contained"
          size="large"
          onClick={() => cart.addToCart(currentProduct!)}
        >
          Add to cart
        </Button>
        {/* ) : ( */}
        <Button variant="contained" size="large">
          Please choose size
        </Button>
        {/* )} */}
      </div>
    </div>
  );
};
