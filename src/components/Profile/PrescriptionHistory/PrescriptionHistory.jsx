import React, { useCallback, useEffect, useRef, useState } from "react";
import { GET_PRESCRIPTIONS, REMOVE_PRESCRIPTION } from "../../../lib/endpoints";
import { BASE_URL, http } from "../../../Service/httpService";
import Suspense from "../../Suspense/Suspense";
import PrescriptionCard from "../PrescriptionCard/PrescriptionCard";

const PrescriptionHistory = () => {
  const [prescriptions, setPrescriptions] = useState([]);
  const [selectedPrescription, setSelectedPrescription] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const downloadHandler = (item) => {
    window.open(BASE_URL + item.FilePath);
  };
  const selectExistHandler = (item) => {
    setSelectedPrescription((prevState) => [...prevState, item]);
  };

  const getPrescriptions = useCallback(() => {
    http.get({
      url: GET_PRESCRIPTIONS,
      before: () => {
        setIsLoading(true);
      },
      successed: (res) => {
        setPrescriptions(res.Data);
        setIsLoading(false);
      },
      failed: () => {},
      always: () => {
        setIsLoading(false);
      },
    });
  }, []);

  const removePrescriptionHandler = (id) => {
    http.post({
      url: REMOVE_PRESCRIPTION + id,
      before: () => {
        setPrescriptions((prevState) =>
          prevState.filter((pres) => pres.Id !== id)
        );
      },
      successed: () => {},
      failed: () => {},
      always: () => {},
    });
  };
  useEffect(() => {
    getPrescriptions();
  }, [getPrescriptions]);

  return (
    <>
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
        <PrescriptionCard
          prescriptions={prescriptions}
          selectedPrescription={selectedPrescription}
          setSelectedPrescription={setSelectedPrescription}
          setPrescriptions={setPrescriptions}
        />
        {isLoading && <Suspense />}

        {!isLoading && (
          <>
            {prescriptions.length > 0 ? (
              <div className="prescription_founded_box">
                <p>{prescriptions.length} prescription found</p>
              </div>
            ) : (
              <div className="prescription_founded_box">
                <p>No prescription found</p>
              </div>
            )}

            <div className="image_previewer_container">
              {/* single item  */}
              {prescriptions.map((item) => (
                <div className="item-container">
                  <div className="item-container__image-preview">
                    <img src={BASE_URL + item.FilePath} alt="" srcset="" />
                  </div>
                  <div className="item-container__buttons-flex">
                    <div
                      className="button-download hover_background"
                      onClick={downloadHandler.bind(null, item)}
                    >
                      Download
                    </div>
                    <div
                      className="button-select hover_background"
                      onClick={selectExistHandler.bind(null, item)}
                    >
                      Select
                    </div>
                    <div
                      className="button-remove hover_background_remove"
                      onClick={removePrescriptionHandler.bind(null, item.Id)}
                    >
                      Remove
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* {isOpenAlert && <RequestProductAlert />} */}
      </div>
    </>
  );
};

export default PrescriptionHistory;
