import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import ScrolToTop from "./components/pages/ScrolToTop";
import CartContextProvider from "./store/CartContextProvider";
import AddressContextProvider from "./store/AddressContextProvider";
import AuthContextProvider from "./store/AuthContextProvider";
import AppContextProvider from "./store/AppContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrolToTop />
      <AppContextProvider>
        <AuthContextProvider>
          <AddressContextProvider>
            <CartContextProvider>
              <App />
            </CartContextProvider>
          </AddressContextProvider>
        </AuthContextProvider>
      </AppContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
