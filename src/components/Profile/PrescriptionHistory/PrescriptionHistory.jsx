import React from "react";

const PrescriptionHistory = () => {
  return (
    <div className="container_prescription">
      <div className="prescription_upload_text">
        <p>কেন প্রেসক্রিপশনের ছবি আপলোড করবেন?</p>
        <ul>
          <li>
            লাজ ফার্মায় লগইন করে যেকোন সময় খুঁজে পাবেন আপনার ডিজিটাল
            প্রেসক্রিপশন।
          </li>
          <li>
            আপনি প্রেসক্রিপশন বুজতে না পারলেও কোন সমস্যা নেই, আমাদের 'A' গ্রেড
            ফার্মাসিস্ট প্রেস্ক্রিপশন দেখে ঔষধ অর্ডারে আপনাকে সহযোগিতা করবে।
          </li>
          <li>
            বাংলাদেশ সরকারের নিয়ম অনুসারে, কিছু মেডিসিন অর্ডার করার জন্য
            প্রেসক্রিপশন থাকা বাধ্যতামূলক।
          </li>
        </ul>
      </div>
      <div className="prscription_card">
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
            <label htmlFor="">Select Prescription</label>
            <input type="file" name="" id="" />
          </div>
          <div className="prescription_order_section__note">
            <label htmlFor="">Note</label>
            <input type="text" />
          </div>
          <div className="prescription_order_section__order-button">
            Save & Order
          </div>
        </div>
      </div>

      <div className="prescription_founded_box">
          <p>1 prescription found</p>
      </div>
      <div className="image_previewer_container">
          <div className="item-container">
              <div className="item-container__image-preview">
                  <img src="/Contents/assets/image/carrer.jpg" alt="" srcset="" />
              </div>
              <div className="item-container__buttons-flex">
                  <div className="button-download hover_background">
                      Download
                  </div>
                  <div className="button-select hover_background">
                      Select
                  </div>
                  <div className="button-remove hover_background_remove">
                      Remove
                  </div>
              </div>
          </div>
          <div className="item-container">
              <div className="item-container__image-preview">
                  <img src="/Contents/assets/image/carrer.jpg" alt="" srcset="" />
              </div>
              <div className="item-container__buttons-flex">
                  <div className="button-download hover_background">
                      Download
                  </div>
                  <div className="button-select hover_background">
                      Select
                  </div>
                  <div className="button-remove hover_background_remove">
                      Remove
                  </div>
              </div>
          </div>
          <div className="item-container">
              <div className="item-container__image-preview">
                  <img src="/Contents/assets/image/carrer.jpg" alt="" srcset="" />
              </div>
              <div className="item-container__buttons-flex">
                  <div className="button-download hover_background">
                      Download
                  </div>
                  <div className="button-select hover_background">
                      Select
                  </div>
                  <div className="button-remove hover_background_remove">
                      Remove
                  </div>
              </div>
          </div>
          <div className="item-container">
              <div className="item-container__image-preview">
                  <img src="/Contents/assets/image/carrer.jpg" alt="" srcset="" />
              </div>
              <div className="item-container__buttons-flex">
                  <div className="button-download hover_background">
                      Download
                  </div>
                  <div className="button-select hover_background">
                      Select
                  </div>
                  <div className="button-remove hover_background_remove">
                      Remove
                  </div>
              </div>
          </div>
          <div className="item-container">
              <div className="item-container__image-preview">
                  <img src="/Contents/assets/image/carrer.jpg" alt="" srcset="" />
              </div>
              <div className="item-container__buttons-flex">
                  <div className="button-download hover_background">
                      Download
                  </div>
                  <div className="button-select hover_background">
                      Select
                  </div>
                  <div className="button-remove hover_background_remove">
                      Remove
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default PrescriptionHistory;
