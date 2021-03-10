import React, { Component } from 'react';
import logo from './logo.svg';
import Layout from './components/Layout';
import { BrowserRouter } from 'react-router-dom';
import { CartContext } from './contexts/CartContext';


interface State {
  cart: object[]
}
class App extends Component<{}, State> {
  state: State = {
    cart: []
  }

  addProductToCart = (product: object) => {
    const updatedCart = [...this.state.cart, product]
    this.setState({cart: updatedCart})
  }


  render() {
    console.log(this.state.cart)
    return (
      <CartContext.Provider value={{
        cart: this.state.cart, 
        addToCart: this.addProductToCart
      }}>
        <BrowserRouter>
            <Layout/>
        </BrowserRouter>
      </CartContext.Provider>
    );
  }
}

export default App;
