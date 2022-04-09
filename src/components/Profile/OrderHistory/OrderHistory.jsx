import React from "react";
import OrderHistoryBody from "../OrderHistoryBody/OrderHistoryBody";
import OrderHistoryHeader from "../OrderHistoryHeader/OrderHistoryHeader";

const OrderHistory = () => {
  return (
    <div id="niiceeTab" class="page-content-order">
      {/* <!-- Tab links --> */}
      <OrderHistoryHeader />
      <OrderHistoryBody />
    </div>
  );
};

export default OrderHistory;
