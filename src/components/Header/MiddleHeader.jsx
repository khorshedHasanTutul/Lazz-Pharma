import React from "react";
import { Link } from "react-router-dom";
import { urlHomeRoute } from "../../Service/UrlService";

const MiddleHeader = () => {
  return (
    <div class="container-fluid main-header">
      <div class="row custom-row">
        <div class="col-xs-12 col-sm-4 col-lg-3 logo">
          <Link to={urlHomeRoute()}>
            <img
              alt="Lazz Pharma Limited"
              src="/Contents/assets/image/logo.png"
            />
          </Link>
        </div>
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
        <div class="col-sm-4 col-lg-3">
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
      </div>
    </div>
  );
};

export default MiddleHeader;
