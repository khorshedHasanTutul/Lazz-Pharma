import React from "react";
import { Link } from "react-router-dom";
import { urlHomeRoute, urlTermsConditionRoute } from "../../Service/UrlService";
import RequestOrderHeader from "../RequestOrder/RequestOrderHeader";
import RequestProduct from "../RequestOrder/RequestProduct";

const OrderUS = () => {
  return (
    <div id="body_parent container-fluid">
      <div id="body_content">
        <div class="columns-container">
          <div id="columns" class="container">
            <RequestOrderHeader />
          </div>
        </div>
        <RequestProduct />
      </div>
    </div>
  );
};

export default OrderUS;
