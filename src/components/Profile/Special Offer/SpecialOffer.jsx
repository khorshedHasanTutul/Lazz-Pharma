import React, { useEffect, useState } from "react";
import { GET_SPECIALS_OFFER } from "../../../lib/endpoints";
import { http } from "../../../Service/httpService";
import Suspense from "../../Suspense/Suspense";

const SpecialOffer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [offerList, setOfferList] = useState([]);
  const getSpecialOffer = () => {
    http.get({
      url: GET_SPECIALS_OFFER,
      before: () => {
        setIsLoading(true);
      },
      successed: (res) => {
        console.log(res);
        setIsLoading(false);
        setOfferList(res.Data);
      },
      failed: () => {
        setIsLoading(false);
      },
      always: () => {
        setIsLoading(false);
      },
    });
  };

  useEffect(() => {
    getSpecialOffer();
  }, []);

  return (
    <>
      {!isLoading && (
        <div class="cash-back-offer-inner-card">
          {/* <!-- single item --> */}
          {offerList.map((item) => (
            <div class="single-cash-card-item">
              <div class="card-img">
                <img src="/Contents/assets/image/specialOffer.png" alt="cash" />
              </div>
              <div class="cash-content">
                <h4>{item.ContentHeader}</h4>
                <p>{item.Content}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      {isLoading && <Suspense />}
    </>
  );
};

export default SpecialOffer;
