import React from "react";
import RequestOrderHeader from "../RequestOrder/RequestOrderHeader";
import RequestProduct from "../RequestOrder/RequestProduct";

const OrderUS = () => {
  return (
    <div id="body_parent container-fluid">
      <div id="body_content">
        <RequestOrderHeader />
        <RequestProduct />
      </div>
    </div>
  );
};

export default OrderUS;
