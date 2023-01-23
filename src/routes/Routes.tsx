import { FC } from "react";
import { makeStyles } from "@material-ui/styles";
import { Route, Switch } from "react-router";
import Startpage from "../components/Main/Startpage";
import ProductPage from "../components/Main/ProductPage";
import ProductItem from "../components/Main/ProductItem";
import Checkout from "../components/Checkout/Checkout";
import OrderView from "../components/Orderview/OrderView";
import AdminPage from "../components/Main/Admin/AdminPage";
import AddNewProduct from "../components/Main/Admin/AddNewProduct";
import About from "../components/Main/About";
import Background from "../assets/main-bg.jpg";
import { routeFactory } from "../route-factory/routeFactory";

const useStyles = makeStyles({
  root: {
    backgroundImage: `url(${Background})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
    marginTop: "6vh",
  },
});

export const Routes: FC = () => {
  const classes = useStyles();
  return (
    <main className={classes.root}>
      <Switch>
        <Route exact path={routeFactory.homeScreen()}>
          <Startpage />
        </Route>
        <Route path={routeFactory.productScreen.products()}>
          <ProductPage />
        </Route>
        <Route path={routeFactory.productScreen.productDetails(":id")}>
          <ProductItem />
        </Route>
        <Route path={routeFactory.checkoutScreen.checkout()}>
          <Checkout />
        </Route>
        <Route path={routeFactory.checkoutScreen.orderView()}>
          <OrderView />
        </Route>
        <Route path={routeFactory.aboutScreen()}>
          <About />
        </Route>
        <Route path={routeFactory.adminScreen.admin()}>
          <AdminPage />
        </Route>
        <Route path={routeFactory.adminScreen.addNewProduct()}>
          <AddNewProduct />
        </Route>
        <Route path={routeFactory.adminScreen.editProduct(":id")}>
          <AddNewProduct />
        </Route>
      </Switch>
    </main>
  );
};
