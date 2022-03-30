import React from "react";
import { Link } from "react-router-dom";
import {
  urlContactRoute,
  urlPrivacyPolicy,
  urlReturnPolicy,
  urlTermsConditionRoute,
} from "../../Service/UrlService";

const FooterParent = () => {
  return (
    <footer id="footer" style={{ marginTop: "60px", paddingTop: "50px" }}>
      <div class="container-fluid">
        {/* <!-- introduce-box --> */}
        <div id="introduce-box" class="row">
          <div class="col-md-4 col-sm-6">
            <div id="address-box">
              <a href="https://www.lazzpharma.com/#">
                <img src="/Contents/assets/image/logo.png" alt="logo" />
              </a>
              <div id="address-list">
                <div class="tit-name">Address:</div>
                <div class="tit-contain">
                  Lazz Center, 63/C, Lake Circus, Kalabagan, West Panthapath,
                  Dhaka.
                </div>
                <div class="tit-name">Mobile:</div>
                <div class="tit-contain">
                  <a href="tel:+880258155933">+880258155933,</a>
                  <a href="tel:+8801319864049">+8801319864049</a>
                </div>
                <div class="tit-name">Email:</div>
                <div class="tit-contain">
                  <a class="new-phon" href="mailto:lazzcorporate@gmail.com">
                    lazzcorporate@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-5">
            <div class="row custom-bonik">
              <div class="col-sm-6">
                <div class="introduce-title">For Customer</div>
                <ul id="introduce-company" class="introduce-list">
                  <li>
                    <i class="fa fa-angle-double-right"></i>
                    <a
                      href="https://www.lazzpharma.com/RequestOrder"
                      style={{ color: "white" }}
                    >
                      Request Order
                    </a>
                  </li>
                  <li>
                    <i class="fa fa-angle-double-right"></i>
                    <a
                      href="https://www.lazzpharma.com/OrderUs"
                      style={{ color: "white" }}
                    >
                      Urgent Order
                    </a>
                  </li>
                  <li>
                    <i class="fa fa-angle-double-right"></i>
                    <a
                      href="https://www.lazzpharma.com/FindStore"
                      style={{ color: "white" }}
                    >
                      Find Store
                    </a>
                  </li>
                  <li>
                    <i class="fa fa-angle-double-right"></i>
                    <a
                      href="https://www.lazzpharma.com/HowToOrder"
                      style={{ color: "white" }}
                    >
                      How to Order
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-sm-6">
                <div class="introduce-title">Support</div>
                <ul id="introduce-support" class="introduce-list">
                  <li>
                    <i class="fa fa-angle-double-right"></i>
                    <Link to={urlContactRoute()} style={{ color: "white" }}>
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <i class="fa fa-angle-double-right"></i>
                    <Link to={urlReturnPolicy()} style={{ color: "white" }}>
                      Return Policy
                    </Link>
                  </li>
                  <li>
                    <i class="fa fa-angle-double-right"></i>
                    <Link
                      to={urlTermsConditionRoute()}
                      style={{ color: "white" }}
                    >
                      Terms &amp; Conditions
                    </Link>
                  </li>
                  <li>
                    <i class="fa fa-angle-double-right"></i>
                    <Link to={urlPrivacyPolicy()} style={{ color: "white" }}>
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div id="contact-box">
              <div class="introduce-title">Let's Socialize</div>
              <div class="social-link">
                <a href="https://www.facebook.com/lazzpharma">
                  <i class="fa fa-facebook"></i>
                </a>
                <a href="https://www.facebook.com/lazzpharma">
                  <i class="fa fa-twitter"></i>
                </a>
                <a href="https://www.facebook.com/lazzpharma">
                  <i class="fa fa-google-plus"></i>
                </a>
              </div>
            </div>
            <div class="develop_by">
              <li id="payment-methods">Accepted Payment Methods</li>
              <li>
                <a href="https://www.lazzpharma.com/#">
                  <img src="./Lazz Pharma Limited_files/card4.png" alt="Lazz" />
                </a>
              </li>

              <li>
                <a href="https://www.lazzpharma.com/#">
                  <img src="./Lazz Pharma Limited_files/card6.png" alt="Lazz" />
                </a>
              </li>
              <li>
                <a href="https://www.lazzpharma.com/#">
                  <img src="./Lazz Pharma Limited_files/card7.png" alt="Lazz" />
                </a>
              </li>
            </div>
          </div>
          {/* <!-- /#introduce-box --> */}
          <div id="trademark-box" class="row new-footer-bottom">
            <div class="col-sm-12" align="center">
              <ul id="trademark-list">
                <div class="introduce-title">
                  <b class="new-int-title">
                    Pharmacy Software &amp; Website Developed By -
                  </b>
                </div>
                <div class="dev_com">
                  <a href="http://iqrasys.com/" target="_blank">
                    Iqrasys solutions Limited{" "}
                  </a>
                  <a href="tel:01778772327">(Mob: 01778-772327)</a>
                </div>
              </ul>
            </div>
          </div>
          {/* <!-- /#trademark-box --> */}
        </div>
      </div>
    </footer>
  );
};

export default FooterParent;
