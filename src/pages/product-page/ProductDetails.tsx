import { FC, useContext, useEffect, useState } from "react";
import { Loader } from "../../common/components/loader/Loader";
import { useParams } from "react-router";
import { shoeSizes } from "../../common/constants/shoeSizes";
import { ErrorPanel } from "../../common/components/error-panel.tsx/ErrorPanel";
import { CartContext } from "../../contexts/CartContext";
import { ProductsContext } from "../../contexts/ProductContext";
import { productPageStyles } from "./style/productPageStyles";
import { Button, Divider, Rating, Stack, Typography } from "@mui/material";

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
              src={product.imageUrl}
              alt={product.imageUrl}
            />
          </div>
          <div className={classes.detailsInfo}>
            <Typography variant={"h3"}>{product.title}</Typography>
            <Typography variant={"h3"}>{product.price} SEK</Typography>
            <Stack spacing={1}>
              <Rating
                readOnly
                size="small"
                precision={0.5}
                defaultValue={2.5}
                sx={{ color: "#333" }}
              />
            </Stack>
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
              disabled={product.sizes.length === 0}
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
