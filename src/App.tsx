
import React, { Component } from 'react';
import logo from './logo.svg';

import Layout from './components/Layout';
import { BrowserRouter } from 'react-router-dom';
import CartProvider, { CartContext } from './contexts/CartContext';



class App extends Component {

  render() {
    return (
      <CartProvider>
        <BrowserRouter>
            <Layout/>
        </BrowserRouter>
      </CartProvider>
    );
  }
}

export default App;
