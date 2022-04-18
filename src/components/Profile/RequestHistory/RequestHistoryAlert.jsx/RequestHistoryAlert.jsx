import React from "react";

const RequestHistoryAlert = ({closeRequestAlert}) => {
  return (
    <div id="pop-up">
      <div class="overlay__popup show">
        <div class="popup undefined request-history">
          <div class="popup__title">
            <h2>Order Placed Successfully</h2>
            <div
              style={{ color: "white", fontSize: "1.5rem", cursor: "pointer" }}
              onClick = {closeRequestAlert}
            >
              ✖
            </div>
          </div>
          <div class="popup__body">
            <div className="image-founded-container">
              {/* <p className="image-container__no-image" >No Image Found!</p> */}
              <p className="image-container__no-image">
                Image of your prescription!
              </p>

              <div className="image_preview_container">
                <div className="image_previewer">
                  <div className="image_prev">
                    <img
                      src="/Contents/assets/image/banner2.jpg"
                      alt="img"
                      srcset=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <p className="item_found">5 items found</p>
            
            <div className="items-found-container">
              <div className="items_founded_table_item">
                <div className="table_header_items">
                  <div className="header_name">Name</div>
                  <div className="header_strength">Strength</div>
                  <div className="header_quantity">Quantity</div>
                </div>
                <div className="table_content_items">
                  <div className="table_content__single-item">
                    <div className="content_name">Napa</div>
                    <div className="content_strength">500</div>
                    <div className="content_quantity">100</div>
                  </div>
                  <div className="table_content__single-item">
                    <div className="content_name">Napa</div>
                    <div className="content_strength">500</div>
                    <div className="content_quantity">100</div>
                  </div>
                  <div className="table_content__single-item">
                    <div className="content_name">Napa</div>
                    <div className="content_strength">500</div>
                    <div className="content_quantity">100</div>
                  </div>
                  <div className="table_content__single-item">
                    <div className="content_name">Napa</div>
                    <div className="content_strength">500</div>
                    <div className="content_quantity">100</div>
                  </div>
                  <div className="table_content__single-item">
                    <div className="content_name">Napa</div>
                    <div className="content_strength">500</div>
                    <div className="content_quantity">100</div>
                  </div>
                  <div className="table_content__single-item">
                    <div className="content_name">Napa</div>
                    <div className="content_strength">500</div>
                    <div className="content_quantity">100</div>
                  </div>
                  <div className="table_content__single-item">
                    <div className="content_name">Napa</div>
                    <div className="content_strength">500</div>
                    <div className="content_quantity">100</div>
                  </div>
                  <div className="table_content__single-item">
                    <div className="content_name">Napa</div>
                    <div className="content_strength">500</div>
                    <div className="content_quantity">100</div>
                  </div>
                  <div className="table_content__single-item">
                    <div className="content_name">Napa</div>
                    <div className="content_strength">500</div>
                    <div className="content_quantity">100</div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestHistoryAlert;
