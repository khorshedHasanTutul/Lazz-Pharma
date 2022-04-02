import React from "react";
import { Link } from "react-router-dom";
import { urlHomeRoute } from "../../Service/UrlService";

const Address = ({ ProceedToOrderHandler }) => {
  return (
    <div class="tab_content">
      <div class="heading-counter warning">
        Your shopping cart contains:
        <span> 2 Product</span>
      </div>
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
                    <div class="custom-input">
                      <label for="name">Name</label>
                      <input type="text" name="" id="name" required="" />
                      <div class="alert alert-error">Name is required.</div>
                    </div>
                    <div class="custom-input">
                      <label for="mobile">Mobile</label>
                      <input type="text" name="" id="mobile" required="" />
                      <div class="alert alert-error">Mobile is required.</div>
                    </div>
                    <div class="custom-input">
                      <label for="email">Email</label>
                      <input type="text" name="" id="email" required="" />
                      <div class="alert alert-error">Email is required.</div>
                    </div>
                    <div class="address-inner-select-item">
                      <div class="custom-input">
                        <label for="district">Select District</label>
                        <select id="district">
                          <option value="">Dhake</option>
                          <option value="">Rangpur</option>
                          <option value="">Dinajpur</option>
                        </select>
                      </div>
                      <div class="custom-input">
                        <label for="district">Select Division</label>
                        <select id="district">
                          <option value="">Dhake</option>
                          <option value="">Rangpur</option>
                          <option value="">Dinajpur</option>
                        </select>
                      </div>
                      <div class="custom-input">
                        <label for="district">Select Area</label>
                        <select id="district">
                          <option value="">Dhake</option>
                          <option value="">Rangpur</option>
                          <option value="">Dinajpur</option>
                        </select>
                      </div>
                    </div>
                    <div class="address-textarea">
                      <label for="message">Address</label>
                      <textarea
                        class="effect2"
                        name=""
                        id="message"
                        required=""
                      ></textarea>
                    </div>
                    <div class="all-address-save-btn">
                      <div class="chosse-your-fvt-btn">
                        <ul>
                          <li class="active">
                            <a href>Home</a>
                          </li>
                          <li>
                            <a href>Office</a>
                          </li>
                          <li>
                            <a href>Home Town</a>
                          </li>
                          <li class="default-set">
                            <a href>Save Address</a>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- <div class="chosse-another-address">
                                                               <a href>Save Address</a>
                                                           </div> --> */}
                    </div>
                  </div>
                </form>
              </div>

              <div class="address-info-right-default">
                <h3>Saved Addresses</h3>
                <h2>Select Your Shipping Address</h2>
                {/* <!-- single item --> */}
                <div class="address-home-default-single">
                  <h3>Home</h3>
                  <p>Jak ma (01792855468)</p>
                  <p>Mirpur 12,Dhaka City,Dhaka</p>
                  <p>House 1005,Road 12,Avenue 3,Mirpur DOSH</p>
                </div>
                {/* <!-- single item --> */}
                <div class="address-home-default-single">
                  <h3>Office</h3>
                  <p>No Address Saved In Office Slot</p>
                </div>
                {/* <!-- single item --> */}
                <div class="address-home-default-single active">
                  <div class="selected-address">
                    <p>
                      <i class="fa fa-check" aria-hidden="true"></i>Selected
                    </p>
                  </div>
                  <h3>Home Town</h3>
                  <p>Jak ma (01792855468)</p>
                  <p>Mirpur 12,Dhaka City,Dhaka</p>
                  <p>House 1005,Road 12,Avenue 3,Mirpur DOSH</p>
                </div>
              </div>
            </div>
          </div>
          <div class="cart_navigation">
            <Link class="prev-btn" to={urlHomeRoute()}>
              Continue shopping
            </Link>
            <a class="next-btn" href onClick={ProceedToOrderHandler}>
              Proceed to Order
            </a>
          </div>
        </div>
        {/* <!-- product desc review information  --> */}
      </div>
    </div>
  );
};

export default Address;
