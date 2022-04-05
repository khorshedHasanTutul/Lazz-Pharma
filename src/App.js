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
import ProductDetails from "./components/pages/ProductDetails";
import {
  urlAboutRoute,
  urlCarrerRoute,
  urlCategoryWiseRoute,
  urlCheckoutRoute,
  urlContactRoute,
  urlGalleryRoute,
  urlHomeRoute,
  urlHowToOrderRoute,
  urlPrivacyPolicy,
  urlProductDetails,
  urlRequestOrderRoute,
  urlReturnPolicy,
  urlReviewRoute,
  urlSubCategoryWiseRoute,
  urlTermsConditionRoute,
} from "./Service/UrlService";
import Checkout from "./components/pages/Checkout";
import HowToOrder from "./components/pages/HowToOrder";
import CategoryWiseProduct from "./components/Products/CategoryProduct/CategoryWiseProduct";
import SubCategoryProduct from "./components/Products/SubCategoryProduct/SubCategoryProduct";

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
          <Route path={urlProductDetails() + ":id"} exact>
            <ProductDetails />
          </Route>
          <Route path={urlCheckoutRoute()} exact>
            <Checkout />
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
          <Route path={urlHowToOrderRoute()} exact>
            <HowToOrder />
          </Route>
          <Route path={urlCategoryWiseRoute() + ":id"}>
            <CategoryWiseProduct />
          </Route>
          <Route path={urlSubCategoryWiseRoute() + ":id"}>
            <SubCategoryProduct />
          </Route>
        </Switch>
      </main>
      <ShoppingCart />
      <FooterParent />
    </Fragment>
  );
}

export default App;
