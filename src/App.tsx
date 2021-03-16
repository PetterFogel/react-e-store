
import { Component } from 'react';

import Layout from './components/Layout';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './contexts/CartContext';
import UserProvider from './contexts/UserContext';

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
