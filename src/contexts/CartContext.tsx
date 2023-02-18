import { createContext, FC, ReactNode, useEffect, useState } from "react";
import { CartProduct } from "../models/cartProduct";

interface ContextProps {
  cart: CartProduct[];
  totalAmount: number;
  tax: number;
  cartOrder: CartProduct[];
  orderAmount: number;
  addToCartHandler: (product: any) => void;
  removeFromCartHandler: (product: any) => void;
  quantityChangeHandler: (productId: string) => void;
  emptyCartHandler: () => void;
}

export const CartContext = createContext<ContextProps>({
  cart: [],
  orderAmount: 0,
  totalAmount: 0,
  tax: 0,
  cartOrder: [],
  addToCartHandler: () => {},
  removeFromCartHandler: () => {},
  quantityChangeHandler: () => {},
  emptyCartHandler: () => {}
});

interface Props {
  children: ReactNode;
}

export const CartProvider: FC<Props> = ({ children }) => {
  const [cart, setCart] = useState<CartProduct[]>(
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
      changeTax(itemsPrice);
      setTotalAmount(itemsPrice);
    } else {
      setTotalAmount(0);
      setTax(0);
    }
  };

  const removeFromCartHandler = (product: CartProduct) => {
    const updatedCart = [...cart];
    const cartIndex = updatedCart.indexOf(product);
    updatedCart.splice(cartIndex, 1);
    setCart(updatedCart);
    changeTotalAmount(updatedCart);
  };

  const quantityChangeHandler = (productId: string) => {
    let currentProduct = cart.find(
      (specificProduct) => specificProduct.id === productId
    );
    if (currentProduct!.quantity === 1) {
      removeFromCartHandler(currentProduct!);
    } else {
      currentProduct!.quantity = currentProduct!.quantity - 1;
      const updatedCart = [...cart];
      changeTotalAmount(updatedCart);
    }
  };

  const addToCartHandler = (product: CartProduct) => {
    let currentProduct = cart.find(
      (specificProduct) => specificProduct.title === product.title
    );
    if (
      currentProduct?.quantity !== undefined &&
      currentProduct.size === product.size
    ) {
      currentProduct.quantity += 1;
      const updatedCart = [...cart];
      changeTotalAmount(updatedCart);
    } else {
      const quantity = 1;
      const cartItem = { ...product, quantity };
      let updatedCart = [...cart, cartItem];
      setCart(updatedCart);
      changeTotalAmount(updatedCart);
    }
  };

  const emptyCartHandler = () => {
    setCartOrder([]);
    setCart([]);
    setTotalAmount(0);
    setOrderAmount(0);
    setTax(0);
  };

  useEffect(() => {
    localStorage.setItem("Products", JSON.stringify(cart));
    localStorage.setItem("TotalAmount", JSON.stringify(totalAmount));
  }, [cart]);

  const contextValue: ContextProps = {
    cart,
    totalAmount,
    tax,
    cartOrder,
    orderAmount,
    addToCartHandler,
    removeFromCartHandler,
    quantityChangeHandler,
    emptyCartHandler
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
