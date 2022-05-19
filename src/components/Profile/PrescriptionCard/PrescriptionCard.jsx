import React, { useCallback, useEffect, useRef, useState } from "react";
import { POST_PRESCRIPTION } from "../../../lib/endpoints";
import { http } from "../../../Service/httpService";

const PrescriptionCard = () => {
  const fileRef = useRef();
  const [files, setFiles] = useState([]);
  const [isExist, setIsExist] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [note, setNote] = useState("");
  const noteOnChangeHandler = ({ target }) => {
    setNote(target.value);
  };

  const selectExistPresHandler = (evt) => {
    setIsExist(true);
  };
  const [isOpenAlert, setIsOpenAlert] = useState(false);

  const submittedButtonHandler = () => {
    if ((isExist || preview) && note) {
      setIsOpenAlert(true);
    } else {
      alert("Please add prescription and note to request a order");
    }
  };

  const setSelectedFileHandler = ({ target }) => {
    const file = target.files[0];
    if (!file) return;
    console.log({ file });
    if (!target.files || target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(target.files[0]);
    postPrescription(file, note);
  };

  const imageRemoverhandler = () => {
    setPreview("");
  };
  const fileUploaderHandler = () => {
    fileRef.current.click();
  };

  const postPrescription = useCallback((file, note) => {
    http.file({
      url: POST_PRESCRIPTION,
      payload: {
        Img: file,
        From: "Upload Prescription",
        Description: note,
        activityId: "00000000-0000-0000-0000-000000000000",
      },
      before: () => {},
      successed: (res) => {
        console.log(res);
      },
      failed: () => {},
      always: () => {},
    });
  }, []);

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

      {isExist && <p className="prescription_header_new existing">Existing</p>}

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
          <input type="text" value={note} onChange={noteOnChangeHandler} />
        </div>
        <div
          className="prescription_order_section__order-button"
          onClick={submittedButtonHandler}
        >
          Save & Order
        </div>
      </div>
    </div>
  );
};

export default PrescriptionCard;
