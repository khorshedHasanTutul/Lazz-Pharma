import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { urlAllOrderRoutes, urlOrderRoute, urlPrescriptionHistory, urlProfileAddressRoute, urlProfileComplain, urlProfileEditRoute, urlProfileRoute, urlRequestHistoryRoute, urlSpecialOfferRoute } from "../../../Service/UrlService";
import Address from "../../Checkout/Address";
import Complain from "../Complain/Complain";
import OrderHistory from "../OrderHistory/OrderHistory";
import PrescriptionHistory from "../PrescriptionHistory/PrescriptionHistory";
import RequestHistory from "../RequestHistory/RequestHistory";
import SpecialOffer from "../Special Offer/SpecialOffer";
import UpdateProfile from "../UpdateProfile/UpdateProfile";

const ProfileBody = () => {
  return (
    <div class="profile-body">
      <div class="profile-body-inner-content">
        <div class="product-desc-review-information-main">
          <Switch>
            <Route path={urlProfileRoute()} exact>
              <Redirect to={urlProfileRoute() + urlAllOrderRoutes()} />
            </Route>
            <Route path={urlProfileRoute() + urlOrderRoute()} exact>
              <Redirect to={urlProfileRoute() + urlAllOrderRoutes()} />
            </Route>
            <Route path={urlProfileRoute() + urlOrderRoute()}>
              <OrderHistory />
            </Route>
            <Route path={urlProfileRoute() + urlPrescriptionHistory()} exact>
              <PrescriptionHistory />
            </Route>
            <Route path={urlProfileRoute() + urlRequestHistoryRoute()}>
              <RequestHistory />
            </Route>
            <Route path={urlProfileRoute() + urlProfileAddressRoute()} exact>
                <Address />
            </Route>
            <Route path={urlProfileRoute() + urlSpecialOfferRoute()} exact>
                <SpecialOffer/>
            </Route>
            <Route path={urlProfileRoute()+urlProfileEditRoute()} exact>
                <UpdateProfile />
            </Route>
            <Route path={urlProfileRoute()+urlProfileComplain()} exact>
                <Complain />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default ProfileBody;
