import React from 'react';
import '../../style/Main.css'
import Startpage from './Startpage';
import ProductPage from './ProductPage';
import { Route, Switch } from 'react-router';
import ProductItem from './ProductItem';

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
          <Route path="/productItem">
              <ProductItem/>
          </Route>
        </Switch>
      </main>
    );
}

export default MainContent
