import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import ScrolToTop from "./components/pages/ScrolToTop";
import CartContextProvider from "./store/CartContextProvider";
import AddressContextProvider from "./store/AddressContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrolToTop />
      <AddressContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </AddressContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
