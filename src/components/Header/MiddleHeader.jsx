import React, { forwardRef, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  urlHomeRoute,
  urlPrescriptionHistory,
  urlProfileRoute,
  urlRequestOrderRoute,
} from "../../Service/UrlService";
import authContext from "../../store/auth-context";
import AuthenticationModalBody from "../Authentication/AuthenticationModalBody";
import LoginModal from "../Authentication/LoginModal";
import SearchProduct from "../SearchPortal/SearchProduct";

const MiddleHeader = forwardRef((props, ref) => {
  const authCtx = useContext(authContext);
  let history = useHistory();
  const [loginPopUp, setLoginPopUp] = useState(false);
  const [searchValue, setSearchValuye] = useState("");
  const [pressUploadPrescription, setPresUploadPrescription] = useState(false);

  const userHandler = () => {
    if (authCtx.isLoggedIn) {
      history.push(urlProfileRoute());
    } else {
      setLoginPopUp(true);
    }
  };

  const closeAuthModalHandler = () => {
    setLoginPopUp((prevState) => !prevState);
  };
  const textChangeHandler = ({ target }) => {
    setSearchValuye(target.value);
  };
  const closeSearchHandler = () => {
    setSearchValuye("");
  };
  const uploadPrescription = () => {
    setPresUploadPrescription(true);
    if (authCtx.isLoggedIn !== true) {
      setLoginPopUp(true);
      return;
    }
    history.push(urlProfileRoute() + urlPrescriptionHistory());
  };

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
                value={searchValue}
                onChange={textChangeHandler}
                placeholder="Search by Trade or Generic Name..."
                style={{ fontSize: "16px" }}
              />
            </div>
            <button type="button" class="pull-right btn-search">
              <i class="fa fa-search"></i>
            </button>
            {searchValue && (
              <SearchProduct
                searchValue={searchValue}
                closeSearchHandler={closeSearchHandler}
              />
            )}
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
              <li onClick={uploadPrescription}>
                <a href>
                  {/* <i class="fa fa-file-text-o" aria-hidden="true"></i> */}
                  {/* <img
                    src="./Contents/assets/image/prescription.png"
                    alt=""
                    srcset=""
                  /> */}
                  {/* <img src="/Contents/assets/image/prescription-svgrepo-com.svg" alt="prescription" srcset="" /> */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="M176 240H128v32h48C184.9 272 192 264.9 192 256S184.9 240 176 240zM256 0v128h128L256 0zM224 128L224 0H48C21.49 0 0 21.49 0 48v416C0 490.5 21.49 512 48 512h288c26.51 0 48-21.49 48-48V160h-127.1C238.3 160 224 145.7 224 128zM292.5 315.5l11.38 11.25c6.25 6.25 6.25 16.38 0 22.62l-29.88 30L304 409.4c6.25 6.25 6.25 16.38 0 22.62l-11.25 11.38c-6.25 6.25-16.5 6.25-22.75 0L240 413.3l-30 30c-6.249 6.25-16.48 6.266-22.73 .0156L176 432c-6.25-6.25-6.25-16.38 0-22.62l29.1-30.12L146.8 320H128l.0078 48.01c0 8.875-7.125 16-16 16L96 384c-8.875 0-16-7.125-16-16v-160C80 199.1 87.13 192 96 192h80c35.38 0 64 28.62 64 64c0 24.25-13.62 45-33.5 55.88L240 345.4l29.88-29.88C276.1 309.3 286.3 309.3 292.5 315.5z" />
                  </svg>
                  <span title="Just upload prescription to place an order">
                    Upload Prescription
                  </span>
                </a>
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
          <li className="notification">
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
          pressUploadPrescription={pressUploadPrescription}
        />
      )}
    </div>
  );
});

export default MiddleHeader;
