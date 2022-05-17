import React, { useContext, useEffect, useState } from "react";
import addressContext from "../../store/address-context";
import appData from "../DataSource/appData";

const AddressList = ({ addresses }) => {
  const getBottomActiveAddress = appData.BottomActiveAddress;
  const ctxAddress = useContext(addressContext);
  const [activeAddress, setActiveAddress] = useState(
    ctxAddress.getActiveType.type
  );
  const addressActiveHandler = (item) => {
    ctxAddress.setActiveType(item);
  };
  useEffect(() => {
    if (activeAddress !== ctxAddress.getActiveType.type) {
      setActiveAddress(ctxAddress.getActiveType.type);
    }
  }, [activeAddress, ctxAddress.getActiveType.type]);

  return (
    <div class="address-info-right-default">
      <h3>Saved Addresses</h3>
      <h2>Select Your Shipping Address</h2>
      {getBottomActiveAddress.map((item) => {
        const findCtxStoreItem = addresses?.find(
          (item2) => item2.Type === item.type
        );
        return (
          <>
            {findCtxStoreItem !== undefined && findCtxStoreItem?.Name !== null && (
              <div
                class={
                  item.type === activeAddress
                    ? "address-home-default-single active"
                    : "address-home-default-single"
                }
                onClick={addressActiveHandler.bind(null, item)}
              >
                {item.type === activeAddress && (
                  <div class="selected-address">
                    <p>
                      <i class="fa fa-check" aria-hidden="true"></i>Selected
                    </p>
                  </div>
                )}

                <h3>{item.type}</h3>
                <p>
                  {findCtxStoreItem?.Name}-{findCtxStoreItem?.Mobile}
                </p>
                <p>{findCtxStoreItem?.Email}</p>
                <p>
                  {findCtxStoreItem?.Province},{findCtxStoreItem?.District},
                  {findCtxStoreItem?.Upazila}
                </p>
                <p>{findCtxStoreItem?.Remarks}</p>
              </div>
            )}
            {findCtxStoreItem === undefined && (
              <div class="address-home-default-single">
                <h3>{item.type}</h3>
                <p>No Address Saved In {item.type} Slot</p>
              </div>
            )}
          </>
        );
      })}
    </div>
  );
};

export default AddressList;
