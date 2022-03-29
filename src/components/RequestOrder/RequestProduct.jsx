import React from "react";

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
      <div class="empty_style row">
        <div class="col-md-3 col-sm-6">
          <label class=""> Trade Name | Generic Name</label>
          <input
            class="form-control"
            placeholder="Trade Name | Generic Name"
            type="text"
          />
          <div class="search_container" style={{ position: "relative" }}>
            <table
              class="table table-bordered table-striped UrgentSearchTable"
              style={{
                position: "absolute",
                zIndex: "1",
                background: " white none repeat scroll 0% 0%",
                left: "0px",
                top: "0px",
              }}
              cellspacing="0"
            >
              <tbody style={{ display: "none" }}>
                <tr>
                  <td>
                    <span class="SearchProductName">ZYMET PRO</span>&nbsp;
                    <span class="SearchPrice">&nbsp;৳ 10.00</span>
                    <span class="SearchProps">
                      Strength - 325MG, Type - Cap
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="SearchProductName">ZYMET</span>&nbsp;
                    <span class="SearchPrice">&nbsp;৳ 3.50</span>
                    <span class="SearchProps">Strength - 0, Type - Tab</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="SearchProductName">ZYMARIN </span>&nbsp;
                    <span class="SearchPrice">&nbsp;৳ 125.00</span>
                    <span class="SearchProps">
                      Strength - 5 ML, Type - Eye Drop
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="SearchProductName">Z-YEAST</span>&nbsp;
                    <span class="SearchPrice">&nbsp;৳ 80.00</span>
                    <span class="SearchProps">
                      Strength - 50 GM, Type - FOOD
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="SearchProductName">ZYDUS</span>&nbsp;
                    <span class="SearchPrice">&nbsp;৳ 40.00</span>
                    <span class="SearchProps">
                      Strength - 400 MG, Type - Tab
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="SearchProductName">ZYCIN</span>&nbsp;
                    <span class="SearchPrice">&nbsp;৳ 185.00</span>
                    <span class="SearchProps">
                      Strength - PFS 50 ML, Type - Syrup
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="SearchProductName">ZYCIN</span>&nbsp;
                    <span class="SearchPrice">&nbsp;৳ 35.00</span>
                    <span class="SearchProps">
                      Strength - 500 MG, Type - Tab
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <div>
            <label>Quantity In Pcs</label>
          </div>
          <div>
            <input
              class="form-control"
              placeholder="Quantity In Pcs"
              type="text"
            />
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <div>
            <label>Price</label>
          </div>
          <div>
            <input
              class="form-control"
              disabled="disabled"
              placeholder="Price"
              type="text"
            />
          </div>
        </div>
        <div class="col-md-3 col-sm-6" style={{ marginTop: "36px" }}>
          <button
            class="btn btn_cancel btn-success btn-default btn-round"
            style={{ width: "100%" }}
            type="button"
          >
            <i class="fa fa-download" aria-hidden="true"></i>
            Add
          </button>
        </div>
      </div>
      <div class="grid_container" style={{ margin: "15px" }}>
        <div class="i-grid-container">
          <div class="grid_column_selector_container">
            <div class="btn_selector_open">
              <i class="fa fa-arrow-up" aria-hidden="true"></i>
            </div>
            <div class="selector_content_container">
              <label class="lbl_selector">
                <input
                  type="checkbox"
                  data-binding="selected"
                  data-type="string"
                  checked="checked"
                />{" "}
                Name{" "}
              </label>
              <label class="lbl_selector">
                <input
                  type="checkbox"
                  data-binding="selected"
                  data-type="string"
                  checked="checked"
                />{" "}
                Quantity{" "}
              </label>
              <label class="lbl_selector">
                <input
                  type="checkbox"
                  data-binding="selected"
                  data-type="string"
                  checked="checked"
                />{" "}
                Total Price{" "}
              </label>
              <label class="lbl_selector">
                <input
                  type="checkbox"
                  data-binding="selected"
                  data-type="string"
                  checked="checked"
                />{" "}
                Actions{" "}
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
                            <a>Name</a>
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
                            <a>Quantity</a>
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
                            <a>Total Price</a>
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
                            <a>Actions</a>
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
                  style={{height: "auto", display: "inline"}}
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
        <div class="col-md-3 col-sm-6">
          <div>
            <label>Total Item</label>
          </div>
          <div>
            <label class="form-control">0.00</label>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <div>
            <label>Total Quantity</label>
          </div>
          <div>
            <label class="form-control">0.00</label>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <div>
            <label>Total Price</label>
          </div>
          <div>
            <label class="form-control">0.00</label>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <div>
            <label>Payable Price</label>
          </div>
          <div>
            <label class="form-control">0.00</label>
          </div>
        </div>
      </div>
      <div class="empty_style row">
        <div class="col-md-3 col-sm-6">
          <div>
            <label>Your Name</label>
          </div>
          <div>
            <input class="form-control" placeholder="Your Name" type="text" />
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
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
        <div class="col-md-3 col-sm-6">
          <div>
            <label>Your Number</label>
          </div>
          <div>
            <input class="form-control" placeholder="Your Number" type="text" />
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <div>
            <label>Set On Map</label>
          </div>
          <div>
            <button
              class="btn btn_upload"
              type="button"
              style={{width: "100%", marginTop: "3%"}}
            >
              <i class="fa fa-picture-o" aria-hidden="true"></i>
              <span> Set Your Location (Optional) </span>
            </button>
          </div>
        </div>
      </div>
      <div class="empty_style row">
        <div class="col-md-12 col-sm-12">
          <div>
            <label style={{margin: "0px"}}>Address</label>
          </div>
          <div>
            <textarea
              class="form-control"
              placeholder="Your Address"
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
              style={{position: "absolute", left: "0px", top: "0px", opacity: "0", padding: "3px"}}
              type="file"
            />
          </div>
        </div>
        <div class="col-md-9">
          <div class="img_preview row"></div>
        </div>
      </div>
      <div class="empty_style row">
        <div class="col-md-12 col-sm-12">
          <div>
            <label>Remarks</label>
          </div>
          <div>
            <textarea
              class="form-control"
              placeholder="Description (Optional)"
            ></textarea>
          </div>
        </div>
      </div>
      <div class="order-detail-content" style={{padding: "15px"}}>
        <table class="table table-bordered table-responsive cart_summary">
          <tbody>
            <tr>
              <td colspan="3">Amount (tax incl.)</td>
              <td colspan="2">0</td>
            </tr>
            <tr>
              <td colspan="3">Delivery Charge</td>
              <td colspan="2">0</td>
            </tr>
            <tr>
              <td colspan="3">
                <strong>Total Amount </strong>
              </td>
              <td colspan="2">0</td>
            </tr>
          </tbody>
        </table>
        <div class="row" style={{margin: "auto"}}>
          <div class="col-md-6 box-border">
            <label class="Method_Selector">
              <input type="radio" name="radio_5" id="radio_button_7" /> Inside
              Dhaka
            </label>
          </div>
          <div class="col-md-6 box-border">
            <label class="Method_Selector">
              <input type="radio" name="radio_5" id="radio_button_8" /> Outside
              Dhaka
            </label>
          </div>
        </div>
        <div class="notice">
          <p class="OrderNotice">
            *** সকাল ১০ টা থেকে ৭ টার মধ্যে অর্ডার করলে ২৪ থেকে ৪৮ ঘন্টার মধ্যে
            ডেলিভারি।
            <br />
            ***শুক্রবারে সকল ডেলিভারি কার্যক্রম বন্ধ থাকে।
          </p>
        </div>
        <div class="row" style={{margin: "auto"}}>
          <div class="col-md-6 box-border" id="cash_radio_button">
            <label class="Method_Selector">
              <input type="radio" name="radio_4" id="radio_button_5" /> Cash on
              Delivery
            </label>
          </div>
          <div class="col-md-6 box-border">
            <label class="Method_Selector">
              <input type="radio" name="radio_4" id="radio_button_6" /> Online
              Payments
            </label>
          </div>
        </div>
      </div>
      <div class="notice">
        <p class="OrderNotice">
          *** Please pay first for outside Dhaka delivery (ঢাকার বাইরে অর্ডারের
          ক্ষেত্রে ক্যাশ অন ডেলিভারি প্রযোজ্য নয়)
        </p>
        <p class="OrderNotice">
          *** Please pay the delivery charge first for inside Dhaka delivery
          (Cash on Delivery) (ঢাকার ভিতর ক্যাশ অন ডেলিভারি এর ক্ষেত্রে ডেলিভারি
          চার্জ আগে প্রদান করতে হবে)
        </p>
      </div>
      <div class="" style={{textAlign: "center", margin: "15px"}}>
        <label>
          <input type="radio" /> I have read and agreed to the{" "}
          <a href="https://www.lazzpharma.com/Home/TermsCondition">
            {" "}
            Terms and conditions{" "}
          </a>
        </label>
      </div>
      <div class="text-center formFooter FooterFormMenu">
        <button
          class="btn btn-success btn-default btn-round"
          type="button"
          style={{marginBottom: "15px"}}
        >
          <span class="glyphicon glyphicon-upload"></span> Send
        </button>
      </div>
    </div>
  );
};

export default RequestProduct;
