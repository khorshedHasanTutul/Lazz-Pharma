import React from "react";
import { Link } from "react-router-dom";
import { urlHomeRoute } from "../../Service/UrlService";

const CheckoutHeader = () => {
  return (
    <div class="breadcrumb clearfix">
      <Link class="home" to={urlHomeRoute()} title="Return to Home">
        Home
      </Link>
      <span class="navigation-pipe">&nbsp;</span>
      <a href title="ProductDetails">
        Checkout
      </a>
    </div>
  );
};

export default CheckoutHeader;
