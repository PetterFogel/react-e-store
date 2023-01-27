import { FC, useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { shoeSizes } from "../../common/constants/shoeSizes";
import { CartContext } from "../../contexts/CartContext";
import { productPageStyles } from "./style/productPageStyles";
import { Button, Divider, Typography } from "@mui/material";
import { ProductsContext } from "../../contexts/ProductContext";
import { Loader } from "../../common/components/loader/Loader";
import { ErrorPanel } from "../../common/components/error-panel.tsx/ErrorPanel";

export const ProductDetails: FC = () => {
  const classes = productPageStyles();
  const { id } = useParams();
  const {
    product,
    isProductLoading,
    productError,
    fetchSpecificProductHandler
  } = useContext(ProductsContext);
  const { addToCart } = useContext(CartContext);
  const [sizeValue, setSizeValue] = useState(shoeSizes[0]);

  useEffect(() => {
    fetchSpecificProductHandler(id ?? "");
  }, []);

  const sizeSelectHandler = (size: number) => setSizeValue(size.toString());

  if (productError) return <ErrorPanel errorMsg={productError} />;

  return (
    <div className={classes.detailsRoot}>
      {isProductLoading ? (
        <Loader />
      ) : (
        <>
          <div className={classes.detailsImage}>
            <img
              className={classes.detailsImageStyle}
              src={product.image}
              alt={product.image}
            />
          </div>
          <div className={classes.detailsInfo}>
            <Typography variant={"h3"}>{product.title}</Typography>
            <Typography variant={"h3"}>{product.price} SEK</Typography>
            <Divider />
            <div>
              <Typography variant={"subtitle1"} mb={0.5}>
                Size
              </Typography>
              <div className={classes.sizes}>
                {shoeSizes.map((size, index) => (
                  <div
                    key={index}
                    className={
                      size === sizeValue ? classes.activeSize : classes.size
                    }
                    onClick={() => sizeSelectHandler(parseInt(size))}>
                    <p>{size}</p>
                  </div>
                ))}
              </div>
            </div>
            <Divider />
            <Button
              variant="contained"
              color="success"
              size="large"
              onClick={() =>
                addToCart({ ...product, size: parseInt(sizeValue) })
              }>
              Add to cart
            </Button>
            <Divider />
            <div>
              <Typography variant={"subtitle1"} mb={0.5}>
                Product info
              </Typography>
              <Typography variant={"subtitle2"}>{product.info}</Typography>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
