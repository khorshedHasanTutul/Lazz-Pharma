import React, { useEffect, useState } from "react";
import { storeAddressObj } from "../../../Service/AddressService";

const NameValidation = ({ clicked, setNameP, fixName }) => {
  const [name, setName] = useState("");
  const [nameIsTouched, setNameIsTouched] = useState(false);
  const [nameValid, setNameIsValid] = useState(false);

  const nameChangeHandler = ({ target }) => {
    setName(target.value);
    storeAddressObj.name = target.value;
    setNameP(target.value);
  };
  const nameIsTouchedHandler = () => {
    setNameIsTouched(true);
  };

  useEffect(() => {
    if (clicked) {
      if (
        (nameIsTouched && name.length === 0) ||
        (!nameIsTouched && name.length === 0)
      ) {
        setNameIsValid(true);
      } else setNameIsValid(false);
    }
  }, [name.length, nameIsTouched, clicked]);
  useEffect(() => {
    if (fixName) {
      setName(fixName);
      setNameP(fixName);
    } else {
      setName("");
    }
  }, [fixName, setNameP]);

  return (
    <div class="custom-input">
      <label for="name">Name</label>
      <input
        type="text"
        name=""
        id="name"
        required
        value={name}
        onChange={nameChangeHandler}
        onBlur={nameIsTouchedHandler}
      />
      {nameValid && <div class="alert alert-error">Name is required.</div>}
      {nameIsTouched && name.length === 0 && !nameValid && (
        <div class="alert alert-error">Name is required.</div>
      )}
    </div>
  );
};

export default NameValidation;
