import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import {
  urlHomeRoute,
  urlProfileRoute,
  urlRequestHistoryRoute,
} from "../../../Service/UrlService";
import authContext from "../../../store/auth-context";

const RequestProductAlert = ({ removeButtonHandler }) => {
  const authCtx = useContext(authContext);
  let history = useHistory();
  const removeHandler = () => {
    history.push(urlHomeRoute());
    removeButtonHandler();
  };
  const viewOrderClickedHandler = () => {
    history.push(urlProfileRoute() + urlRequestHistoryRoute());
  };
  return (
    <div id="pop-up">
      <div class="overlay__popup show">
        <div class="popup undefined">
          <div class="popup__title">
            <h2>Order Placed Successfully</h2>
            <div
              style={{ color: "white", fontSize: "1.5rem", cursor: "pointer" }}
              onClick={removeHandler}
            >
              ✖
            </div>
          </div>
          <div class="popup__body">
            <div>
              <h1 class="t-20 t-bold t-center mb-8 t-primary">
                Your order has been placed
              </h1>
              <h2 class="t-18 t-bold t-center mb-16 t-secondary">
                We'll call your number {authCtx.user.phone} to reconfirm
              </h2>
              <div class="flex justify-center">
                <button
                  class="brick primary fill round-corner"
                  onClick={viewOrderClickedHandler}
                >
                  View Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestProductAlert;
