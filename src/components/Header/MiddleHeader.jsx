import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { urlHomeRoute, urlRequestOrderRoute } from "../../Service/UrlService";
import AuthenticationModalBody from "../Authentication/AuthenticationModalBody";
import LoginModal from "../Authentication/LoginModal";

const MiddleHeader = () => {
  const ref = useRef(null);
  const [loginPopUp, setLoginPopUp] = useState(false);
  const userHandler = () => {
    setLoginPopUp(true);
  };
  const closeAuthModalHandler = () => {
    setLoginPopUp((prevState) => !prevState);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 25) {
        ref.current.classList.add("position-fixed-to-top");
      } else {
        ref.current.classList.remove("position-fixed-to-top");
      }
    });
  }, []);

  return (
    <div class="container-fluid main-header" ref={ref}>
      <div class="row custom-row">
        <nav className="nav-mid">
          <div class="col-xs-12 col-sm-4 col-lg-3 logo">
            <Link to={urlHomeRoute()}>
              <img
                alt="Lazz Pharma Limited"
                src="/Contents/assets/image/logo.png"
              />
            </Link>
          </div>

          <div className="mobile-nav-links">
            <ul className="d-flex">
              <li>
                <a href title="Login" onClick={userHandler}>
                  <i class="fa fa-user-o" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href title="Notification">
                  <i class="fa fa-bell-o" aria-hidden="true"></i>
                </a>
              </li>
              {/* <li>
                <a href="tel:01704247162" title="Call to Order">
                  <i class="fa fa-volume-control-phone" aria-hidden="true"></i>
                </a>
              </li> */}
            </ul>
          </div>
        </nav>

        <div class="col-xs-7 col-sm-4 col-lg-6 header-search-box">
          <form class="form-inline">
            <div class="form-group input-serach">
              <input
                id="txt_product_search"
                autocomplete="off"
                type="text"
                placeholder="Search by Trade or Generic Name..."
                style={{ fontSize: "16px" }}
              />
            </div>
            <button type="button" class="pull-right btn-search">
              <i class="fa fa-search"></i>
            </button>
            <table
              cellspacing="0"
              class="table table-bordered table-striped SearchTable"
            >
              <tbody style={{ fontSize: "0.7em", display: "none" }}></tbody>
            </table>
          </form>
        </div>

        <div class="col-sm-3 col-lg-2">
          <div class="info-content">
            <ul>
              <li>
                <Link to={urlRequestOrderRoute()}>
                  {/* <i class="fa fa-file-text-o" aria-hidden="true"></i> */}
                  <img
                    src="./Contents/assets/image/prescription.png"
                    alt=""
                    srcset=""
                  />
                  <span title="Just upload prescription to place an order">
                    Upload Prescription
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="nav-mobile-buttons prescription-order">
          <div class="info-content">
            <ul>
              <li>
                <a href>
                  <i class="fa fa-file-text-o" aria-hidden="true"></i>
                  <span>Upload Prescription</span>
                </a>
              </li>
              <li>
                <a href>
                  <i class="fa fa-volume-control-phone" aria-hidden="true"></i>{" "}
                  <span>Call For Order</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <ul class="d-flex dekstop">
          <li>
            <a href title="Login" onClick={userHandler}>
              <i class="fa fa-user-o" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href title="Notification">
              <i class="fa fa-bell-o" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="tel:01704247162" title="Call to Order">
              <i class="fa fa-volume-control-phone" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
      {loginPopUp && (
        <AuthenticationModalBody
          Template={LoginModal}
          closeModal={closeAuthModalHandler}
        />
      )}
    </div>
  );
};

export default MiddleHeader;
