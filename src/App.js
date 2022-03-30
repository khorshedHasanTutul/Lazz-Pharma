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
import Privacy from "./components/pages/Privacy";
import Returnpolicy from "./components/pages/Returnpolicy";
import Review from "./components/pages/Review";
import TermsCondition from "./components/pages/TermsCondition";
import {
  urlAboutRoute,
  urlCarrerRoute,
  urlContactRoute,
  urlGalleryRoute,
  urlHomeRoute,
  urlPrivacyPolicy,
  urlRequestOrderRoute,
  urlReturnPolicy,
  urlReviewRoute,
  urlTermsConditionRoute,
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
          <Route path={urlReturnPolicy()} exact>
            <Returnpolicy />
          </Route>
          <Route path={urlTermsConditionRoute()} exact>
            <TermsCondition />
          </Route>
          <Route path={urlPrivacyPolicy()} exact>
            <Privacy />
          </Route>
        </Switch>
      </main>
      <ShoppingCart />
      <FooterParent />
    </Fragment>
  );
}

export default App;
