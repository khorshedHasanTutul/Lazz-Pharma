import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  POST_PRESCRIPTION,
  POST_REQUEST_ORDER,
  REMOVE_PRESCRIPTION,
} from "../../../lib/endpoints";
import { BASE_URL, http } from "../../../Service/httpService";
import RequestProductAlert from "../../RequestOrder/RequestProductAlert/RequestProductAlert";
import Suspense from "../../Suspense/Suspense";

const PrescriptionCard = ({
  selectedPrescription,
  setPrescriptions,
  setSelectedPrescription,
}) => {
  const fileRef = useRef();
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState([]);
  const [note, setNote] = useState("");
  const [imageIsInvalid, setImageIsInvalid] = useState(false);
  const [isGetting, setIsGetting] = useState(false);

  const noteOnChangeHandler = ({ target }) => {
    setNote(target.value);
  };
  const [isOpenAlert, setIsOpenAlert] = useState(false);

  const submittedButtonHandler = () => {
    if ((selectedPrescription.length > 0 || preview.length > 0) && note) {
      http.post({
        url: POST_REQUEST_ORDER,
        payload: {
          TotalItem: 0,
          TotalQuantity: 0,
          Items: [],
          ImgId: [
            ...files.map((file) => file.id),
            ...selectedPrescription.map((file) => file.Id),
          ],
          ActivityId: "00000000-0000-0000-0000-000000000000",
          Remarks: note,
        },
        before: () => {},
        successed: (res) => {
          setIsOpenAlert(true);
          setNote("");
          setFiles([]);
          setPrescriptions([]);
        },
        failed: () => {},
        always: () => {},
      });
    } else {
      alert("Please add prescription and note to request a order");
    }
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
    setSelectedFile(file);

    postPrescription(file, note);

    target.value = "";
  };

  const imageRemoverhandler = (file) => {
    http.post({
      url: REMOVE_PRESCRIPTION + file.id,
      before: () => {},
      successed: () => {
        setPreview((prevState) =>
          prevState.filter((item) => item.id !== file.id)
        );
      },
      failed: () => {},
      always: () => {},
    });
  };
  const fileUploaderHandler = () => {
    fileRef.current.click();
  };
  const previewImageRemoveHandler = (item) => {
    setSelectedPrescription((prevState) =>
      prevState.filter((item2) => item2.Id !== item.Id)
    );
  };

  const postPrescription = useCallback((file, note) => {
    const objectUrl = URL.createObjectURL(file);
    http.file({
      url: POST_PRESCRIPTION,
      payload: {
        Img: file,
        From: "Upload Prescription",
        Description: note,
        activityId: "00000000-0000-0000-0000-000000000000",
      },
      before: () => {
        setIsGetting(true);
      },
      successed: (res) => {
        setFiles((prevState) => [...prevState, { image: file, id: res.Id }]);
        setPreview((prevState) => [
          ...prevState,
          { objectUrl: objectUrl, id: res.Id },
        ]);
        setNote("");
        setIsGetting(false);
      },
      failed: () => {},
      always: () => {
        setIsGetting(false);
      },
      map: (res) => {
        return res;
      },
    });
  }, []);

  return (
    <>
      <div className="prscription_card">
        {files?.length > 0 && <p className="prescription_header_new">New</p>}

        <div className="image_preview_container">
          {files?.length > 0 && (
            <>
              <div className="image_previewer">
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
                      onClick={imageRemoverhandler.bind(null, file)}
                    >
                      Remove
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}

          <div className="plus_icon_container" onClick={fileUploaderHandler}>
            <p className="plus_icon">+</p>
          </div>
          {isGetting && <Suspense />}
        </div>

        {selectedPrescription.length > 0 && (
          <p className="prescription_header_new existing">Existing</p>
        )}

        <div className="image_preview_container">
          {selectedPrescription.length > 0 && (
            <div className="image_previewer">
              {/* single item  */}
              {selectedPrescription.map((item) => (
                <div className="image_prev">
                  <img src={BASE_URL + item.FilePath} alt="img" srcset="" />
                  <p
                    style={{
                      color: "red",
                      textAlign: "center",
                      textDecoration: "underline",
                      cursor: "pointer",
                      marginTop: "10px",
                    }}
                    onClick={previewImageRemoveHandler.bind(null, item)}
                  >
                    Remove
                  </p>
                </div>
              ))}
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
            {imageIsInvalid && (
              <div
                style={{ position: "absolute", marginTop: "-3px" }}
                className="alert alert-error"
              >
                Only JPG JPEG PNG DOC DOCX PDF format acceptable
              </div>
            )}
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
      {isOpenAlert && <RequestProductAlert />}
    </>
  );
};

export default PrescriptionCard;
