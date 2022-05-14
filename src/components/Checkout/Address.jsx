import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { storeAddressObj } from "../../Service/AddressService";
import { urlCheckoutRoute, urlHomeRoute } from "../../Service/UrlService";
import addressContext from "../../store/address-context";
import cartContext from "../../store/cart-context";
import AddressList from "./AddressList";
import AddressValidation from "./AddressValidation/AddressValidation";
import AreaValidation from "./AddressValidation/AreaValidation";
import DistrictValidation from "./AddressValidation/DistrictValidation";
import Divisionvalidation from "./AddressValidation/DivisionValidation";
import EmailValidation from "./AddressValidation/EmailValidation";
import MobileValidation from "./AddressValidation/MobileValidation";
import NameValidation from "./AddressValidation/NameValidation";
import BottomActiveAddress from "./BottomActiveAddress";

const Address = ({ ProceedToOrderHandler }) => {
  const { pathname } = useLocation();
  const ctxCart = useContext(cartContext);
  const ctxCartModal = ctxCart.getCartModel;
  const ctxAddress = useContext(addressContext);
  const [clicked, setClicked] = useState(false);
  let addressObj = Object.assign({}, storeAddressObj);

  const saveAddresshandler = () => {
    addressObj = Object.assign({}, storeAddressObj);
    setClicked(true);
    if (
      addressObj.name.length !== 0 &&
      addressObj.mobile.length !== 0 &&
      addressObj.division.length !== 0 &&
      addressObj.district.length !== 0 &&
      addressObj.area.length !== 0 &&
      addressObj.address.length !== 0
    ) {
      ctxAddress.storeAddressCtx(addressObj);
    }
  };
  return (
    <div class="tab_content">
      {pathname === urlCheckoutRoute() && (
        <div class="heading-counter warning">
          Your shopping cart contains:
          <span> {ctxCartModal.TotalItems} Product</span>
        </div>
      )}

      <div
        id="Tab4"
        class="tabcontent tab-content checkout-main-tab-content"
        style={{ display: "block" }}
      >
        {/* <!-- product desc review information --> */}
        <div class="cart-add-tab-content">
          <div class="checkout-address-information-main">
            <div class="inner-shop-add-flex d-flexx">
              <span>Your contact information</span>
            </div>
            <div class="address-info-inner-flex">
              <div class="address-info-from">
                <form>
                  <div class="address-info-inner-content">
                    <NameValidation clicked={clicked} />
                    <MobileValidation clicked={clicked} />
                    <EmailValidation clicked={clicked} />
                    <div class="address-inner-select-item">
                      <Divisionvalidation clicked={clicked} />
                      <DistrictValidation clicked={clicked} />
                      <AreaValidation clicked={clicked} />
                    </div>
                    <AddressValidation clicked={clicked} />
                    <BottomActiveAddress
                      saveAddresshandler={saveAddresshandler}
                    />
                  </div>
                </form>
              </div>

              <AddressList />
            </div>
          </div>
          {pathname === urlCheckoutRoute() && (
            <div class="cart_navigation">
              <Link class="prev-btn" to={urlHomeRoute()}>
                Continue shopping
              </Link>
              <a class="next-btn" href onClick={ProceedToOrderHandler}>
                Proceed to Order
              </a>
            </div>
          )}
        </div>
        {/* <!-- product desc review information  --> */}
      </div>
    </div>
  );
};

export default Address;