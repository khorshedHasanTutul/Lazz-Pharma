import React, { useContext, useEffect, useRef, useState } from "react";
import { storeAddressObj } from "../../Service/AddressService";
import addressContext from "../../store/address-context";
import cartContext from "../../store/cart-context";
import Address from "../Checkout/Address";
import CheckoutHeader from "../Checkout/CheckoutHeader";
import Payment from "../Checkout/Payment";
import ProductSummary from "../Checkout/ProductSummary";

const Checkout = () => {
  const ctxCart = useContext(cartContext);
  const ctxAddress = useContext(addressContext);
  // const [alert, setAlert] = useState(false);
  // const [qtyAlert, setQtyAlert] = useState(false);
  const getStoreCtxAddress = ctxAddress.getStoreAddressCtx;
  const getActiveTypeAddress = ctxAddress.getActiveType;
  const findActiveAddress = getStoreCtxAddress.find(
    (item) => item.type === getActiveTypeAddress
  );
  const ProSummaryRef = useRef(null);
  const [isActiveProductSummary, setActiveProductSummary] = useState(true);
  const [isActiveAddress, setActiveAddress] = useState(false);
  const [isActivePayment, setActivePayment] = useState(false);

  const SummaryActiveHandler = () => {
    setActiveProductSummary(true);
    setActiveAddress(false);
    setActivePayment(false);
  };

  const AddressActiveHandler = () => {
    setActiveProductSummary(false);
    setActiveAddress(true);
    setActivePayment(false);
  };

  const paymentActiveHandler = () => {
    if (okToProceed()) {
      setActiveProductSummary(false);
      setActiveAddress(false);
      setActivePayment(true);
    } else {
      // setAlert(true);
        alert("Please Enter Valid Address!");
    }
  };

  const okToProceed = () => {
    if (
      (getStoreCtxAddress.length > 0 && findActiveAddress) ||
      (storeAddressObj.name.length > 0 &&
        storeAddressObj.mobile.length > 0 &&
        storeAddressObj.division.length > 0 &&
        storeAddressObj.district.length > 0 &&
        storeAddressObj.area.length > 0 &&
        storeAddressObj.address.length > 0)
    )
      return true;
    else return false;
  };

  const proceedToAddressHandler = () => {
    if (getStoreCtxAddress.length > 0 && findActiveAddress) {
      paymentActiveHandler();
    } else AddressActiveHandler();
  };

  const ProceedToOrderHandler = () => {
    if (okToProceed()) {
      paymentActiveHandler();
    } else {
      // setAlert(true);
        alert("Please Enter Valid Address!");
    }
  };

  useEffect(() => {
    if (isActiveProductSummary) {
      ProSummaryRef.current.classList.add("current-step");
    } else {
      ProSummaryRef.current.classList.remove("current-step");
    }
    if (isActiveAddress) {
      ProSummaryRef.current.nextElementSibling.classList.add("current-step");
    } else {
      ProSummaryRef.current.nextElementSibling.classList.remove("current-step");
    }
    if (isActivePayment) {
      ProSummaryRef.current.parentNode.childNodes[2].classList.add(
        "current-step"
      );
    } else {
      ProSummaryRef.current.parentNode.childNodes[2].classList.remove(
        "current-step"
      );
    }
  }, [isActiveProductSummary, isActiveAddress, isActivePayment]);

  return (
    <div id="body_parent">
      <div id="body_content">
        <div class="columns-container">
          <div id="columns" class="container">
            <CheckoutHeader />
            <h2 class="page-heading">
              <span class="page-heading-title2">Checkout</span>
            </h2>

            <div class="page-content page-order">
              <ul class="step">
                <li
                  class="checkoutPage current-step"
                  ref={ProSummaryRef}
                  onClick={SummaryActiveHandler}
                >
                  <span>01. Summary</span>
                </li>
                <li class="checkoutPage" onClick={AddressActiveHandler}>
                  <span>02. Address</span>
                </li>
                <li class="checkoutPage" onClick={paymentActiveHandler}>
                  <span>03. Payment</span>
                </li>
              </ul>

              {isActiveProductSummary && (
                <ProductSummary
                  AddressActiveHandler={AddressActiveHandler}
                  proceedToAddressHandler={proceedToAddressHandler}
                />
              )}
              {isActiveAddress && <Address ProceedToOrderHandler={ProceedToOrderHandler}/>}
              {isActivePayment && <Payment AddressActiveHandler={AddressActiveHandler}/>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
