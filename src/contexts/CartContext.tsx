import React, { Component, createContext } from "react";
import { Product } from "../data/productData";

interface State {
  cart: Product[];
}
interface ContextProps extends State {
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
}

export const CartContext = createContext<ContextProps>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

class CartProvider extends Component<{}, State> {
  state: State = {
    cart: [],
  };

  addProductToCart = (product: Product) => {
    const updatedCart = [...this.state.cart, product];
    this.setState({ cart: updatedCart });
  };

  removeProductFromCart = (product: Product) => {
    console.log('Ta bort från varukorgen')
    console.log(product)
    const updatedCart = [...this.state.cart]
    const cartIndex = updatedCart.indexOf(product)
    updatedCart.splice(cartIndex, 1)
    this.setState({cart: updatedCart})
  }

  render() {
    return (
      <CartContext.Provider
        value={{
          cart: this.state.cart,
          addToCart: this.addProductToCart,
          removeFromCart: this.removeProductFromCart
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}

export default CartProvider;
