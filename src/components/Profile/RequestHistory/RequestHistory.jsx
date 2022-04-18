import React, { useState } from "react";
import RequestHistoryAlert from "./RequestHistoryAlert.jsx/RequestHistoryAlert";

const RequestHistory = () => {
  const [isOPenAlert, setIsOpenAlert] = useState(false);
  const viewOrderDetailsHandler = () => {
      setIsOpenAlert(true);
  };
  const requestCloseHandler = ()=>{
    setIsOpenAlert(prevState => !prevState);
  }
  return (
    <div className="requestHistory_container">
      <div className="requestHistory__item-container">
        <p>#1</p>
        <div className="item-container-order">
          <p>
            Order No: <span>20981</span>
          </p>
          <p>
            Note <span>Hello LazzPharma</span>
          </p>
        </div>
        <div className="item-container__status">
          <p>
            Status <span>initial</span>
          </p>
        </div>
        <p>February 28,2022</p>
        <div
          className="item-container__view-Button"
          onClick={viewOrderDetailsHandler}
        >
          View
        </div>
      </div>
      <div className="requestHistory__item-container">
        <p>#1</p>
        <div className="item-container-order">
          <p>
            Order No: <span>20981</span>
          </p>
          <p>
            Note <span>Hello LazzPharma</span>
          </p>
        </div>
        <div className="item-container__status">
          <p>
            Status <span>initial</span>
          </p>
        </div>
        <p>February 28,2022</p>
        <div className="item-container__view-Button">View</div>
      </div>
      <div className="requestHistory__item-container">
        <p>#1</p>
        <div className="item-container-order">
          <p>
            Order No: <span>#20981</span>
          </p>
          <p>
            Note: <span>Hello LazzPharma</span>
          </p>
        </div>
        <div className="item-container__status">
          <p>
            Status <span>initial</span>
          </p>
        </div>
        <p>February 28,2022</p>
        <div className="item-container__view-Button">View</div>
      </div>
      {
          isOPenAlert && (
              <RequestHistoryAlert closeRequestAlert={requestCloseHandler}/>
          )
      }
    </div>
  );
};

export default RequestHistory;
