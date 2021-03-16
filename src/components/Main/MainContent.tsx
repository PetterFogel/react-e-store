import React from 'react';
import '../../style/Main.css'
import Startpage from './Startpage';
import ProductPage from './ProductPage';
import { Route, Switch } from 'react-router';
import ProductItem from './ProductItem';
import { ProductData } from '../../data/productData'
import Checkout from '../Checkout/Checkout';

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
          {ProductData.map((product) => 
            <Route path={"/" + product.title} key={product.title}>
                <ProductItem product={product}/>
            </Route>
          )}
          <Route path="/checkout">
            <Checkout/>
          </Route>
        </Switch>
      </main>
    );
}

export default MainContent
