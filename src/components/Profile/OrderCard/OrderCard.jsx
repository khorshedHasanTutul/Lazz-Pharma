import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import AttachPrescriptionAlert from "../PrescriptionAlert/AttachPrescriptionAlert";
import UploadPrescriptionAlert from "../PrescriptionAlert/UploadPrescriptionAlert";
import {
  urlOrderDetailsRoute,
  urlProfileRoute,
} from "../../../Service/UrlService";
import { humanizeShortDateTime } from "../../../lib/utilities";
import RefilOrderAlert from "../PrescriptionAlert/RefilOrderAlert";
import { http } from "../../../Service/httpService";
import {
  GET_CURRENT_INFO,
  GET_ORDER_BY_PRESCRIPTIONS,
  GET_ORDER_DETAILS,
} from "../../../lib/endpoints";

const OrderCard = ({ order }) => {
  console.log({ order });
  let created_at = new Date(order.CreatedAt);
  let history = useHistory();
  const [UploadPresAlert, setUploadPresAlert] = useState(false);
  const [attachPres, setAttachPres] = useState(false);
  const [refilOrder, setRefilOrder] = useState(false);
  const [orderDetails, setOrderDetails] = useState();
  const [prescriptions, setPrescriptions] = useState([]);
  const [currentInfo, setCurrentInfo] = useState([]);
  const products = [];
  const closePrescriptionModal = () => {
    setUploadPresAlert((prevState) => !prevState);
  };
  const closeAttachPreshandler = () => {
    setAttachPres((prevState) => !prevState);
  };
  const uploadPrescriptionHandler = () => {
    setUploadPresAlert((prevState) => !prevState);
  };
  const attachedPrescriptionHandler = () => {
    setAttachPres((prevState) => !prevState);
  };
  const refilOrderHandler = (orderId) => {
    setRefilOrder((prevState) => !prevState);
    http.get({
      url: GET_ORDER_DETAILS + orderId,
      before: () => {},
      successed: (res) => {
        setOrderDetails(res.Data);
        res.Data.Products.map(function (element) {
          return products.push(element.ProductId);
        });
        getPrescriptionsByOrder(orderId);
        getCurrentInfo();
        // setIsLoading(false);
      },
      failed: () => {
        // setIsLoading(true);
      },
      always: () => {
        // setIsLoading(false);
      },
    });
  };
  const getPrescriptionsByOrder = useCallback((id) => {
    http.get({
      url: GET_ORDER_BY_PRESCRIPTIONS + id,
      before: () => {},
      successed: (res) => {
        setPrescriptions(res.Data);
      },
      failed: () => {},
      always: () => {},
    });
  }, []);
  const getCurrentInfo = useCallback(() => {
    http.post({
      url: GET_CURRENT_INFO,
      payload: {
        productIds: products,
      },
      before: () => {},
      successed: (res) => {
        setCurrentInfo(res.Data);
      },
      failed: () => {},
      always: () => {},
    });
  }, [products]);
  const clickedToViewOrder = () => {
    history.push(urlProfileRoute() + urlOrderDetailsRoute() + order.Id);
  };
  return (
    <>
      <div id="Tab6" class="tabcontent tab-content detalis-page-tab-content">
        {/* <!-- product desc review information --> */}
        <div class="profile-order-tab">
          <a href>
            <div class="order-id display-flex jc-s-b">
              <span> Order ID #{order.OrderNo}</span>
              <ul className="group-of-buttons">
                <li>
                  <div
                    className="button-order"
                    onClick={uploadPrescriptionHandler}
                  >
                    <div>Upload Prescription </div>
                  </div>
                </li>
                <li>
                  <div
                    className="button-order"
                    onClick={attachedPrescriptionHandler}
                  >
                    <div>Attach Prescription </div>
                  </div>
                </li>
                <li>
                  <div
                    className="button-order"
                    onClick={refilOrderHandler.bind(null, order.Id)}
                  >
                    <div>Refil Order</div>
                  </div>
                </li>
                <li>
                  <div className="button-order" onClick={clickedToViewOrder}>
                    <div>View Details</div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="order-dsc display-flex jc-s-b">
              <span> Date</span>
              <aside>{humanizeShortDateTime(order.CreatedAt)}</aside>
            </div>
            <div class="order-dsc display-flex jc-s-b">
              <span> Status</span>
              <aside className="status-order-card">{order.Status}</aside>
            </div>
            <div class="order-dsc display-flex jc-s-b">
              <span> Payable Amount</span>
              <aside>{order?.PayableAmount.toFixed(2)} tk</aside>
            </div>
            <div class="order-dsc display-flex jc-s-b">
              <span>Shipping Address</span>
              <aside>
                {order.Remarks}, {order.Upazila}, {order.District},{" "}
                {order.Province}
              </aside>
            </div>
          </a>
        </div>
        {/* <!-- product desc review information --> */}
      </div>
      {UploadPresAlert && (
        <UploadPrescriptionAlert
          orderId={order.Id}
          orderNumber={order.OrderNo}
          closeModal={closePrescriptionModal}
        />
      )}
      {attachPres && (
        <AttachPrescriptionAlert
          closeModal={closeAttachPreshandler}
          orderId={order.Id}
        />
      )}
      {refilOrder && (
        <RefilOrderAlert
          closeModal={refilOrderHandler}
          orderDetails={orderDetails}
          prescriptions={prescriptions}
          currentInfo={currentInfo}
        />
      )}
    </>
  );
};

export default OrderCard;
