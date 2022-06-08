import React, { Fragment, useCallback, useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import { GET_ALL_ORDER } from "../../../lib/endpoints";
import { paramsUrlGenerator } from "../../../lib/utilities";
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
import Suspense from "../../Suspense/Suspense";
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

  const getAllOrdersHttp = useCallback(() => {
    http.get({
      url: GET_ALL_ORDER,
      before: () => {},
      successed: (res) => {
        setOrdersArray(res.Data.Data);
        setConfirmOrders(
          res?.Data.Data.filter((item) => item?.Status === OrderStatus.Confirmed)
        );
        setProcessingOrders(
          res?.Data.Data.filter((item) => item?.Status === OrderStatus.Processing)
        );
        setDelivaringdOrders(
          res?.Data.Data.filter((item) => item?.Status === OrderStatus.Delivering)
        );
        setCancellingdOrders(
          res?.Data.Data.filter((item) => item?.Status === OrderStatus.Cancelled)
        );
        setIsLoading(false);
      },
      failed: () => {
        setIsLoading(true);
      },
      always: () => {
        setIsLoading(false);
      },
    });
  }, []);

  useEffect(() => {
    getAllOrdersHttp();
  }, [getAllOrdersHttp]);

  console.log({ordersArray})

  return (
    <Fragment>
      {!isLoading  && (
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

          <Route
            path={urlProfileRoute() + urlOrderDetailsRoute() + ":id"}
            exact
          >
            <OrderDetails />
          </Route>
        </div>
      )}
      {isLoading && <Suspense />}
    </Fragment>
  );
};

export default OrderHistoryBody;
