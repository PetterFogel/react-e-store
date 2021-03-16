import React, { Component, createContext } from "react";
import { isThisTypeNode } from "typescript";
import { Product } from "../data/productData";

interface State {
  cart: Product[];
}
interface ContextProps extends State {
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  deleteItemQty: (product: Product) => void;
}

export const CartContext = createContext<ContextProps>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  deleteItemQty: () => {},
});

class CartProvider extends Component<{}, State> {
  state: State = {
    cart: [],
  };

  addProductToCart = (product: Product) => {
    
    if(this.state.cart.includes(product)) {
      product.quantity = product.quantity + 1
      this.setState({})

    } else if (product.quantity === 1){
      let updatedCart = [...this.state.cart, product];
      this.setState({ cart: updatedCart });
    }
  };

  removeProductFromCart = (product: Product) => {
    const updatedCart = [...this.state.cart]
    const cartIndex = updatedCart.indexOf(product)
    updatedCart.splice(cartIndex, 1)
    this.setState({cart: updatedCart})
  }

  deleteItemFromQty = (product: Product) => {
    if(product.quantity === 1) {
      this.removeProductFromCart(product)
    }else {
      product.quantity = product.quantity - 1
      this.setState({})  
    }
  }

  render() {
    return (
      <CartContext.Provider
        value={{
          cart: this.state.cart,
          addToCart: this.addProductToCart,
          removeFromCart: this.removeProductFromCart,
          deleteItemQty: this.deleteItemFromQty,
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}

export default CartProvider;
