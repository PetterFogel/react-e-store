import { FC, useContext, useEffect, useState } from "react";
import { Loader } from "../../common/components/loader/Loader";
import { useNavigate, useParams } from "react-router";
import { shoeSizes } from "../../common/constants/shoeSizes";
import { ErrorPanel } from "../../common/components/error-panel/ErrorPanel";
import { CartContext } from "../../contexts/CartContext";
import { productPageStyles } from "./style/productPageStyles";
import { Button, Divider, Rating, Stack, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchProductHandler } from "./redux/actions";
import { productsSelector } from "./redux/productsSlice";

export const ProductDetails: FC = () => {
  const classes = productPageStyles();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { addToCartHandler } = useContext(CartContext);
  const { product, isProductLoading, productError } =
    useAppSelector(productsSelector);
  const [sizeValue, setSizeValue] = useState(shoeSizes[0]);

  useEffect(() => {
    if (id) {
      dispatch(fetchProductHandler(id, navigate));
    }
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
            <Divider sx={{ margin: 0 }} />
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
            <Divider sx={{ margin: 0 }} />
            <Button
              disabled={product.sizes.length === 0}
              variant="contained"
              color="success"
              size="large"
              onClick={() =>
                addToCartHandler({ ...product, size: parseInt(sizeValue) })
              }>
              Add to cart
            </Button>
            <Divider sx={{ margin: 0 }} />
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
