import React, { Fragment, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { storeAddressObj } from "../../Service/AddressService";
import { urlHomeRoute } from "../../Service/UrlService";
import addressContext from "../../store/address-context";
import cartContext from "../../store/cart-context";
import AlertPopUp from "./OrderAlert/AlertPopUp";
import alert from "./OrderAlert/AlertPopUp";

const Payment = ({ AddressActiveHandler }) => {
  const [PopUpAlert, setPopUpAlert] = useState(false);
  const ctxAddress = useContext(addressContext);
  const ctxCart = useContext(cartContext);
  const [clickedRadio, setClickedRadio] = useState(false);
  const getStoreCartCtx = ctxCart.getCartModel;
  const getActiveAddressType = ctxAddress.getActiveType;
  const getSelectedAddress = ctxAddress.getStoreAddressCtx.find(
    (item) => item.type === getActiveAddressType
  );
  const radioButtonHandler = () => {
    setClickedRadio(true);
  };
  const alertStateChangedHandler = () => {
    setPopUpAlert((prevState) => !prevState);
  };
  const proceedOrderHandler = () => {
    if (clickedRadio) {
      setPopUpAlert(true);
      ctxCart.clearCart();
    } else {
      // alertPaymentRadioStateChangeHandler();
      alert("Please select a payment method.");
    }
  };
  return (
    <div class="tab_content">
      <div class="heading-counter warning">
        Your shopping cart contains:
        <span> {getStoreCartCtx.TotalItems} Product</span>
      </div>
      <div class="discount-cupon-payment">
        <label for="discount_code">Use Coupon</label>
        <form id="discount_codeSubmit">
          <input
            type="text"
            id="discount_code"
            placeholder="Discount Code..."
          />
          <button type="submit">Apply</button>
        </form>
      </div>
      <div class="order-detail-content">
        {(getSelectedAddress || storeAddressObj.name.length !== 0) && (
          <Fragment>
            <h3 class="sip-add">Shipping Address</h3>
            <div class="shaping-address-saveing-row">
              <div class="shapping-address-inner-content">
                <div class="location-ad-icon">
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                </div>
                <div class="saving-address-content">
                  <small>
                    {getSelectedAddress
                      ? getSelectedAddress.name
                      : storeAddressObj.name}
                  </small>
                  <small>
                    {getSelectedAddress
                      ? getSelectedAddress.mobile
                      : storeAddressObj.mobile}
                  </small>
                  <span>
                    <aside>
                      {getSelectedAddress
                        ? getSelectedAddress.type
                        : storeAddressObj.type}
                    </aside>
                  </span>
                  <span>
                    {getSelectedAddress
                      ? getSelectedAddress.email
                      : storeAddressObj.email}
                  </span>
                  &nbsp;
                  <span>
                    {getSelectedAddress &&
                      getSelectedAddress.division +
                        "-" +
                        getSelectedAddress.district +
                        "-" +
                        getSelectedAddress.area +
                        "-" +
                        getSelectedAddress.address}
                  </span>
                  <span>
                    {!getSelectedAddress &&
                      storeAddressObj.division +
                        "-" +
                        storeAddressObj.district +
                        "-" +
                        storeAddressObj.area +
                        "-" +
                        storeAddressObj.address}
                  </span>
                </div>
              </div>
              <div class="saving-ad-btn" onClick={AddressActiveHandler}>
                <button>Change</button>
              </div>
            </div>
          </Fragment>
        )}
        <table class="table table-bordered table-responsive cart_summary">
          <tbody>
            <tr>
              <td colspan="3">Amount (tax incl.)</td>
              <td colspan="2">{getStoreCartCtx.TotalAmmount.toFixed(2)}</td>
            </tr>
            <tr>
              <td colspan="3">Special Discount</td>
              <td colspan="2">0</td>
            </tr>
            <tr>
              <td colspan="3">Cupon Discount</td>
              <td colspan="2">0</td>
            </tr>
            <tr>
              <td colspan="3">Delivery Charge</td>
              <td colspan="2">80</td>
            </tr>
            <tr>
              <td colspan="3">
                <strong>Total Amount </strong>
              </td>
              <td colspan="2">
                <strong>
                  {(getStoreCartCtx.TotalAmmount + 80).toFixed(2)}
                </strong>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="row" style={{ margin: "auto" }}>
          <div class="col-md-6 box-border">
            <label class="Method_Selector" onClick={radioButtonHandler}>
              <input type="radio" name="radio_4" id="radio_button_5" style={{width:"auto" , display:"inline"}}/>
              Cash on Delivery
            </label>
          </div>
          <div class="col-md-6 box-border">
            <label class="Method_Selector" onClick={radioButtonHandler}>
              <input type="radio" name="radio_4" id="radio_button_6" style={{width:"auto" , display:"inline"}} />
              Onlie Payments
            </label>
          </div>
          <div class="col-md-12">
            <p class="OrderNotice" style={{ marginTop: "1%" }}>
              *** Please pay first for outside Dhaka delivery (ঢাকার বাইরে
              অর্ডারের ক্ষেত্রে ক্যাশ অন ডেলিভারি প্রযোজ্য নয়)
            </p>
            <p class="OrderNotice">
              *** Please pay the delivery charge first for inside Dhaka delivery
              (Cash on Delivery) (ঢাকার ভিতর ক্যাশ অন ডেলিভারি এর ক্ষেত্রে
              ডেলিভারি চার্জ আগে প্রদান করতে হবে)
            </p>
            <p class="OrderNotice">
              *** LP agent will call you for delivery charge and reconfirm your
              order (আপনার অর্ডার পুনরায় নিশ্চিত করতে লাজ ফার্মা থেকে আপনার সাথে
              যোগাযোগ করা হবে)
            </p>
          </div>
          <div class="cart_navigation">
            <Link class="prev-btn" to={urlHomeRoute()}>
              Continue shopping
            </Link>
            <a href class="next-btn" onClick={proceedOrderHandler}>
              Order Now
            </a>
          </div>
        </div>
      </div>
      {PopUpAlert && (
        <AlertPopUp alertStateChangedHandler={alertStateChangedHandler} />
      )}
    </div>
  );
};

export default Payment;
