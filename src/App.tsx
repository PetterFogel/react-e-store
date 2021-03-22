
import { Component } from 'react';

import Layout from './components/Layout';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './contexts/CartContext';
import UserProvider from './contexts/UserContext';
import PaymentProvider from './contexts/PaymentContext';

class App extends Component {

  render() {
    return (
      <CartProvider>
        <UserProvider>
          <PaymentProvider>
            <BrowserRouter>
              <Layout />
            </BrowserRouter>
          </PaymentProvider>
        </UserProvider>
      </CartProvider>
    );
  }
}

export default App;
