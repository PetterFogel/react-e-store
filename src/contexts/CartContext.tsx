import axios from "axios";
import { createContext, FC, ReactNode, useEffect, useState } from "react";
import { CartProduct } from "../models/cartProduct";

interface ContextProps {
  cartProducts: CartProduct[];
  totalAmount: number;
  tax: number;
  cartOrder: CartProduct[];
  orderAmount: number;
  cart: CartProduct[];
  isCartLoading: boolean;
  cartError: string | null;
  addToCartHandler: (product: any) => void;
  removeFromCartHandler: (product: any) => void;
  quantityChangeHandler: (productId: string) => void;
  emptyCartHandler: () => void;
  fetchCartDataHandler: () => void;
}

export const CartContext = createContext<ContextProps>({
  cartProducts: [],
  orderAmount: 0,
  totalAmount: 0,
  tax: 0,
  cartOrder: [],
  cart: [],
  isCartLoading: false,
  cartError: null,
  addToCartHandler: () => {},
  removeFromCartHandler: () => {},
  quantityChangeHandler: () => {},
  emptyCartHandler: () => {},
  fetchCartDataHandler: () => {}
});

interface Props {
  children: ReactNode;
}

export const CartProvider: FC<Props> = ({ children }) => {
  const [cart, setCart] = useState<CartProduct[]>([]);
  const [isCartLoading, setIsCartLoading] = useState(false);
  const [cartError, setCartError] = useState<string | null>(null);

  const [cartProducts, setCartProducts] = useState<CartProduct[]>(
    JSON.parse(localStorage.getItem("Products") || "[]")
  );
  const [totalAmount, setTotalAmount] = useState(
    Number(JSON.parse(localStorage.getItem("TotalAmount") || "0"))
  );
  const [tax, setTax] = useState(0);
  const [cartOrder, setCartOrder] = useState([]);
  const [orderAmount, setOrderAmount] = useState(0);

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

  const removeFromCartHandler = (product: CartProduct) => {
    const updatedCart = [...cartProducts];
    const cartIndex = updatedCart.indexOf(product);
    updatedCart.splice(cartIndex, 1);
    setCartProducts(updatedCart);
    changeTotalAmount(updatedCart);
  };

  const quantityChangeHandler = (productId: string) => {
    let currentProduct = cartProducts.find(
      (specificProduct) => specificProduct.id === productId
    );
    if (currentProduct!.quantity === 1) {
      removeFromCartHandler(currentProduct!);
    } else {
      currentProduct!.quantity = currentProduct!.quantity - 1;
      const updatedCart = [...cartProducts];
      changeTotalAmount(updatedCart);
    }
  };

  const addToCartHandler = (product: CartProduct) => {
    const randomId = Math.floor(Math.random() * 1000000);

    const existingCartItem = cartProducts.find(
      (item) => item.id === product.id
    );

    if (existingCartItem && product.size === existingCartItem.size) {
      changeTotalAmount([
        ...cartProducts,
        { ...existingCartItem, quantity: 1 }
      ]);
      return existingCartItem.quantity++;
    }

    const updatedCart = [
      ...cartProducts,
      { ...product, id: randomId.toString(), quantity: 1 }
    ];
    changeTotalAmount(updatedCart);
    setCartProducts(updatedCart);
  };

  const emptyCartHandler = () => {
    setCartOrder([]);
    setCartProducts([]);
    setTotalAmount(0);
    setOrderAmount(0);
    setTax(0);
  };

  const fetchCartDataHandler = async () => {
    try {
      setIsCartLoading(true);
      setCartError(null);

      const response = await axios(`${process.env.REACT_APP_API_BASEURL}/cart`);

      setIsCartLoading(false);
      setCart(response.data);
    } catch (error) {
      if (error instanceof Error) {
        const errorMsg = error.message;
        setIsCartLoading(false);
        setCartError(errorMsg);
      }
    }
  };

  useEffect(() => {
    fetchCartDataHandler();

    localStorage.setItem("Products", JSON.stringify(cartProducts));
    localStorage.setItem("TotalAmount", JSON.stringify(totalAmount));
  }, [cartProducts]);

  const contextValue: ContextProps = {
    cartProducts,
    totalAmount,
    tax,
    cartOrder,
    orderAmount,
    cart,
    isCartLoading,
    cartError,
    addToCartHandler,
    removeFromCartHandler,
    quantityChangeHandler,
    emptyCartHandler,
    fetchCartDataHandler
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
