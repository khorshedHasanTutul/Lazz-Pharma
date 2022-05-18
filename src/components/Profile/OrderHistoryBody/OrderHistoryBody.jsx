import React, { useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import { GET_ALL_ORDER } from "../../../lib/endpoints";
import { http } from "../../../Service/httpService";
import {
  urlAllOrderRoutes,
  urlConfirmedRoutes,
  urlOrderCancelingRoute,
  urlOrderDelivaringRoute,
  urlOrderDetailsRoute,
  urlOrderProcessing,
  urlOrderRoute,
  urlProfileRoute,
} from "../../../Service/UrlService";
import { OrderStatus } from "../../utilities/dictionaries";
import OrderDetails from "../OrderDetails/OrderDetails";
import OrderList from "../OrderList/OrderList";

const OrderHistoryBody = () => {
  const [ordersArray, setOrdersArray] = useState([]);
  const [confirmedOrders, setConfirmOrders] = useState([]);
  const [processingOrders, setProcessingOrders] = useState([]);
  const [delivaringOrders, setDelivaringdOrders] = useState([]);
  const [cancellingOrders, setCancellingdOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getAllOrdersHttp = () => {
    http.get({
      url: GET_ALL_ORDER,
      before: () => {},
      successed: (res) => {
        console.log(res);
        setOrdersArray(res.Data);
        setConfirmOrders(
          res?.Data.filter((item) => item?.Status === OrderStatus.Confirmed)
        );
        setProcessingOrders(
          res?.Data.filter((item) => item?.Status === OrderStatus.Processing)
        );
        setDelivaringdOrders(
          res?.Data.filter((item) => item?.Status === OrderStatus.Delivering)
        );
        setCancellingdOrders(
          res?.Data.filter((item) => item?.Status === OrderStatus.Cancelled)
        );
      },
      failed: () => {},
      always: () => {},
    });
  };

  useEffect(() => {
    getAllOrdersHttp();
  }, []);
  return (
    <div>
      <Route path={urlProfileRoute() + urlOrderRoute()} exact>
        <Redirect to={urlProfileRoute() + urlAllOrderRoutes()} />
      </Route>

      <Route path={urlProfileRoute() + urlAllOrderRoutes()} exact>
        <OrderList ordersArray={ordersArray} />
      </Route>

      <Route path={urlProfileRoute() + urlConfirmedRoutes()} exact>
        <OrderList ordersArray={confirmedOrders} />
      </Route>

      <Route path={urlProfileRoute() + urlOrderProcessing()} exact>
        <OrderList ordersArray={processingOrders} />
      </Route>

      <Route path={urlProfileRoute() + urlOrderDelivaringRoute()} exact>
        <OrderList ordersArray={delivaringOrders} />
      </Route>

      <Route path={urlProfileRoute() + urlOrderCancelingRoute()} exact>
        <OrderList ordersArray={cancellingOrders} />
      </Route>

      <Route path={urlProfileRoute() + urlOrderDetailsRoute() + ":id"} exact>
        <OrderDetails />
      </Route>
    </div>
  );
};

export default OrderHistoryBody;
