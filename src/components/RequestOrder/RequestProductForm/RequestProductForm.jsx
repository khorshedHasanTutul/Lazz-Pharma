import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const RequestProductForm = ({ addToProduct }) => {
  const [clicked, setClicked] = useState(false);
  const [name, setName] = useState("");
  const [nameIsTouched, setNameIsTouched] = useState(false);
  const [nameIsValid, setNameIsValid] = useState(false);

  const [strength, setStrength] = useState("");
  const [quantity, setQuantity] = useState("");
  const [quantityIsTouched, setQuantityIsTouched] = useState(false);
  const [quantityIsValid, setQuantityIsValid] = useState(false);

  const nameOnChangeHandler = ({ target }) => {
    setName(target.value);
  };

  const nameIsTouchedHandler = () => {
    setNameIsTouched(true);
  };

  const strengthOnChangeHandler = ({ target }) => {
    setStrength(target.value);
  };

  const quantityOnChangeHandler = ({ target }) => {
    setQuantity(target.value);
  };
  const quantityIsTouchedHandler = () => {
    setQuantityIsTouched(true);
  };
  const addToProductHandler = () => {
    setClicked(true);
    if (name.length !== 0 && strength.length !== 0 && quantity.length !== 0) {
      addToProduct({ name, strength, quantity, id: uuidv4() });
      setName("");
      setStrength("");
      setQuantity("");
      setNameIsTouched(false);
      setQuantityIsTouched(false);
      setNameIsValid(false);
      setQuantityIsValid(false);

    }
  };
  useEffect(() => {
    if (clicked) {
      if (
        (nameIsTouched && name.length === 0) ||
        (!nameIsTouched && name.length === 0)
      ) {
        setNameIsValid(true);
      } else {
        setNameIsValid(false);
      }

      if (
        (quantityIsTouched && quantity.length === 0) ||
        (!quantityIsTouched && quantity.length === 0)
      ) {
        setQuantityIsValid(true);
      } else {
        setQuantityIsValid(false);
      }
    }
  }, [nameIsTouched, name.length, quantityIsTouched, quantity.length, clicked]);

  return (
    <div class="empty_style" style={{ marginTop: "20px" }}>
      <div className="Validation">
        <div>
          <label htmlFor="name">Name</label>
          <input
            class="form-control"
            placeholder="Ex. Napa Tab."
            type="text"
            value={name}
            onChange={nameOnChangeHandler}
            onBlur={nameIsTouchedHandler}
          />
        </div>
        <div className="validate_name">
          {nameIsValid && (
            <div class="alert alert-error">Name is required.</div>
          )}
          {nameIsTouched && name.length === 0 && !nameIsValid && (
            <div class="alert alert-error">Name is required.</div>
          )}
        </div>
      </div>
      <div className="Validation">
        <div>
          <label htmlFor="strength">Strength</label>
          <input
            class="form-control"
            placeholder="Ex. 500 mg"
            type="text"
            value={strength}
            onChange={strengthOnChangeHandler}
          />
        </div>
      </div>

      <div className="Validation">
        <div>
          <label htmlFor="quantity">Quantity</label>
          <input
            class="form-control"
            placeholder="Quantity In Pcs"
            type="text"
            value={quantity}
            onChange={quantityOnChangeHandler}
            onBlur={quantityIsTouchedHandler}
          />
        </div>
        <div className="validate_name">
          {quantityIsValid && (
            <div class="alert alert-error">Quantity is required.</div>
          )}
          {quantityIsTouched && quantity.length === 0 && !quantityIsValid && (
            <div class="alert alert-error">Quantity is required.</div>
          )}
        </div>
      </div>
      <div className="validation">
        <div>
          <button
            class="btn btn_cancel btn-success btn-default btn-round"
            style={{ width: "100%" }}
            type="button"
            onClick={addToProductHandler}
          >
            <span>Add Product</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestProductForm;
