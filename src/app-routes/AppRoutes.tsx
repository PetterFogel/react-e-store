import { FC } from "react";
import { Route, Routes as Ds } from "react-router";
import { routeFactory } from "../route-factory/routeFactory";
import { HomePage } from "../pages/home-page/HomePage";
import { makeStyles } from "@mui/styles";
import ProductPage from "../components/Main/ProductPage";
import ProductItem from "../components/Main/ProductItem";
import Checkout from "../components/Checkout/Checkout";
import OrderView from "../components/Orderview/OrderView";
import AdminPage from "../components/Main/Admin/AdminPage";
import AddNewProduct from "../components/Main/Admin/AddNewProduct";
import About from "../components/Main/About";

const useStyles = makeStyles({
  root: { marginTop: "6vh" },
});

export const AppRoutes: FC = () => {
  const classes = useStyles();
  return (
    <main className={classes.root}>
      <Ds>
        <Route path={routeFactory.homeScreen()} element={<HomePage />} />
        <Route
          path={routeFactory.productScreen.products()}
          element={<ProductPage />}
        />

        <Route
          path={routeFactory.productScreen.productDetails(":id")}
          element={<ProductItem />}
        />

        <Route
          path={routeFactory.checkoutScreen.checkout()}
          element={<Checkout />}
        />
        <Route
          path={routeFactory.checkoutScreen.orderView()}
          element={<OrderView />}
        />
        <Route path={routeFactory.aboutScreen()} element={<About />} />

        <Route
          path={routeFactory.adminScreen.admin()}
          element={<AdminPage />}
        />

        <Route
          path={routeFactory.adminScreen.addNewProduct()}
          element={<AddNewProduct />}
        />

        <Route
          path={routeFactory.adminScreen.editProduct(":id")}
          element={<AddNewProduct />}
        />
      </Ds>
    </main>
  );
};
