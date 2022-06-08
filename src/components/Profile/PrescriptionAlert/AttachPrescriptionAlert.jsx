import React, { useCallback, useEffect, useState } from "react";
import { ATTACH_PRESCRIPTION, GET_PRESCRIPTIONS } from "../../../lib/endpoints";
import { BASE_URL, http } from "../../../Service/httpService";
import Suspense from "../../Suspense/Suspense";

const AttachPrescriptionAlert = ({
  closeModal,
  orderId,
  getPrescriptionsByOrder,
}) => {
  const [existPrescriptions, setExistPrescriptions] = useState([]);
  const [attachedPrescription, setAttachedPrescription] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPrescriptions = useCallback(() => {
    http.get({
      url: GET_PRESCRIPTIONS,
      before: () => {
        setIsLoading(true);
      },
      successed: (res) => {
        setExistPrescriptions(res.Data);
        setIsLoading(false);
      },
      failed: () => {},
      always: () => {
        setIsLoading(false);
      },
      map: (res) => {
        return res;
      },
    });
  }, []);
  const selectedItemHandler = (item, { target }) => {
    const findItem = attachedPrescription.filter(
      (item2) => item2.Id === item.Id
    );
    if (target.checked && findItem.length === 0) {
      setAttachedPrescription((prevState) => [...prevState, item]);
    } else {
      const findItem = attachedPrescription.filter(
        (item2) => item2.Id !== item.Id
      );
      setAttachedPrescription(findItem);
    }
  };
  const saveHandler = () => {
    attachedPrescription.length > 0 &&
      http.post({
        url: ATTACH_PRESCRIPTION,
        payload: {
          Prescriptions: attachedPrescription.map((f) => f.Id),
          OrderId: orderId,
          ActivityId: "00000000-0000-0000-0000-000000000000",
        },
        before: () => {
          
        },
        successed: () => {
          closeModal();
          getPrescriptionsByOrder();
        },
        failed: () => {},
        always: () => {
        },
      });
  };
  useEffect(() => {
    getPrescriptions();
  }, [getPrescriptions]);

  return (
    <div id="pop-up">
      <div class="overlay__popup show">
        <div class="popup undefined">
          <div class="popup__title">
            <h2>Attached Prescription</h2>
            <div
              style={{ color: "white", fontSize: "1.5rem", cursor: "pointer" }}
              onClick={closeModal}
            >
              ✖
            </div>
          </div>
          <div class="popup__body" style={{ minHeight: "200px" }}>
            {!isLoading && (
              <div>
                <div className="count_prescription">
                  <p style={{ fontWeight: "bold" }}>
                    {attachedPrescription.length} Prescriptions total Selected
                  </p>
                </div>
                <div className="upload-Handler">
                  <div className="image_preview_container">
                    {existPrescriptions.length > 0 && (
                      <div className="image_previewer">
                        {/* single item  */}
                        {existPrescriptions.map((item) => (
                          <div className="image_prev">
                            <img
                              src={BASE_URL + item.FilePath}
                              alt="img"
                              srcset=""
                              style={{ height: "auto" }}
                            />
                            <div className="checkbox-attached">
                              <input
                                type="checkbox"
                                name="attached_pres"
                                id="attached_pres"
                                onClick={selectedItemHandler.bind(this, item)}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="save-prescription d-flex" onClick={saveHandler}>
                  Save
                </div>
              </div>
            )}
            {isLoading && <Suspense />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttachPrescriptionAlert;
