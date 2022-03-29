import { Fragment } from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import "./App.css";
import BodyParent from "./components/BodyTemplate/BodyParent";
import ShoppingCart from "./components/Cart/ShoppingCart";
import FooterParent from "./components/Footer/FooterParent";
import HeaderParent from "./components/Header/HeaderParent";
import About from "./components/pages/About";
import Carrer from "./components/pages/Carrer";
import Contact from "./components/pages/Contact";
import Gallery from "./components/pages/Gallery";
import Home from "./components/pages/Home";
import OrderUS from "./components/pages/OrderUS";
import Review from "./components/pages/Review";
import {
  urlAboutRoute,
  urlCarrerRoute,
  urlContactRoute,
  urlGalleryRoute,
  urlHomeRoute,
  urlRequestOrderRoute,
  urlReviewRoute,
} from "./Service/UrlService";

function App() {
  return (
    <Fragment>
      <HeaderParent />
      {/* <BodyParent /> */}
      <main class="home option2">
        <Switch>
          <Route path={urlHomeRoute()} exact>
            <Home />
          </Route>
          <Route path={urlRequestOrderRoute()} exact>
            <OrderUS />
          </Route>
          <Route path={urlReviewRoute()} exact>
            <Review />
          </Route>
          <Route path={urlCarrerRoute()} exact>
            <Carrer />
          </Route>
          <Route path={urlGalleryRoute()} exact>
            <Gallery />
          </Route>
          <Route path={urlAboutRoute()} exact>
            <About />
          </Route>
          <Route path={urlContactRoute()} exact>
            <Contact />
          </Route>
        </Switch>
      </main>
      <ShoppingCart />
      <FooterParent />
    </Fragment>
  );
}

export default App;
