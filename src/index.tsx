import { App } from "./App";
import { theme } from "./theme/base";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import PaymentProvider from "./contexts/PaymentContext";
import reportWebVitals from "./reportWebVitals";
import CartProvider from "./contexts/CartContext";
import UserProvider from "./contexts/UserContext";
import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CartProvider>
          <UserProvider>
            <PaymentProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </PaymentProvider>
          </UserProvider>
        </CartProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
