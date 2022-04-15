import React from "react";
import { Link } from "react-router-dom";
import { urlTermsConditionRoute } from "../../Service/UrlService";

const RequestProduct = () => {
  return (
    <div class="request_product">
      <div class="notice">
        <h4 class="SearchFont SearchPrice">
          Note: Product availability &amp; price will be confirmed over
          Phone/E-mail/Whatsapp. Delivery Charge within Dhaka City 80TK &amp;
          outside Dhaka 120TK.
        </h4>
      </div>
      <div class="empty_style row" style={{ marginTop: "20px" }}>
        <div class="col-md-3">
          <label htmlFor="name">Name</label>
          <input class="form-control" placeholder="Ex. Napa Tab." type="text" />
        </div>
        <div class="col-md-3">
          <label htmlFor="strength">Strength</label>
          <input class="form-control" placeholder="Ex. 500 mg" type="text" />
        </div>
        <div class="col-md-3">
          <label htmlFor="quantity">Quantity</label>
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
                    <tbody>
                      <tr>
                        <td>Napa</td>
                        <td>500 gm</td>
                        <td>50 pcs</td>
                        <td>Delete</td>
                      </tr>
                      <tr>
                        <td>Napa</td>
                        <td>500 gm</td>
                        <td>50 pcs</td>
                        <td>Delete</td>
                      </tr>
                      <tr>
                        <td>Napa</td>
                        <td>500 gm</td>
                        <td>50 pcs</td>
                        <td>Delete</td>
                      </tr>
                      <tr>
                        <td>Napa</td>
                        <td>500 gm</td>
                        <td>50 pcs</td>
                        <td>Delete</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="prscription_card" style={{ boxShadow: "none" }}>
        <div className="image_preview_container">
          <div className="image_previewer">
            <div className="image_prev">
              <img
                src="/Contents/assets/image/banner2.jpg"
                alt="img"
                srcset=""
              />
              <p
                style={{
                  color: "red",
                  textAlign: "center",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                Remove
              </p>
            </div>
            <div className="image_prev">
              <img
                src="/Contents/assets/image/banner2.jpg"
                alt="img"
                srcset=""
              />
              <p
                style={{
                  color: "red",
                  textAlign: "center",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                Remove
              </p>
            </div>
            <div className="image_prev">
              <img
                src="/Contents/assets/image/banner2.jpg"
                alt="img"
                srcset=""
              />
              <p
                style={{
                  color: "red",
                  textAlign: "center",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                Remove
              </p>
            </div>
          </div>
          <div className="plus_icon_container">
            <p className="plus_icon">+</p>
          </div>
        </div>

        <div className="prescription_order_section">
          <div className="file_uploader">
            <label htmlFor="">Upload Prescription</label>
            <input type="file" name="" id="" />
          </div>
          {/* <div className="prescription_order_section__order-button">
            Save & Order
          </div> */}
        </div>
      </div>
      <div className="prescription_description">
        <label htmlFor="description">Description</label>
        <textarea name="pres_description" id="" cols="5" rows="5"></textarea>
      </div>

      <div
        class="terms-condition-checked"
        style={{ textAlign: "center", margin: "15px" }}
      >
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
          <span class=""></span> Send Product Request
        </button>
      </div>
    </div>
  );
};

export default RequestProduct;
