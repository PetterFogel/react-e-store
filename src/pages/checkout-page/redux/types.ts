import { CartProduct } from "../../../models/cartProduct";

export interface CheckoutState {
  cartProducts: CartProduct[];
  totalAmount: number;
  tax: number;
  cartOrder: CartProduct[];
  orderAmount: number;
  cart: CartProduct[];
  isCartLoading: boolean;
  cartError: string | null;

  isModifiedCartLoading: boolean;
}
