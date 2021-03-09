import React from 'react';
import '../../style/Main.css'
import Startpage from './Startpage';
import ProductPage from './ProductPage';
import { Route, Switch } from 'react-router';
import ProductItem from './ProductItem';
import { ProductData } from '../../data/productData'

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
            <Route path={"/" + product.title}>
                <ProductItem object={product}/>
            </Route>
          )}
        </Switch>
      </main>
    );
}

export default MainContent
