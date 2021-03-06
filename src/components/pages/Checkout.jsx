import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { GET_SAVED_ADDRESS } from "../../lib/endpoints";
import { storeAddressObj } from "../../Service/AddressService";
import { http } from "../../Service/httpService";
import addressContext from "../../store/address-context";
import authContext from "../../store/auth-context";
import Address from "../Checkout/Address";
import CheckoutHeader from "../Checkout/CheckoutHeader";
import Payment from "../Checkout/Payment";
import ProductSummary from "../Checkout/ProductSummary";

const Checkout = () => {
  const authCtx = useContext(authContext);
  const ctxAddress = useContext(addressContext);
  const getActiveTypeAddress = ctxAddress.getActiveType;
  //store addresses from database state
  const [addresses, setAddresses] = useState([]);
  const findActiveAddress = addresses?.find(
    (item) => item.Type === getActiveTypeAddress.type
  );
  const [prescriptionsHis, setPrescriptionsHis] = useState({
    id: [],
    check: false,
  });
  const ProSummaryRef = useRef(null);
  const [isActiveProductSummary, setActiveProductSummary] = useState(true);
  const [isActiveAddress, setActiveAddress] = useState(false);
  const [isActivePayment, setActivePayment] = useState(false);

  console.log({ findActiveAddress });

  const SummaryActiveHandler = () => {
    setActiveProductSummary(true);
    setActiveAddress(false);
    setActivePayment(false);
    getAddressHttp();
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

  //check whether to go to payment model or not
  const okToProceed = () => {
    if (findActiveAddress === undefined || findActiveAddress?.Name === null) {
      return false;
    }
    return true;
  };

  const proceedToAddressHandler = () => {
    if (findActiveAddress !== undefined) {
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
  console.log({ addresses });

  const getAddressHttp = useCallback(() => {
    http.post({
      url: GET_SAVED_ADDRESS,
      payload: {
        PageNumber: 1,
        PageSize: 3,
        filter: [
          {
            field: "CustomerId",
            value: authCtx.user.id,
            Operation: 0,
          },
        ],
      },
      before: () => {
        // setIsLoading(true);
      },
      successed: (res) => {
        console.log({ res });
        setAddresses(res.Data.Data);
      },
      failed: () => {},
      always: () => {
        // setIsLoading(false);
      },
    });
  }, [authCtx.user.id]);

  useEffect(() => {
    getAddressHttp();
  }, [getAddressHttp]);

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
                  addresses={addresses}
                  setPrescriptionsHis={setPrescriptionsHis}
                />
              )}
              {isActiveAddress && (
                <Address ProceedToOrderHandler={ProceedToOrderHandler} getAddressHttpCheckout={getAddressHttp} />
              )}
              {isActivePayment && (
                <Payment
                  AddressActiveHandler={AddressActiveHandler}
                  addresses={addresses}
                  prescriptionsHis={prescriptionsHis}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
