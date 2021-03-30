import '../../style/Main.css'
import Startpage from './Startpage';
import ProductPage from './ProductPage';
import { Route, Switch } from 'react-router';
import ProductItem from './ProductItem';
import Checkout from '../Checkout/Checkout';
import OrderView from '../Orderview/OrderView';
import AdminPage from './Admin/AdminPage';
import AddNewProduct from './Admin/AddNewProduct';


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
            <Route path={"/productItem/:id"}>
              <ProductItem />
            </Route>
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
            <AddNewProduct title="Add new product" btnText="Add" />
          </Route>
            <Route path={"/editProduct/:id"}>
              <AddNewProduct title='Edit product' btnText='Save'/>
            </Route>
        </Switch>
      </main>
    );
}

export default MainContent
