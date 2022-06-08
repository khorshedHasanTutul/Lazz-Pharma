import React, {
  Fragment,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useParams } from "react-router-dom";
import {
  GET_CURRENT_INFO,
  GET_ORDER_BY_PRESCRIPTIONS,
  GET_ORDER_DETAILS,
} from "../../../lib/endpoints";
import { humanizeShortDateTime } from "../../../lib/utilities";
import { BASE_URL, http } from "../../../Service/httpService";
import authContext from "../../../store/auth-context";
import Suspense from "../../Suspense/Suspense";
import AttachPrescriptionAlert from "../PrescriptionAlert/AttachPrescriptionAlert";
import UploadPrescriptionAlert from "../PrescriptionAlert/UploadPrescriptionAlert";

const OrderDetails = () => {
  let { id } = useParams();
  const authCtx = useContext(authContext);
  const [orderDetails, setOrderDetails] = useState();
  const [currentInfo, setCurrentInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let getDate = new Date(orderDetails?.createdAt);
  const [prescriptions, setPrescriptions] = useState([]);
  const products = [];
  const [UploadPresAlert, setUploadPresAlert] = useState(false);
  const [attachPres, setAttachPres] = useState(false);
  const printInvoiceHandler = () => {
    localStorage.setItem(
      "Invoice",
      JSON.stringify({
        orderNo: orderDetails?.Order.OrderNo,
        userName: authCtx.user.name,
        phone: authCtx.user.phone,
        orderDate: `${getDate.toLocaleDateString()} ${getDate.toLocaleTimeString()}`,
        today: humanizeShortDateTime(`/Date(${new Date().getTime()})/`),
        products: orderDetails?.Products,
        subTotal: orderDetails?.Order.TotalAmount,
        payable: orderDetails?.Order.PayableAmount,
        couponDiscount: orderDetails?.Order.CouponDiscount,
        deliveryChange: orderDetails?.Order.ShippingCharge,
        address: {
          contactName: orderDetails?.Order.ComtactName,
          phone: orderDetails?.Order.ComtactPhone,
          email: orderDetails?.Order.ComtactEmail,
          text: orderDetails?.Order.Remarks,
          upazila: orderDetails?.Order.Upazila,
          district: orderDetails?.Order.District,
          division: orderDetails?.Order.Province,
        },
      })
    );
    window.open("/invoice.html", "_blank");
  };
  const closePrescriptionModal = () => {
    setUploadPresAlert((prevState) => !prevState);
  };
  const closeAttachPreshandler = () => {
    setAttachPres((prevState) => !prevState);
  };

  const getOrderDetailsHttp = () => {
    http.get({
      url: GET_ORDER_DETAILS + id,
      before: () => {},
      successed: (res) => {
        setOrderDetails(res.Data);
        res.Data.Products.map(function (element) {
          return products.push(element.ProductId);
        });
        getPrescriptionsByOrder();
        getCurrentInfo();
        setIsLoading(false);
      },
      failed: () => {
        setIsLoading(true);
      },
      always: () => {
        setIsLoading(false);
      },
    });
  };

  const getPrescriptionsByOrder = useCallback(() => {
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

  const getCurrentInfo = () => {
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
  };

  const uploadPrescriptionHandler = () => {
    setUploadPresAlert((prevState) => !prevState);
  };
  const attachedPrescriptionHandler = () => {
    setAttachPres((prevState) => !prevState);
  };

  useEffect(() => {
    getOrderDetailsHttp();
  }, []);

  console.log({ orderDetails });

  return (
    <Fragment>
      {!isLoading && (
        <div>
          <div class="tabbed niiceeTabContent profile-tab invoice-tab">
            <div class="brick label happiness" style={{ color: "#016449" }}>
              <div class="Steps_steps__3SNbF Steps_wide__2JixU">
                <div class="line">
                  <div class="filler"></div>
                </div>
                <div class="Steps_step__2Wic5">
                  <p class="Steps_step__counter__2y6zu false active">1</p>
                  <div class="Steps_details__1CSho">
                    <h5>pending</h5>
                  </div>
                </div>
                <div class="Steps_step__2Wic5">
                  <p class="Steps_step__counter__2y6zu false false">2</p>
                  <div class="Steps_details__1CSho">
                    <h5>confirmed</h5>
                  </div>
                </div>
                <div class="Steps_step__2Wic5">
                  <p class="Steps_step__counter__2y6zu false false">3</p>
                  <div class="Steps_details__1CSho">
                    <h5>processing</h5>
                  </div>
                </div>
                <div class="Steps_step__2Wic5">
                  <p class="Steps_step__counter__2y6zu false false">4</p>
                  <div class="Steps_details__1CSho">
                    <h5>delivering</h5>
                  </div>
                </div>
                <div class="Steps_step__2Wic5">
                  <p class="Steps_step__counter__2y6zu false false">5</p>
                  <div class="Steps_details__1CSho">
                    <h5>completed</h5>
                  </div>
                </div>
              </div>
            </div>
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

            <div class="inv-flex-content d-flex js-center al-center">
              <h4>Order Invoice</h4>
              <ul className="order-details-buttons d-flex js-center al-center">
                <li>
                  <div onClick={uploadPrescriptionHandler}>
                    <span class="monami-button__text">
                      Upload Prescriptions
                    </span>
                  </div>
                </li>
                <li>
                  <div onClick={attachedPrescriptionHandler}>
                    <span class="monami-button__text">Attach Prescription</span>
                  </div>
                </li>
                <li>
                  <div onClick={printInvoiceHandler}>
                    <span class="monami-button__text">Print Invoice</span>
                  </div>
                </li>
              </ul>
            </div>

            <div id="page" class="order-invoice">
              <div class="order-invoice-ea">
                <div class="page">
                  <div class="custom-row-top">
                    <div class="span4">
                      <img
                        src="/Contents/assets/image/logo.png"
                        alt="img"
                        class="no-print"
                      />
                      <img
                        src="/Contents/assets/image/logo.png"
                        alt="img"
                        class="print"
                      />
                      <address>
                        <h2>Lazz Pharma Limited</h2>
                        Rasel Square , Dhaka
                        <br />
                      </address>
                    </div>
                    <div class="span4 well">
                      <table class="invoice-head">
                        <tbody>
                          <tr>
                            <td class="pull-right">
                              <strong>Name</strong>
                            </td>
                            <td>{orderDetails?.Order.ComtactName}</td>
                          </tr>
                          <tr>
                            <td class="pull-right">
                              <strong>Order ID</strong>
                            </td>
                            <td>#{orderDetails?.Order.OrderNo}</td>
                          </tr>
                          <tr>
                            <td class="pull-right">
                              <strong>Mobile</strong>
                            </td>
                            <td>{orderDetails?.Order.ComtactPhone}</td>
                          </tr>
                          <tr>
                            <td class="pull-right">
                              <strong>Order Date</strong>
                            </td>
                            <td>10-08-2013</td>
                          </tr>
                          <tr>
                            <td class="pull-right">
                              <strong>Invoice Date</strong>
                            </td>
                            <td>20-08-2013</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="invoice">
                    <h2>Invoice</h2>
                  </div>
                  <div class="custom-table-row">
                    <div class="span12 well invoice-body">
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
                        <tbody>
                          {orderDetails?.Products.map((item, index) => (
                            <tr>
                              <td>0{index + 1}</td>
                              <td>{item?.Name}</td>
                              <td>
                                {currentInfo[index]?.IsPrescriptionRequired ===
                                false
                                  ? "Not Required"
                                  : "Required"}
                              </td>
                              <td>{item.UnitPrice}</td>
                              <td>{item.Quantity}</td>
                              <td>{item.Discount}</td>
                              <td>{item.TotalAmount}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div class="sum-table-for-invoice">
                      <table class="table table-bordered small-table-sum">
                        <tbody>
                          <tr>
                            <td>SubTotal</td>
                            <td class="SubTotal-tab">
                              <span>{orderDetails?.Order.TotalAmount}</span>
                            </td>
                          </tr>
                          <tr>
                            <td>Coupon Discount</td>
                            <td class="SubTotal-tab">
                              <span>{orderDetails?.Order.CouponDiscount}</span>
                            </td>
                          </tr>
                          <tr>
                            <td>Delivery charge</td>
                            <td class="SubTotal-tab">
                              <span>{orderDetails?.Order.ShippingCharge}</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <strong>Amount Payable</strong>
                            </td>
                            <td class="SubTotal-tab">
                              <strong>
                                {orderDetails?.Order.PayableAmount}
                              </strong>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="footer-row">
                    <div class="cask-rewarded">
                      <span>
                        {orderDetails?.Order.CashBack} Taka Cashback Rewarded
                        For This Order
                      </span>
                      <p>
                        *** N.B: This cashback will be applicable at your next
                        Order
                      </p>
                      <h5>Thank You!</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isLoading && <Suspense />}
      {UploadPresAlert && (
        <UploadPrescriptionAlert
          orderId={orderDetails.Order.Id}
          orderNumber={orderDetails.Order.OrderNo}
          closeModal={closePrescriptionModal}
          getPrescriptionsByOrder={getPrescriptionsByOrder}
        />
      )}
      {attachPres && (
        <AttachPrescriptionAlert
          closeModal={closeAttachPreshandler}
          orderId={orderDetails.Order.Id}
          getPrescriptionsByOrder={getPrescriptionsByOrder}
        />
      )}
    </Fragment>
  );
};

export default OrderDetails;
