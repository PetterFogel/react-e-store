import { FC } from "react";
import { HomePage } from "../pages/home-page/HomePage";
import { ProductPage } from "../pages/product-page/ProductPage";
import { routeFactory } from "../route-factory/routeFactory";
import { Route, Routes } from "react-router";
import { ProductDetails } from "../pages/product-page/ProductDetails";
import Checkout from "../components/Checkout/Checkout";
import OrderView from "../components/Orderview/OrderView";
import AdminPage from "../components/Main/Admin/AdminPage";
import AddNewProduct from "../components/Main/Admin/AddNewProduct";
import About from "../components/Main/About";

export const AppRoutes: FC = () => {
  return (
    <main style={{ marginTop: "6vh" }}>
      <Routes>
        <Route path={routeFactory.homeScreen()} element={<HomePage />} />
        <Route
          path={routeFactory.productScreen.products()}
          element={<ProductPage />}
        />

        <Route
          path={routeFactory.productScreen.productDetails(":id")}
          element={<ProductDetails />}
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
      </Routes>
    </main>
  );
};
