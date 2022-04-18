import React, { useEffect, useRef, useState } from "react";
import RequestProductAlert from "../../RequestOrder/RequestProductAlert/RequestProductAlert";

const PrescriptionHistory = () => {
  const fileRef = useRef();
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [isExist, setIsExist] = useState(false);
  const [isOpenAlert, setIsOpenAlert] = useState(false);
  const [note, setNote] = useState("");
  const setSelectedFileHandler = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };
  const imageRemoverhandler = () => {
    setPreview("");
  };
  const fileUploaderHandler = () => {
    fileRef.current.click();
  };

  const selectExistPresHandler = (evt) => {
    setIsExist(true);
  };
  const noteOnChangeHandler = ({ target }) => {
    setNote(target.value);
  };

  const submittedButtonHandler = () => {
    if ((isExist || preview) && note) {
      setIsOpenAlert(true);
    } else {
      alert("Please add prescription and note to request a order");
    }
  };

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

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
        {preview && <p className="prescription_header_new">New</p>}

        <div className="image_preview_container">
          {preview && (
            <>
              <div className="image_previewer">
                <div className="image_prev">
                  <img src={preview} alt="img" srcset="" />
                  <p
                    style={{
                      color: "red",
                      textAlign: "center",
                      textDecoration: "underline",
                      cursor: "pointer",
                      marginTop: "10px",
                    }}
                    onClick={imageRemoverhandler}
                  >
                    Remove
                  </p>
                </div>
                {/* <div className="image_prev">
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
            </div> */}
              </div>
            </>
          )}

          <div className="plus_icon_container" onClick={fileUploaderHandler}>
            <p className="plus_icon">+</p>
          </div>
        </div>

        {isExist && (
          <p className="prescription_header_new existing">Existing</p>
        )}

        <div className="image_preview_container">
          {isExist && (
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
                    marginTop: "10px",
                  }}
                >
                  Remove
                </p>
              </div>
              {/* <div className="image_prev">
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
              </div> */}
            </div>
          )}
        </div>

        <div className="prescription_order_section">
          <div className="file_uploader" style={{ maxWidth: "33.33%" }}>
            <label htmlFor="">Select Prescription</label>
            <input
              type="file"
              name=""
              id=""
              ref={fileRef}
              onChange={setSelectedFileHandler}
            />
          </div>
          <div className="prescription_order_section__note">
            <label htmlFor="">Note</label>
            <input type="text" onChange={noteOnChangeHandler} />
          </div>
          <div
            className="prescription_order_section__order-button"
            onClick={submittedButtonHandler}
          >
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
            <div className="button-download hover_background">Download</div>
            <div
              className="button-select hover_background"
              onClick={selectExistPresHandler}
            >
              Select
            </div>
            <div className="button-remove hover_background_remove">Remove</div>
          </div>
        </div>

        <div className="item-container">
          <div className="item-container__image-preview">
            <img src="/Contents/assets/image/b1.jpg" alt="" srcset="" />
          </div>
          <div className="item-container__buttons-flex">
            <div className="button-download hover_background">Download</div>
            <div
              className="button-select hover_background"
              onClick={selectExistPresHandler}
            >
              Select
            </div>
            <div className="button-remove hover_background_remove">Remove</div>
          </div>
        </div>

        <div className="item-container">
          <div className="item-container__image-preview">
            <img src="/Contents/assets/image/carrer.jpg" alt="" srcset="" />
          </div>
          <div className="item-container__buttons-flex">
            <div className="button-download hover_background">Download</div>
            <div className="button-select hover_background">Select</div>
            <div className="button-remove hover_background_remove">Remove</div>
          </div>
        </div>

        <div className="item-container">
          <div className="item-container__image-preview">
            <img src="/Contents/assets/image/carrer.jpg" alt="" srcset="" />
          </div>
          <div className="item-container__buttons-flex">
            <div className="button-download hover_background">Download</div>
            <div className="button-select hover_background">Select</div>
            <div className="button-remove hover_background_remove">Remove</div>
          </div>
        </div>

        <div className="item-container">
          <div className="item-container__image-preview">
            <img src="/Contents/assets/image/carrer.jpg" alt="" srcset="" />
          </div>
          <div className="item-container__buttons-flex">
            <div className="button-download hover_background">Download</div>
            <div className="button-select hover_background">Select</div>
            <div className="button-remove hover_background_remove">Remove</div>
          </div>
        </div>
      </div>
      {isOpenAlert && <RequestProductAlert />}
    </div>
  );
};

export default PrescriptionHistory;
