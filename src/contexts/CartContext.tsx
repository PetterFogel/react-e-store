import { Component, createContext } from "react";
import { CartProduct } from "../models/cartProduct";

interface State {
  cart: CartProduct[];
  totalAmount: number;
  tax: number;
  orderCart: CartProduct[];
  orderAmount: number;
}
interface ContextProps extends State {
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
  orderCart: [],
  addToCartHandler: () => {},
  removeFromCartHandler: () => {},
  quantityChangeHandler: () => {},
  emptyCartHandler: () => {}
});

class CartProvider extends Component<any, State> {
  state: State = {
    cart: JSON.parse(localStorage.getItem("Products") || "[]"),
    totalAmount: Number(JSON.parse(localStorage.getItem("TotalAmount") || "0")),
    tax: 0,
    orderCart: [],
    orderAmount: 0
  };

  addToCartHandler = (product: CartProduct) => {
    console.log(product);
    let currentProduct = this.state.cart.find(
      (specificProduct) => specificProduct.title === product.title
    );
    if (
      currentProduct?.quantity !== undefined &&
      currentProduct.size === product.size
    ) {
      currentProduct.quantity += 1;
      this.setState({});
      const updatedCart = [...this.state.cart];
      this.changeTotalAmount(updatedCart);
    } else {
      const quantity = 1;
      const cartItem = { ...product, quantity };
      let updatedCart = [...this.state.cart, cartItem];
      this.setState({ cart: updatedCart });
      this.changeTotalAmount(updatedCart);
    }
  };

  removeFromCartHandler = (product: CartProduct) => {
    const updatedCart = [...this.state.cart];
    const cartIndex = updatedCart.indexOf(product);
    updatedCart.splice(cartIndex, 1);
    this.setState({ cart: updatedCart });
    this.changeTotalAmount(updatedCart);
  };

  changeTotalAmount = (cart: any) => {
    if (cart.length !== 0) {
      const itemsPrice = cart.reduce(
        (a: number, c: CartProduct) => a + c.price * c.quantity,
        0
      );
      this.changeTax(itemsPrice);
      this.setState({ totalAmount: itemsPrice });
    } else {
      this.setState({ totalAmount: 0, tax: 0 });
    }
  };

  changeTax = (productPrice: number) => {
    const itemsTax = productPrice * 0.2;
    const roundedTax = Math.round(itemsTax);
    this.setState({ tax: roundedTax });
  };

  quantityChangeHandler = (productId: string) => {
    let currentProduct = this.state.cart.find(
      (specificProduct) => specificProduct.id === productId
    );
    if (currentProduct!.quantity === 1) {
      this.removeFromCartHandler(currentProduct!);
    } else {
      currentProduct!.quantity = currentProduct!.quantity - 1;
      this.setState({});
      const updatedCart = [...this.state.cart];
      this.changeTotalAmount(updatedCart);
    }
  };

  emptyCartHandler = () => {
    this.setState({
      orderCart: [...this.state.cart],
      orderAmount: this.state.totalAmount,
      cart: [],
      totalAmount: 0
    });
  };

  componentDidUpdate() {
    localStorage.setItem("Products", JSON.stringify(this.state.cart));
    localStorage.setItem("TotalAmount", JSON.stringify(this.state.totalAmount));
  }

  render() {
    return (
      <CartContext.Provider
        value={{
          ...this.state,
          addToCartHandler: this.addToCartHandler,
          removeFromCartHandler: this.removeFromCartHandler,
          quantityChangeHandler: this.quantityChangeHandler,
          emptyCartHandler: this.emptyCartHandler
        }}>
        {this.props.children}
      </CartContext.Provider>
    );
  }
}

export default CartProvider;
