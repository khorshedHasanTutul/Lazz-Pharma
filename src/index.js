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

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrolToTop />
      <AuthContextProvider>
      <AddressContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </AddressContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
