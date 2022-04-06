import React from "react";
import { useHistory } from "react-router-dom";
import { urlHomeRoute } from "../../../Service/UrlService";

const AlertPopUp = ({alertStateChangedHandler}) => {
  let history=useHistory();
  const removeButtonHandler=()=>{
    alertStateChangedHandler();
    history.push(urlHomeRoute());
  }
  return (
    <div id="pop-up">
      <div class="overlay__popup show">
        <div class="popup undefined">
          <div class="popup__title">
            <h2>Order Placed Successfully</h2>
            <div style={{color:"white",fontSize:"1.5rem"}} onClick={removeButtonHandler}>✖</div>
          </div>
          <div class="popup__body">
            <div>
              <h1 class="t-20 t-bold t-center mb-8 t-primary">
                Your order has been placed
              </h1>
              <h1 class="t-20 t-bold t-center mb-16 t-primary">
                Your order number is "#0406000"
              </h1>
              <h2 class="t-18 t-bold t-center mb-16 t-secondary">
                We'll call your number 01778772327 to reconfirm
              </h2>
              <div class="flex justify-center">
                <button class="brick primary fill round-corner">
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

export default AlertPopUp;
