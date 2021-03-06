import React, { useEffect, useState } from "react";
import { storeAddressObj } from "../../../Service/AddressService";

const MobileValidation = ({ clicked, setPhoneP, fixPhone }) => {
  const [mobile, setMobile] = useState("");
  const [mobileIsTouched, setMobileIsTouched] = useState(false);
  const [mobileValid, setMobileIsValid] = useState(false);

  const mobileChangeHandler = ({ target }) => {
    setMobile(target.value);
    setPhoneP(target.value);
    storeAddressObj.mobile = target.value;
  };
  const mobileIsTouchedHandler = () => {
    setMobileIsTouched(true);
  };

  useEffect(() => {
    if (clicked) {
      if (
        (mobileIsTouched && mobile.length === 0) ||
        (!mobileIsTouched && mobile.length === 0)
      ) {
        setMobileIsValid(true);
      } else setMobileIsValid(false);
    }
  }, [mobile.length, mobileIsTouched, clicked]);

  useEffect(() => {
    if (fixPhone) {
      setMobile(fixPhone);
      setPhoneP(fixPhone);
    } else {
      setMobile("");
    }
  }, [fixPhone, setPhoneP]);

  return (
    <div class="custom-input">
      <label for="mobile">Mobile</label>
      <input
        type="text"
        name=""
        id="mobile"
        required
        value={mobile}
        onChange={mobileChangeHandler}
        onBlur={mobileIsTouchedHandler}
      />
      {mobileValid && <div class="alert alert-error">Phone is required.</div>}
      {mobileIsTouched && mobile.length === 0 && !mobileValid && (
        <div class="alert alert-error">Phone is required.</div>
      )}
    </div>
  );
};

export default MobileValidation;
