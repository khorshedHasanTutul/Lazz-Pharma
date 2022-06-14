import React, { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { BASE_URL } from "../../../Service/httpService";
import authContext from "../../../store/auth-context";
import AlertPopUp from "../../Checkout/OrderAlert/AlertPopUp";
import Suspense from "../../Suspense/Suspense";

const RefilOrderAlert = ({
  closeModal,
  orderDetails,
  prescriptions,
  currentInfo,
}) => {
  const authCtx = useContext(authContext);
  const [isLoading, setIsLoading] = useState(true);
  const [successOrderAlert, setSuccessOrderAlert] = useState(false);
  let subtotal = 0;
  console.log({ orderDetails }, { prescriptions }, { currentInfo });
  const orderCreateHandler = () => {
    //api order create gooes theere
    // if success

    setSuccessOrderAlert(true);
    // closeModal();
  };

  const closeModalOrder = () => {
    setSuccessOrderAlert((prevState) => !prevState);
    closeModal();
  };

  const updateCurrentInfoProducts = (item) => {
    const findItem = currentInfo?.find((item2) => item2.Id === item.ProductId);
    if (findItem?.Discount > 0) {
      findItem.UnitSalePrice -= findItem.Discount;
    }
    item.UnitPrice = findItem?.UnitSalePrice;
    item.PayableAmount = item.UnitPrice * item.Quantity;
    item.TotalAmount = item.UnitPrice * item.Quantity;
    subtotal += item.TotalAmount;
    return item;
  };

  useEffect(() => {
    if (
      (currentInfo.length > 0 &&
        orderDetails !== undefined &&
        prescriptions.length > 0) ||
      (currentInfo.length > 0 &&
        orderDetails !== undefined &&
        prescriptions.length === 0)
    ) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [currentInfo.length, orderDetails, prescriptions.length]);

  return (
    <>
      {!successOrderAlert && (
        <div id="pop-up">
          <div class="overlay__popup show">
            <div class="popup undefined">
              <div class="popup__title">
                <h2>Order Summarize</h2>
                <div
                  style={{
                    color: "white",
                    fontSize: "1.5rem",
                    cursor: "pointer",
                  }}
                  onClick={closeModal}
                >
                  ✖
                </div>
              </div>

              <div
                class="popup__body"
                style={{
                  maxHeight: "400px",
                  overflowX: "hidden",
                  overflowY: "scroll",
                  minHeight: "150px",
                }}
              >
                {!isLoading && (
                  <>
                    {prescriptions.length > 0 && (
                      <p style={{ fontWeight: "bold", padding: "2px" }}>
                        Prescriptions Found
                      </p>
                    )}
                    {prescriptions.length > 0 && (
                      <div className="prescription_card_orderDetails">
                        <div className="image_preview_container">
                          <>
                            <div className="image_previewer">
                              {/* single item */}
                              {prescriptions.map((file) => (
                                <div className="image_prev">
                                  <img
                                    src={BASE_URL + file.FilePath}
                                    alt="img"
                                    srcset=""
                                    style={{ height: "100%" }}
                                  />
                                </div>
                              ))}
                            </div>
                          </>
                        </div>
                      </div>
                    )}
                    <p style={{ fontWeight: "bold" }}>Shipping Address</p>
                    <div class="shaping-address-saveing-row">
                      <div class="shapping-address-inner-content">
                        <div class="saving-address-content">
                          <small>{orderDetails?.Order.ComtactName}</small>
                          <small>{orderDetails?.Order.ComtactPhone}</small>
                          <span>
                            <aside>{orderDetails?.Order.AddressType}</aside>
                          </span>
                          <span>{orderDetails?.Order.ComtactEmail} &nbsp;</span>
                          <span>
                            {" "}
                            {orderDetails?.Order.Remarks}&nbsp;
                            {orderDetails?.Order.Upazila}
                            &nbsp; {orderDetails?.Order.District}&nbsp;
                            {orderDetails?.Order.Province}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="custom-table-row">
                      <p style={{ fontWeight: "bold" }}>Products</p>
                      <div class="span12  invoice-body">
                        <table class="table table-bordered">
                          <thead>
                            <tr>
                              <th>sl</th>
                              <th>Product</th>
                              <th>Prescription</th>
                              <th>Price</th>
                              <th>Quantity</th>
                              <th>Discount</th>
                              <th>Amount</th>
                            </tr>
                          </thead>
                          <tbody style={{textAlign:"center"}}>
                            {orderDetails?.Products.map((item, index) => {
                              const updatedInfoProduct =
                                updateCurrentInfoProducts(item);
                              return (
                                <tr>
                                  <td>0{index + 1}</td>
                                  <td>{item?.Name}</td>
                                  <td>
                                    {currentInfo[index]
                                      ?.IsPrescriptionRequired === false
                                      ? "Not Required"
                                      : "Required"}
                                  </td>
                                  <td>{updatedInfoProduct.UnitPrice}</td>
                                  <td>{updatedInfoProduct.Quantity}</td>
                                  <td>{updatedInfoProduct.Discount}</td>
                                  <td>{updatedInfoProduct.TotalAmount}</td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                      <div class="sum-table-for-invoice">
                        <table class="table table-bordered small-table-sum">
                          <tbody>
                            <tr>
                              <td>SubTotal</td>
                              <td class="SubTotal-tab">
                                <span>{subtotal}</span>
                              </td>
                            </tr>
                            <tr>
                              <td>Coupon Discount</td>
                              <td class="SubTotal-tab">
                                <span>
                                  {orderDetails?.Order.CouponDiscount}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>Delivery charge</td>
                              <td class="SubTotal-tab">
                                <span>
                                  {orderDetails?.Order.ShippingCharge}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <strong>Amount Payable</strong>
                              </td>
                              <td class="SubTotal-tab">
                                <strong>
                                  {subtotal +
                                    orderDetails?.Order.ShippingCharge}
                                </strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="confirmation-buttons">
                      <div
                        className="confirmation-button order"
                        onClick={orderCreateHandler}
                      >
                        Order
                      </div>
                      <div
                        className="confirmation-button cancle"
                        onClick={closeModal}
                      >
                        Cancle
                      </div>
                    </div>
                  </>
                )}
                {isLoading && <Suspense />}
              </div>
            </div>
          </div>
        </div>
      )}
      {successOrderAlert && (
        <AlertPopUp
          alertStateChangedHandler={closeModalOrder}
          mobile={authCtx.user.phone}
          order={{ orderNo: "123456" }}
        />
      )}
    </>
  );
};

export default RefilOrderAlert;
