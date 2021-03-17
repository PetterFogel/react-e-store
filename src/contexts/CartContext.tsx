import { Component, createContext } from "react";
import { Product } from "../data/productData";

interface State {
  cart: Product[];
  totalAmount: number
  tax: number
}
interface ContextProps extends State {
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  deleteItemQty: (product: Product) => void;
}

export const CartContext = createContext<ContextProps>({
  cart: [],
  totalAmount: 0,
  tax: 0,
  addToCart: () => {},
  removeFromCart: () => {},
  deleteItemQty: () => {},
});

class CartProvider extends Component<{}, State> {
  state: State = {
    cart: [],
    totalAmount: 0,
    tax: 0,
  };

  addProductToCart = (product: Product) => {
    if(this.state.cart.includes(product)) {
      product.quantity = product.quantity + 1
      this.setState({})
      const updatedCart = [...this.state.cart]
      this.changeTotalAmount(updatedCart)
    } else if (product.quantity === 1){
      let updatedCart = [...this.state.cart, product];
      this.setState({ cart: updatedCart });
      this.changeTotalAmount(updatedCart)
    }
  };

  removeProductFromCart = (product: Product) => {
    const updatedCart = [...this.state.cart]
    const cartIndex = updatedCart.indexOf(product)
    updatedCart.splice(cartIndex, 1)
    this.setState({ cart: updatedCart })
    this.changeTotalAmount(updatedCart)
  }
  
  changeTotalAmount = (cart: any) => {
    if(cart.length !== 0) {
      const itemsPrice = cart.reduce((a: number, c: Product) => a + c.price * c.quantity, 0)
      this.changeTax(itemsPrice)
      this.setState({totalAmount: itemsPrice})
    } else {
      this.setState({totalAmount: 0, tax: 0})
    }
  }
  
  changeTax = (productPrice: number) => {
      const itemsTax = productPrice * 0.2
      const roundedTax =  Math.round(itemsTax)
      this.setState({tax: roundedTax})
  }

  deleteItemFromQty = (product: Product) => {
    if(product.quantity === 1) {
      this.removeProductFromCart(product)
    }else {
      product.quantity = product.quantity - 1
      this.setState({})  
      const updatedCart = [...this.state.cart]
      this.changeTotalAmount(updatedCart) 
    }
  }

  render() {
    return (
      <CartContext.Provider
        value={{
          cart: this.state.cart,
          totalAmount: this.state.totalAmount,
          tax: this.state.tax,
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
