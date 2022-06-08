import React, { useEffect, useState } from "react";
import { gotoTop } from "../../../lib/utilities";
import ScrolToTop from "../../pages/ScrolToTop";
import Paginator from "../../Paginators/Paginators";
import OrderCard from "../OrderCard/OrderCard";

const OrderList = ({ ordersArray }) => {
  const pageSize = 5;
  const [pagedOrders, setPagedOrders] = useState([]);

  const pageChangeHandler = (page) => {
    setPagedOrders(ordersArray.slice((page - 1) * pageSize, page * pageSize));
    gotoTop();
  };
  useEffect(() => {
    setPagedOrders(ordersArray.slice(0, pageSize));
  }, [ordersArray]);

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
      <>
        <div className="tabbed niiceeTabContent profile-tab">
          {pagedOrders.map((order) => (
            <OrderCard order={order} key={order.orderNumber} />
          ))}
        </div>
        <div className="gap" style={{ marginTop: "20px" }}></div>
        <Paginator
          items={ordersArray.length}
          pageItems={pageSize}
          onPageChange={pageChangeHandler}
        />
      </>
    );
  }
};

export default OrderList;
