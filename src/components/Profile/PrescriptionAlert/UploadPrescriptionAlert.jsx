import React, { useCallback, useRef, useState } from "react";
import { ATTACH_PRESCRIPTION, POST_PRESCRIPTION } from "../../../lib/endpoints";
import { http } from "../../../Service/httpService";

const UploadPrescriptionAlert = ({
  orderNo,
  closeModal,
  getPrescriptionsByOrder,
}) => {
  const fileRef = useRef();
  const [files, setFiles] = useState([]);
  const [imageIsInvalid, setImageIsInvalid] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState([]);

  const fileUploaderHandler = () => {
    fileRef.current.click();
  };
  const imageRemoverhandler = () => {
    setPreview("");
  };

  const setSelectedFileHandler = ({ target }) => {
    const file = target.files[0];
    if (!file) return;
    const allowedExtensions = ["jpg", "jpeg", "png", "pdf", "doc", "docx"];

    const subs = file.name.toLowerCase().split(".");

    if (!allowedExtensions.includes(subs[subs.length - 1])) {
      setImageIsInvalid(true);
      target.value = "";
      return false;
    } else setImageIsInvalid(false);

    if (!target.files || target.files.length === 0) {
      setSelectedFile();
      return;
    }
    setSelectedFile(target.files[0]);
    const objectUrl = URL.createObjectURL(target.files[0]);
    setPreview((prevState) => [...prevState, { objectUrl: objectUrl }]);
    postPrescription(file);
    target.value = "";
  };
  const postPrescription = useCallback((file) => {
    http.file({
      url: POST_PRESCRIPTION,
      payload: {
        Img: file,
        From: "Upload Prescription",
        Description: "",
        activityId: "00000000-0000-0000-0000-000000000000",
      },
      before: () => {},
      successed: (res) => {
        setFiles((prevState) => [...prevState, { image: file, id: res.Id }]);
      },
      failed: () => {},
      always: () => {},
      map: (res) => {
        return res;
      },
    });
  }, []);
  const submitHandler = () => {
    const fileId = files.map((f) => f.id);
    attachedPrescription(orderNo, fileId);
  };

  const attachedPrescription = useCallback((orderNo, files) => {
    http.post({
      url: ATTACH_PRESCRIPTION,
      payload: {
        Prescriptions: files,
        OrderId: orderNo,
        ActivityId: "00000000-0000-0000-0000-000000000000",
      },
      before: () => {},
      successed: (res) => {
        closeModal();
        getPrescriptionsByOrder();
      },
      failed: () => {},
    });
  }, []);

  return (
    <div id="pop-up">
      <div class="overlay__popup show">
        <div class="popup undefined">
          <div class="popup__title">
            <h2>Upload Prescription</h2>
            <div
              style={{ color: "white", fontSize: "1.5rem", cursor: "pointer" }}
              onClick={closeModal}
            >
              ✖
            </div>
          </div>
          <div class="popup__body">
            <div>
              <div className="upload-Handler">
                <div className="image_preview_container">
                  {files?.length > 0 && (
                    <>
                      <div
                        className="image_previewer"
                        style={{ flexWrap: "nowrap" }}
                      >
                        {/* single item */}
                        {preview.map((file) => (
                          <div className="image_prev">
                            <img src={file.objectUrl} alt="img" srcset="" />
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
                        ))}
                      </div>
                    </>
                  )}

                  <div
                    className="plus_icon_container"
                    onClick={fileUploaderHandler}
                  >
                    <p className="plus_icon">+</p>
                  </div>
                </div>

                <div className="prescription_order_section">
                  <div className="file_uploader" style={{ maxWidth: "80.00%" }}>
                    <label htmlFor="">Upload Prescription</label>
                    <input
                      type="file"
                      name=""
                      id=""
                      ref={fileRef}
                      onChange={setSelectedFileHandler}
                    />
                    {imageIsInvalid && (
                      <div class="alert alert-error">
                        Only JPG JPEG PNG format acceptable.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="upload-button-text-container">
              <p>Upload Prescription for Order #1321321</p>
              <div onClick={submitHandler}>Upload Prescription</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPrescriptionAlert;
