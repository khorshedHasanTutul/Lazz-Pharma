import React from "react";
import OrderCard from "../OrderCard/OrderCard";

const OrderList = ({ ordersArray }) => {
  if (
    ordersArray === undefined ||
    ordersArray.length === 0 ||
    ordersArray.Total === 0
  ) {
    return (
      <div
        className="brick label info"
        style={{ marginTop: "10px", display: "grid" }}
      >
        <p className="t-14 t-bold t-center">No Order Found!</p>
      </div>
    );
  } else {
    return (
      <div className="tabbed niiceeTabContent profile-tab">
        {ordersArray.Data.map((order) => (
          <OrderCard order={order} key={order.orderNumber} />
        ))}
      </div>
    );
  }
};

export default OrderList;
