import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import AttachPrescriptionAlert from "../PrescriptionAlert/AttachPrescriptionAlert";
import UploadPrescriptionAlert from "../PrescriptionAlert/UploadPrescriptionAlert";
import {
  urlOrderDetailsRoute,
  urlProfileRoute,
} from "../../../Service/UrlService";

const OrderCard = ({ order }) => {
  console.log({ order });
  let created_at = new Date(order.CreatedAt);
  let history = useHistory();
  const [UploadPresAlert, setUploadPresAlert] = useState(false);
  const [attachPres, setAttachPres] = useState(false);
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
  const refilOrderHandler = () => {};
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
                  <div className="button-order" onClick={refilOrderHandler}>
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
              <aside>12 October'22 02:30 PM</aside>
            </div>
            <div class="order-dsc display-flex jc-s-b">
              <span> Payable Amount</span>
              <aside>{order.PayableAmount} tk</aside>
            </div>
            <div class="order-dsc display-flex jc-s-b">
              <span>Shipping Address</span>
              <aside>
                {order.Remarks} {order.Upazila} {order.District}{" "}
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
    </>
  );
};

export default OrderCard;
