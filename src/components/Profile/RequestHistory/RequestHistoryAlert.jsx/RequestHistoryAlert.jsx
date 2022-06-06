import React from "react";
import { BASE_URL } from "../../../../Service/httpService";

const RequestHistoryAlert = ({
  closeRequestAlert,
  requestItems,
  requestPres,
}) => {
  return (
    <div id="pop-up">
      <div class="overlay__popup show">
        <div class="popup undefined request-history">
          <div class="popup__title">
            <h2>Order Placed Successfully</h2>
            <div
              style={{ color: "white", fontSize: "1.5rem", cursor: "pointer" }}
              onClick={closeRequestAlert}
            >
              ✖
            </div>
          </div>
          <div class="popup__body">
            <div className="image-founded-container">
              <p className="image-container__no-image">
                Image of your prescription!
              </p>
              {requestPres.length === 0 && (
                <p className="image-container__no-image">No Image Found!</p>
              )}
              {requestPres.length > 0 && (
                <div className="image_preview_container">
                  {requestPres.map((item) => (
                    <div className="image_previewer">
                      <div className="image_prev">
                        <img
                          src={BASE_URL+item.FilePath}
                          alt="img"
                          srcset=""
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <p className="item_found">{requestItems.length} items found</p>

            <div className="items-found-container">
              <div className="items_founded_table_item">
                <div className="table_header_items">
                  <div className="header_name">Name</div>
                  <div className="header_strength">Strength</div>
                  <div className="header_quantity">Quantity</div>
                </div>
                <div className="table_content_items">
                  {requestItems.map((item) => (
                    <div className="table_content__single-item">
                      <div className="content_name">{item.Name}</div>
                      <div className="content_strength">{item.Strength}</div>
                      <div className="content_quantity">{item.Quantity}</div>
                    </div>
                  ))}
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
