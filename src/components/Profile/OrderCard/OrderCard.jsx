import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  urlOrderDetailsRoute,
  urlProfileRoute,
} from "../../../Service/UrlService";

const OrderCard = ({ order }) => {
  let created_at = new Date(order.CreatedAt);
  let history = useHistory();

  const clickedToViewOrder = () => {
    history.push(urlProfileRoute() + urlOrderDetailsRoute() + order.Id);
  };
  return (
    <div id="Tab6" class="tabcontent tab-content detalis-page-tab-content">
      {/* <!-- product desc review information --> */}
      <div class="profile-order-tab">
        <a href>
          <div class="order-id display-flex jc-s-b">
            <span> Order ID #{order.OrderNo}</span>
            <ul className="group-of-buttons">
              <li>
                <div className="button-order">
                  <div>Upload Prescription </div>
                </div>
              </li>
              <li>
                <div className="button-order">
                  <div>Attach Prescription </div>
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
              {order.Remarks} {order.Upazila} {order.District} {order.Province}
            </aside>
          </div>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur , adipisicing elit.
            Necessitatibus fugit, soluta dicta obcaecati eos voluptatibus iste
            culpa, provident est nihil voluptas exercitationem possimus, a
            suscipit?
          </p> */}
        </a>
      </div>
      {/* <!-- product desc review information --> */}
    </div>
  );
};

export default OrderCard;
