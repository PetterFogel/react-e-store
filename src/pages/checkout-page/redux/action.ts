import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import { toastOptions } from "../../../common/constants/toastOptions";
import { CartProduct } from "../../../models/cartProduct";
import { AppThunk } from "../../../redux/store";
import { checkoutSlice } from "./checkoutSlice";

export const {
  setCart,
  setIsCartLoading,
  setCartError,
  setCartProducts,
  setCartOrder,
  setTotalAmount,
  setOrderAmount,
  setTax,
  setIsModifiedCartLoading
} = checkoutSlice.actions;

export const fetchCartDataHandler = (): AppThunk => {
  return async (dispatch) => {
    try {
      dispatch(setIsCartLoading(true));
      dispatch(setCartError(null));

      const response = await axios(`${process.env.REACT_APP_API_BASEURL}/cart`);

      dispatch(setIsCartLoading(false));
      dispatch(setCart(response.data));
    } catch (error) {
      if (error instanceof AxiosError) {
        dispatch(setIsCartLoading(false));
        dispatch(setCartError(error.message));
      }
    }
  };
};

const changeTax = (productPrice: number) => {
  const itemsTax = productPrice * 0.2;
  const roundedTax = Math.round(itemsTax);
  setTax(roundedTax);
};

const changeTotalAmount = (cart: any) => {
  if (cart.length !== 0) {
    const itemsPrice = cart.reduce(
      (a: number, c: CartProduct) => a + c.price * c.quantity,
      0
    );
    setTotalAmount(itemsPrice);
    return changeTax(itemsPrice);
  }

  setTotalAmount(0);
  setTax(0);
};

export const addToCartHandler = (product: CartProduct): AppThunk => {
  return async (dispatch) => {
    try {
      dispatch(setIsModifiedCartLoading(true));

      await axios(`${process.env.REACT_APP_API_BASEURL}/cart`, {
        method: "POST",
        data: product
      });

      dispatch(setIsModifiedCartLoading(false));
    } catch (error) {
      if (error instanceof AxiosError) {
        dispatch(setIsModifiedCartLoading(false));
        toast.error(error.message, toastOptions);
      }
    }
  };
};
