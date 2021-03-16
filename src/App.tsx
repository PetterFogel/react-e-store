
import React, { Component } from 'react';
import logo from './logo.svg';
import Layout from './components/Layout';
import { BrowserRouter } from 'react-router-dom';
import CartProvider, { CartContext } from './contexts/CartContext';
import UserProvider, { UserContext } from './contexts/UserContext';

class App extends Component {

  render() {
    return (
      <CartProvider>
        <UserProvider>
          <BrowserRouter>
            <Layout />
          </BrowserRouter>
        </UserProvider>
      </CartProvider>
    );
  }
}

export default App;
