import { Fragment, useContext } from "react";
import { addressTypes } from "../../services/data-service";
import AddressContext from "../../store/address-context";
import Hightlight from "../utilities/Hightlight/Hightlight";

const AddressActions = ({
  onSubmit,
  isPrimary,
  onPrimaryChange,
  onSelect = () => {},
}) => {
  const { updateSlotName, slotName } = useContext(AddressContext);

  const changeHandler = ({ target }) => {
    onPrimaryChange(target.checked);
  };

  const buttonChangeHandler = (ad) => {
    updateSlotName(ad);
    onSelect();
  };

  return (
    <Fragment>
      <div className={`address-btn-group`}>
        <button
          className={`hollow t-16 ${
            slotName === addressTypes.home ? "active" : ""
          }`}
          onClick={buttonChangeHandler.bind(null, addressTypes.home)}
        >
          Home
        </button>
        <button
          className={`hollow t-16 ${
            slotName === addressTypes.office ? "active" : ""
          }`}
          onClick={buttonChangeHandler.bind(null, addressTypes.office)}
        >
          Office
        </button>
        <button
          className={`hollow t-16 ${
            slotName === addressTypes.homeTown ? "active" : ""
          }`}
          onClick={buttonChangeHandler.bind(null, addressTypes.homeTown)}
        >
          Home Town
        </button>
      </div>
      <div className="address-btn-group-2">
        <Hightlight className="flex justify-center" type="info">
          <input
            type="checkbox"
            name="primaryCheck"
            id="primary-check"
            onChange={changeHandler}
            checked={isPrimary}
          />
          <label htmlFor="primary-check" className="t-bold ml-8 t-black">
            Set as primary
          </label>
        </Hightlight>
        <button
          className="brick fill secondary t-16 save-btn"
          onClick={onSubmit}
        >
          Save Address
        </button>
      </div>
    </Fragment>
  );
};

export default AddressActions;
