import { App } from "./App";
import { theme } from "./theme/base";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { AdminProvider } from "./contexts/AdminContext";
import { ProductsProvider } from "./contexts/ProductContext";
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import CartProvider from "./contexts/CartContext";
import UserProvider from "./contexts/UserContext";
import PaymentProvider from "./contexts/PaymentContext";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ProductsProvider>
          <CartProvider>
            <UserProvider>
              <PaymentProvider>
                <AdminProvider>
                  <BrowserRouter>
                    <App />
                  </BrowserRouter>
                </AdminProvider>
              </PaymentProvider>
            </UserProvider>
          </CartProvider>
        </ProductsProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
