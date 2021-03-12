import React, { Component, createContext } from "react";
import { Product } from "../data/productData";

interface State {
  cart: Product[];
  quantity: number
}
interface ContextProps extends State {
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
}

export const CartContext = createContext<ContextProps>({
  cart: [],
  quantity: 0,
  addToCart: () => {},
  removeFromCart: () => {},
});
let quantity: number = 0
class CartProvider extends Component<{}, State> {
  state: State = {
    cart: [],
    quantity: 1
  };

  addProductToCart = (product: Product) => {
    let updatedCart: any = [];
    console.log(this.state.quantity * product.price)
    
    if(this.state.cart.includes(product)) {
      this.state.quantity = this.state.quantity + 1
      updatedCart = [...this.state.cart, this.state.quantity];
      this.setState({quantity: this.state.quantity})
      
    } else{
      this.state.quantity = 1
      updatedCart = [...this.state.cart, product];
      this.setState({ cart: updatedCart });
    }
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
          removeFromCart: this.removeProductFromCart,
          quantity: this.state.quantity
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}

export default CartProvider;
