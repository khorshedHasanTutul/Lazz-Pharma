import { Fragment } from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import "./App.css";
import BodyParent from "./components/BodyTemplate/BodyParent";
import ShoppingCart from "./components/Cart/ShoppingCart";
import FooterParent from "./components/Footer/FooterParent";
import HeaderParent from "./components/Header/HeaderParent";
import Home from "./components/pages/Home";
import { urlHomeRoute } from "./Service/UrlService";

function App() {
  return (
    <Fragment>
      <HeaderParent />
      {/* <BodyParent /> */}
      <main>
        <Switch>
          <Route path={urlHomeRoute()} exact><Home/></Route>
        </Switch>
      </main>
      <ShoppingCart />
      <FooterParent />
    </Fragment>
  );
}

export default App;
