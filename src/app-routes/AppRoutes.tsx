import { FC } from "react";
import { HomePage } from "../pages/home-page/HomePage";
import { AboutPage } from "../pages/about-page/AboutPage";
import { AdminPage } from "../pages/admin-page/AdminPage";
import { ProductPage } from "../pages/product-page/ProductPage";
import { CheckoutPage } from "../pages/checkout-page/CheckoutPage";
import { routeFactory } from "../common/constants/routeFactory";
import { Route, Routes } from "react-router";
import { ProductDetails } from "../pages/product-page/ProductDetails";

export const AppRoutes: FC = () => {
  return (
    <main style={{ paddingTop: "6vh" }}>
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
          path={routeFactory.checkoutScreen()}
          element={<CheckoutPage />}
        />
        <Route path={routeFactory.aboutScreen()} element={<AboutPage />} />
        <Route path={routeFactory.adminScreen()} element={<AdminPage />} />
      </Routes>
    </main>
  );
};
