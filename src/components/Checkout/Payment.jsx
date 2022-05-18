import React, { Fragment, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { COUPON_CHECK, CREATE_ORDER } from "../../lib/endpoints";
import { storeAddressObj } from "../../Service/AddressService";
import { http } from "../../Service/httpService";
import { urlHomeRoute } from "../../Service/UrlService";
import addressContext from "../../store/address-context";
import cartContext from "../../store/cart-context";
import AlertPopUp from "./OrderAlert/AlertPopUp";

const Payment = ({ AddressActiveHandler, addresses }) => {
  const [PopUpAlert, setPopUpAlert] = useState(false);
  const ctxAddress = useContext(addressContext);
  const ctxCart = useContext(cartContext);
  const [order, setOrder] = useState("");

  const [coupon, setCoupon] = useState("");
  const [couponClicked, setCouponClicked] = useState(false);
  const [couponIsTouched, setcouponIsTouched] = useState(false);
  const [couponIsValid, setCouponIsValid] = useState(false);
  const [failedCoupon, setFailedCoupon] = useState(false);
  const [discounted, setDiscounted] = useState({ Id: "", Data: 0 });
  const [successedDiscount, setSuccessedDiscount] = useState(false);

  const [delivaryCharge, setDelivaryCharge] = useState("");
  const [clickedRadio, setClickedRadio] = useState(false);

  const getStoreCartCtx = ctxCart.getCartModel;
  const getActiveAddressType = ctxAddress.getActiveType;
  const getSelectedAddress = addresses.find(
    (item) => item.Type === getActiveAddressType.type
  );
  // Creating variable to store the sum
  let sum = 0;
  // Running the for loop
  for (let i = 0; i < getStoreCartCtx.Items.length; i++) {
    sum += getStoreCartCtx.Items[i].quantity;
  }
  let products = [];
  getStoreCartCtx.Items.map(function (element) {
    return products.push({ ProductId: element.id, Quantity: element.quantity });
  });

  console.log({ getSelectedAddress });
  const radioButtonHandler = () => {
    setClickedRadio(true);
  };
  const alertStateChangedHandler = () => {
    setPopUpAlert((prevState) => !prevState);
  };
  const couponSubmitHandler = (evt) => {
    evt.preventDefault();
    setCouponClicked(true);
    if (coupon.length !== 0) {
      http.post({
        url: COUPON_CHECK,
        payload: {
          CouponCode: coupon,
          OrderAmount: getStoreCartCtx.TotalAmmount,
          OrderDiscount: 0,
          ActivityId: "00000000-0000-0000-0000-000000000000",
        },
        before: () => {},
        successed: (res) => {
          setDiscounted(res);
          setFailedCoupon(false);
          setSuccessedDiscount(true);
        },
        failed: () => {
          setFailedCoupon(true);
          setSuccessedDiscount(false);
        },
        always: () => {},
      });
    }
  };
  const couponChangeHandler = ({ target }) => {
    setCoupon(target.value);
    setFailedCoupon(false);
  };
  const couponTouchedHandler = () => {
    setcouponIsTouched(true);
  };
  console.log({ discounted });
  const proceedOrderHandler = () => {
    if (clickedRadio) {
      //create Order
      http.post({
        url: CREATE_ORDER,
        payload: {
          TotalItem: getStoreCartCtx.TotalItem,
          TotalQuantity: sum,
          TotalAmount: getStoreCartCtx.TotalAmmount,
          ShippingCharge: delivaryCharge,
          PayableAmount:
            getStoreCartCtx.TotalAmmount + delivaryCharge - discounted.Data,
          From: "Cart Order",
          DistrictId: getSelectedAddress.DistrictId,
          AddressId: getSelectedAddress.Id,
          Items: products,
          ActivityId: "00000000-0000-0000-0000-000000000000",
          Remarks: getSelectedAddress.Remarks,
          autoOrderIsActive: false,
          // CoupenAmount: discounted.Data,
          // CouponId: discounted.Id,
          ImgId: [],
          Cashback: 0,
          fineCash: 0,
        },
        before: () => {},
        successed: (res) => {
          console.log(res);
          setOrder(res.Data);
          setPopUpAlert(true);
          ctxCart.clearCart();
        },
        failed: () => {},
        always: () => {},
      });
    } else {
      // alertPaymentRadioStateChangeHandler();
      alert("Please Select a payment method");
    }
  };

  useEffect(() => {
    if (couponClicked) {
      if (
        (couponIsTouched && coupon.length === 0) ||
        (!couponIsTouched && coupon.length === 0)
      ) {
        setCouponIsValid(true);
      } else setCouponIsValid(false);
    }
  }, [couponClicked, couponIsTouched, coupon.length]);
  useEffect(() => {
    if (getStoreCartCtx.TotalAmmount >= getSelectedAddress.MaxAmount) {
      setDelivaryCharge(getSelectedAddress.MinChargeAmount);
    } else {
      setDelivaryCharge(getSelectedAddress.ChargeAmount);
    }
  }, [
    getSelectedAddress.ChargeAmount,
    getStoreCartCtx.TotalAmmount,
    getSelectedAddress.MaxAmount,
    getSelectedAddress.MinChargeAmount,
  ]);
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
            onChange={couponChangeHandler}
            onBlur={couponTouchedHandler}
          />
          <button type="submit" onClick={couponSubmitHandler}>
            Apply
          </button>
        </form>
      </div>
      {!failedCoupon && successedDiscount && (
        <div class="alert alert-success" style={{ display: "inline-block" }}>
          You will receive {discounted.Data} tk Discount.
        </div>
      )}
      {failedCoupon && <div class="alert alert-error">Invalid Coupon.</div>}
      {couponIsValid && <div class="alert alert-error">Coupon is Empty.</div>}
      {couponIsTouched && coupon.length === 0 && !couponIsValid && (
        <div class="alert alert-error">Coupon is Empty.</div>
      )}
      <div class="order-detail-content">
        {(getSelectedAddress !== undefined ||
          storeAddressObj.name.length !== 0) && (
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
                      ? getSelectedAddress.Name
                      : storeAddressObj.name}
                  </small>
                  <small>
                    {getSelectedAddress
                      ? getSelectedAddress.Mobile
                      : storeAddressObj.mobile}
                  </small>
                  <span>
                    <aside>
                      {getSelectedAddress
                        ? getSelectedAddress.Type
                        : storeAddressObj.type}
                    </aside>
                  </span>
                  <span>
                    {getSelectedAddress
                      ? getSelectedAddress.Email
                      : storeAddressObj.email}
                  </span>
                  &nbsp;
                  <span>
                    {getSelectedAddress !== undefined &&
                      getSelectedAddress.Province +
                        "-" +
                        getSelectedAddress.District +
                        "-" +
                        getSelectedAddress.Upazila +
                        "-" +
                        getSelectedAddress.Remarks}
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
              <td colspan="2">{getStoreCartCtx.TotalAmmount.toFixed(2)} tk</td>
            </tr>
            <tr>
              <td colspan="3">Special Discount</td>
              <td colspan="2">0</td>
            </tr>
            <tr>
              <td colspan="3">Cupon Discount</td>
              <td colspan="2">{discounted.Data ? discounted.Data : 0} tk</td>
            </tr>
            <tr>
              <td colspan="3">Delivery Charge</td>
              <td colspan="2">{delivaryCharge} tk</td>
            </tr>
            <tr>
              <td colspan="3">
                <strong>Total Amount </strong>
              </td>
              <td colspan="2">
                <strong>
                  {(
                    getStoreCartCtx.TotalAmmount +
                    delivaryCharge -
                    discounted.Data
                  ).toFixed(2)}{" "}
                  tk
                </strong>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="row" style={{ margin: "auto" }}>
          <div class="col-md-6 box-border">
            <label class="Method_Selector" onClick={radioButtonHandler}>
              <input
                type="radio"
                name="radio_4"
                id="radio_button_5"
                style={{
                  width: "auto",
                  display: "inline",
                  position: "absolute",
                  top: "-2px",
                  left: "0px",
                  outline: "0px",
                }}
              />
              Cash on Delivery
            </label>
          </div>
          <div class="col-md-6 box-border">
            <label class="Method_Selector" onClick={radioButtonHandler}>
              <input
                type="radio"
                name="radio_4"
                id="radio_button_6"
                style={{
                  width: "auto",
                  display: "inline",
                  position: "absolute",
                  top: "-2px",
                  left: "0px",
                  outline: "0px",
                }}
              />
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
        <AlertPopUp
          alertStateChangedHandler={alertStateChangedHandler}
          order={order}
          mobile={getSelectedAddress?.Mobile}
        />
      )}
    </div>
  );
};

export default Payment;
