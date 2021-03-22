
import { Component } from 'react';

import Layout from './components/Layout';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './contexts/CartContext';
import UserProvider from './contexts/UserContext';
import ButtonProvider from './contexts/ButtonContext';

class App extends Component {

  render() {
    return (
      <CartProvider>
        <UserProvider>
          <ButtonProvider>
            <BrowserRouter>
              <Layout />
            </BrowserRouter>
          </ButtonProvider>
        </UserProvider>
      </CartProvider>
    );
  }
}

export default App;
