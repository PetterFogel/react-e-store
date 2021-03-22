import React from 'react';
import '../../style/Main.css'
import Startpage from './Startpage';
import ProductPage from './ProductPage';
import { Route, Switch } from 'react-router';
import ProductItem from './ProductItem';
import { ProductData } from '../../data/productData'
import Checkout from '../Checkout/Checkout';
import OrderView from '../Orderview/OrderView';
import AdminPage from './AdminPage';
import AddNewProduct from './AddNewProduct';

function MainContent() {
    return (
      <main>
        <Switch>
          <Route exact path="/">
            <Startpage />
          </Route>
          <Route path="/products">
            <ProductPage />
          </Route>
          {ProductData.map((product) => (
            <Route path={"/" + product.title} key={product.title}>
              <ProductItem product={product} />
            </Route>
          ))}
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/orderview">
            <OrderView />
          </Route>
          <Route path="/admin">
            <AdminPage />
          </Route>
          <Route path="/addNewProduct">
            <AddNewProduct />
          </Route>
        </Switch>
      </main>
    );
}

export default MainContent
