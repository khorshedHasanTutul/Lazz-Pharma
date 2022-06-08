import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { CREATE_ADDRESS, GET_SAVED_ADDRESS } from "../../lib/endpoints";
import { storeAddressObj } from "../../Service/AddressService";
import { http } from "../../Service/httpService";
import { urlCheckoutRoute, urlHomeRoute } from "../../Service/UrlService";
import addressContext from "../../store/address-context";
import authContext from "../../store/auth-context";
import cartContext from "../../store/cart-context";
import Suspense from "../Suspense/Suspense";
import AddressList from "./AddressList";
import AddressValidation from "./AddressValidation/AddressValidation";
import AreaValidation from "./AddressValidation/AreaValidation";
import DistrictValidation from "./AddressValidation/DistrictValidation";
import Divisionvalidation from "./AddressValidation/DivisionValidation";
import EmailValidation from "./AddressValidation/EmailValidation";
import MobileValidation from "./AddressValidation/MobileValidation";
import NameValidation from "./AddressValidation/NameValidation";
import BottomActiveAddress from "./BottomActiveAddress";

const Address = ({ ProceedToOrderHandler, getAddressHttpCheckout }) => {
  const authCtx = useContext(authContext);
  const { pathname } = useLocation();
  const ctxCart = useContext(cartContext);
  const ctxCartModal = ctxCart.getCartModel;
  const ctxAddress = useContext(addressContext);
  const [clicked, setClicked] = useState(false);
  let addressObj = Object.assign({}, storeAddressObj);
  //get active type
  const [activeType, setactiveType] = useState(ctxAddress.getActiveType);
  //get addresses from api set state
  const [addresses, setAddresses] = useState([]);
  //set active type of Address
  const [activeTypeAddress, setActiveTypeAddress] = useState();
  //set address after updating from database state
  const [name, setNameP] = useState("");
  const [phone, setPhoneP] = useState("");
  const [email, setEmailP] = useState("");
  const [address, setAddressP] = useState("");
  const [divisionID, setDivisionId] = useState();
  const [districtId, setDistrictId] = useState();
  const [areaId, setAreaId] = useState();
  //end
  const [isLoading, setIsLoading] = useState(true);

  const [fixDivision, setFixDivision] = useState({
    id: activeTypeAddress?.ProvinceId,
    name: activeTypeAddress?.Province,
  });
  const [fixDistrict, setFixDistrict] = useState({
    id: activeTypeAddress?.DistrictId,
    name: activeTypeAddress?.District,
  });
  const [fixArea, setFixArea] = useState({
    id: activeTypeAddress?.UpazilaId,
    name: activeTypeAddress?.Upazila,
  });

  const saveAddresshandler = () => {
    addressObj = Object.assign({}, storeAddressObj);
    setClicked(true);
    if (
      name.length > 0 &&
      phone.length > 0 &&
      divisionID &&
      districtId &&
      areaId &&
      address
    ) {
      http.post({
        url: CREATE_ADDRESS,
        payload: {
          CustomerId: authCtx.user.id,
          DistrictId: districtId,
          email: email,
          IsDefault: false,
          IsValid: true,
          mobile: phone,
          Name: name,
          ProvinceId: divisionID,
          Rank: 0,
          Remarks: address,
          Type: activeType.type,
          UpazilaId: areaId,
        },
        before: () => {},
        successed: (data) => {
          getAddressHttp();
          getAddressHttpCheckout();
        },
        failed: () => {},
        always: () => {},
      });
    }
  };
  const getDistrictHandler = (divisionId) => {
    setDivisionId(divisionId);
  };
  const getAreaHandler = (districtID) => {
    setDistrictId(districtID);
  };
  const getSelectAreaHandler = (areaID) => {
    setAreaId(areaID);
  };

  const getAddressHttp = () => {
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
        setIsLoading(true);
      },
      successed: (res) => {
        const findItem = res.Data.Data.find(
          (item) => item.Type === activeType.type
        );
        setFixDivision({ id: findItem?.ProvinceId, name: findItem?.Province });
        setFixDistrict({ id: findItem?.DistrictId, name: findItem?.District });
        setFixArea({ id: findItem?.UpazilaId, name: findItem?.Upazila });
        setAddresses(res.Data.Data);
        setActiveTypeAddress(
          res.Data.Data.find((item) => item.Type === activeType.type)
        );
        setIsLoading(false);
      },
      failed: () => {
        setIsLoading(false);
      },
      always: () => {
        setIsLoading(false);
      },
    });
  };

  useEffect(() => {
    getAddressHttp();
  }, []);

  useEffect(() => {
    if (activeType.type !== ctxAddress.getActiveType.type) {
      setactiveType(ctxAddress.getActiveType);
      const findItem = addresses.find(
        (item) => item.Type === ctxAddress.getActiveType.type
      );
      setActiveTypeAddress(
        addresses.find((item) => item.Type === ctxAddress.getActiveType.type)
      );
      setFixDivision({ id: findItem?.ProvinceId, name: findItem?.Province });
      setFixDistrict({ id: findItem?.DistrictId, name: findItem?.District });
      setFixArea({ id: findItem?.UpazilaId, name: findItem?.Upazila });
    }
  }, [activeType, ctxAddress.getActiveType, addresses]);

  return (
    <div class="tab_content">
      {pathname === urlCheckoutRoute() && (
        <div class="heading-counter warning">
          Your shopping cart contains:
          <span> {ctxCartModal.TotalItems} Product</span>
        </div>
      )}

      {!isLoading && (
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
                      <NameValidation
                        clicked={clicked}
                        setNameP={setNameP}
                        fixName={activeTypeAddress?.Name}
                      />
                      <MobileValidation
                        clicked={clicked}
                        setPhoneP={setPhoneP}
                        fixPhone={activeTypeAddress?.Mobile}
                      />
                      <EmailValidation
                        clicked={clicked}
                        setEmailP={setEmailP}
                        fixEmail={activeTypeAddress?.Email}
                      />
                      <div className="grid-3 mb-16 g-8">
                        <Divisionvalidation
                          clicked={clicked}
                          getDistrictHandler={getDistrictHandler}
                          fixDivisioned={fixDivision}
                          setFixDivisioned={setFixDivision}
                          setDivisionId={setDivisionId}
                        />
                        <DistrictValidation
                          clicked={clicked}
                          divisionID={divisionID}
                          getAreaHandler={getAreaHandler}
                          fixDistrict={fixDistrict}
                          setFixDistrict={setFixDistrict}
                          setDistrictId={setDistrictId}
                        />
                        <AreaValidation
                          clicked={clicked}
                          districtId={districtId}
                          getSelectAreaHandler={getSelectAreaHandler}
                          fixArea={fixArea}
                          setFixArea={setFixArea}
                          setAreaId={setAreaId}
                        />
                      </div>
                      <AddressValidation
                        clicked={clicked}
                        setAddressP={setAddressP}
                        activeTypeAddress={activeTypeAddress}
                        fixArea={activeTypeAddress?.Remarks}
                      />
                      <BottomActiveAddress
                        saveAddresshandler={saveAddresshandler}
                      />
                    </div>
                  </form>
                </div>

                <AddressList addresses={addresses} />
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
      )}
      {isLoading && <Suspense />}
    </div>
  );
};

export default Address;
