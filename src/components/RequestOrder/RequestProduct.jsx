import React from "react";
import { Link } from "react-router-dom";
import { urlTermsConditionRoute } from "../../Service/UrlService";

const RequestProduct = () => {
  return (
    <div class="request_product">
      <div class="notice">
        <h4 class="SearchFont SearchPrice">
          Note: Product availability &amp; price will be confirmed over
          Phone/E-mail/Whatsapp.
          <br />
          Delivery Charge within Dhaka City 80TK &amp; outside Dhaka 120TK.
        </h4>
      </div>
      <div class="empty_style row" style={{ marginTop: "20px" }}>
        <div class="col-md-3">
          <input class="form-control" placeholder="Ex. Napa Tab." type="text" />
        </div>
        <div class="col-md-3">
          <input class="form-control" placeholder="Ex. 500 mg" type="text" />
        </div>
        <div class="col-md-3">
          <input
            class="form-control"
            placeholder="Quantity In Pcs"
            type="text"
          />
        </div>
        <div class="col-md-3">
          <button
            class="btn btn_cancel btn-success btn-default btn-round"
            style={{ width: "100%" }}
            type="button"
          >
            <span>Add Product</span>
          </button>
        </div>
      </div>
      <div class="grid_container" style={{ margin: "15px" }}>
        <div class="i-grid-container">
          <div class="grid_column_selector_container">
            {/* <div class="btn_selector_open">
              <span class="glyphicon glyphicon-chevron-up"></span>
            </div> */}
            <div class="selector_content_container">
              <label class="lbl_selector">
                <input
                  type="checkbox"
                  data-binding="selected"
                  data-type="string"
                  checked="checked"
                />
                Name{" "}
              </label>
              <label class="lbl_selector">
                <input
                  type="checkbox"
                  data-binding="selected"
                  data-type="string"
                  checked="checked"
                />
                Strength{" "}
              </label>
              <label class="lbl_selector">
                <input
                  type="checkbox"
                  data-binding="selected"
                  data-type="string"
                  checked="checked"
                />
                Quantity{" "}
              </label>
              <label class="lbl_selector">
                <input
                  type="checkbox"
                  data-binding="selected"
                  data-type="string"
                  checked="checked"
                />
                Actions
              </label>
            </div>
          </div>
          <div class="i-grid i-widget">
            <div class="i-grid-header_container">
              <div class="i-grid-header" style={{ paddingRight: "17px" }}>
                <div class="i-grid-header-wrap">
                  <table>
                    <colgroup>
                      <col />
                      <col />
                      <col />
                      <col class="actions" />
                    </colgroup>
                    <thead>
                      <tr>
                        <th
                          rowspan="1"
                          scope="col"
                          class="i-header table_header sorting undefined"
                        >
                          <div
                            style={{ position: "relative" }}
                            class="header_container"
                          >
                            <a href>Name</a>
                            <span class="icon_container"></span>
                            <div class="resizer"></div>
                          </div>
                        </th>
                        <th
                          rowspan="1"
                          scope="col"
                          class="i-header table_header sorting undefined"
                        >
                          <div
                            style={{ position: "relative" }}
                            class="header_container"
                          >
                            <a href>Strength</a>
                            <span class="icon_container"></span>
                            <div class="resizer"></div>
                          </div>
                        </th>
                        <th
                          rowspan="1"
                          scope="col"
                          class="i-header table_header sorting undefined"
                        >
                          <div
                            style={{ position: "relative" }}
                            class="header_container"
                          >
                            <a href>Quantity</a>
                            <span class="icon_container"></span>
                            <div class="resizer"></div>
                          </div>
                        </th>
                        <th
                          rowspan="1"
                          scope="col"
                          class="i-header table_header sorting actions"
                        >
                          <div
                            style={{ position: "relative" }}
                            class="header_container"
                          >
                            <a href>Actions</a>
                            <span class="icon_container"></span>
                            <div class="resizer"></div>
                          </div>
                        </th>
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
            </div>
            <div class="i-grid-content">
              <table>
                <colgroup>
                  <col />
                  <col />
                  <col />
                  <col class="actions" />
                </colgroup>
                <tbody></tbody>
              </table>
            </div>
            <div class="i-pager-wrap i-grid-pager i-widget">
              <div class="pagger">
                <ul class="i-pager-numbers i-reset"></ul>
              </div>
              <span class="i-pager-sizes i-label">
                <select
                  class="form-control input-sm"
                  style={{ height: "auto", display: "inline" }}
                >
                  <option>5</option>
                  <option>10</option>
                  <option>20</option>
                  <option>50</option>
                  <option>100</option>
                  <option>200</option>
                  <option>300</option>
                  <option>400</option>
                  <option>500</option>
                  <option selected="selected">1000</option>
                </select>
              </span>
              <span class="i-pager-info i-label">
                Showing 0 to 0 of 0 items
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="empty_style row">
        <div class="col-md-4 col-sm-6">
          <div>
            <label>Your Name</label>
          </div>
          <div>
            <input class="form-control" placeholder="Your Name" type="text" />
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div>
            <label>Your E-Mail (Optional)</label>
          </div>
          <div>
            <input
              class="form-control"
              placeholder="Your E-Mail (Optional)"
              type="text"
            />
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div>
            <label>Your Number</label>
          </div>
          <div>
            <input class="form-control" placeholder="Your Number" type="text" />
          </div>
        </div>
        <div class="col-md-12 col-sm-12">
          <div>
            <label>Your Address</label>
          </div>
          <div>
            <textarea
              class="form-control"
              placeholder="Your Address"
            ></textarea>
          </div>
        </div>
        <div class="col-md-12 col-sm-12">
          <div>
            <label>Description (Optional)</label>
          </div>
          <div>
            <textarea
              class="form-control"
              placeholder="Description (Optional)"
            ></textarea>
          </div>
        </div>
      </div>
      <div class="empty_style row">
        <div class="col-md-3">
          <div>
            <button
              class="btn btn_upload"
              type="button"
              style={{ width: "100%" }}
            >
              <span class="glyphicon glyphicon-plus"> </span>
              <span> Upload Prescription Here</span>
            </button>
            <input
              id="btn_image"
              class="btn btn_upload btn-white btn-default btn-round"
              style={{
                position: "absolute",
                left: "0px",
                top: "0px",
                opacity: "0",
                padding: "3px",
              }}
              type="file"
            />
          </div>
        </div>
        <div class="col-md-9">
          <div class="img_preview row"></div>
        </div>
      </div>
      <div class="" style={{ textAlign: "center", margin: "15px" }}>
        <label>
          <input type="radio" /> I have read and agreed to the
          <Link to={urlTermsConditionRoute()}>Terms and conditions</Link>
        </label>
      </div>
      <div class="text-center formFooter FooterFormMenu">
        <button
          class="btn btn-success btn-default btn-round"
          type="button"
          style={{ marginBottom: "15px" }}
        >
          <span class="glyphicon glyphicon-upload"></span> Send
        </button>
      </div>
    </div>
  );
};

export default RequestProduct;
