import React, { useCallback, useEffect, useState } from "react";
import {
  REQUEST_ORDER_GET,
  REQUEST_ORDER_ITEMS_GET,
  REQUEST_ORDER_PRES_GET,
} from "../../../lib/endpoints";
import { humanizeShortDateTime } from "../../../lib/utilities";
import { http } from "../../../Service/httpService";
import Suspense from "../../Suspense/Suspense";
import RequestHistoryAlert from "./RequestHistoryAlert.jsx/RequestHistoryAlert";

const RequestHistory = () => {
  const [isOPenAlert, setIsOpenAlert] = useState(false);
  const [requestOrders, setRequestOrders] = useState([]);
  const [requestItems, setRequestItems] = useState([]);
  const [requestPres, setRequestPres] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isGetting, setIsGetting] = useState(true);
  const viewOrderDetailsHandler = (item) => {
    setIsOpenAlert(true);
    getRequestItems(item.Id);
    getRequestPrescriptions(item.Id);
  };
  const requestCloseHandler = () => {
    setIsOpenAlert((prevState) => !prevState);
  };
  const getRequestOrders = useCallback(() => {
    http.get({
      url: REQUEST_ORDER_GET,
      before: () => {
        setIsLoading(true);
      },
      successed: (res) => {
        setRequestOrders(res.Data.Data);
        setIsLoading(false);
      },
      failed: () => {},
      always: () => {
        setIsLoading(false);
      },
    });
  }, []);
  const getRequestItems = useCallback((id) => {
    http.get({
      url: REQUEST_ORDER_ITEMS_GET + id,
      before: () => {
        setIsGetting(true);
        getRequestPrescriptions();
      },
      successed: (res) => {
        setRequestItems(res.Data);
        setIsGetting(false);
      },
      failed: () => {},
      always: () => {
        setIsGetting(false);
      },
    });
  }, []);

  const getRequestPrescriptions = useCallback((id) => {
    http.get({
      url: REQUEST_ORDER_PRES_GET + id,
      before: () => {},
      successed: (res) => {
        setRequestPres(res.Data);
      },
      failed: () => {},
      always: () => {},
    });
  }, []);

  useEffect(() => {
    getRequestOrders();
  }, [getRequestOrders]);
  return (
    <>
      {!isLoading && (
        <div className="requestHistory_container">
          {requestOrders.length === 0 && (
            <div className="request-products">
              Didn't find any requests yet . 😥
            </div>
          )}
          {requestOrders.length > 0 &&
            requestOrders.map((item, index) => (
              <div className="requestHistory__item-container">
                <p>#0{index + 1}</p>
                <div className="item-container-order">
                  <p>
                    Order No <span>:{item.OrderNo}</span>
                  </p>
                  <p>
                    Note <span>:{item.Remarks}</span>
                  </p>
                </div>
                <div className="item-container__status">
                  <p>
                    Status <span>:{item.Status}</span>
                  </p>
                </div>
                <p>{humanizeShortDateTime(item.CreatedAt)}</p>
                <div
                  className="item-container__view-Button"
                  onClick={viewOrderDetailsHandler.bind(null, item)}
                >
                  View
                </div>
              </div>
            ))}
          {isOPenAlert && (
            <RequestHistoryAlert
              closeRequestAlert={requestCloseHandler}
              requestItems={requestItems}
              requestPres={requestPres}
              isGetting = {isGetting}
            />
          )}
        </div>
      )}
      {isLoading && <Suspense />}
    </>
  );
};

export default RequestHistory;
