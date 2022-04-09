import InputControl from "../utilities/InputControl/InputControl";
import "./AddressForm.css";
import Select from "../utilities/Select/Select";
import useHttp from "../../hooks/use-http";
import { getDistricts, getUpzila } from "../../lib/api";
import { Fragment, useContext, useEffect, useState } from "react";
import AddressActions from "./AddressActions";
import AuthContext from "../../store/auth-context";
import { Prompt } from "react-router";
import { divisions } from '../../services/data-service';
import AddressContext from "../../store/address-context";



const AddressForm = ({
  onSubmit,
  onSelect,
  addressFormDirtyCheck,
}) => { 
  const authCtx = useContext(AuthContext);
  const { address } = useContext(AddressContext);
  const [primary, setPrimary] = useState(false); 
  const {
    sendRequest: sendDistrictRequest,
    status: districtStatus,
    data: loadedDistricts,
  } = useHttp(getDistricts, false);
  const {
    sendRequest: sendUpzilaRequest,
    status: upzilaStatus,
    data: loadedUpzila,
  } = useHttp(getUpzila, false);
  //#region form only
  const [division, setDivision] = useState({});
  const [district, setDistrict] = useState({});
  const [upzila, setUpzila] = useState({});


  const [name, setName] = useState("");
  const [nameIsTouched, setNameIsTouched] = useState(false);

  const [email, setEmail] = useState("");
  const [emailIsTouched, setEmailIsTouched] = useState(false);

  const [phone, setPhone] = useState("");
  const [phoneIsTouched, setPhoneIsTouched] = useState(false);

  const [remarks, setRemarks] = useState("");
  const [remarksIsTouched, setRemarksIsTouched] = useState(false);

  const [divisionIsTouched, setDivisionIsTouched] = useState(false);

  const [districtIsTouched, setDistrictIsTouched] = useState(false);

  const [upzilaIsTouched, setUpzilaIsTouched] = useState(false);

  const nameIsValid = name !== "";
  const nameInputIsInvalid = !nameIsValid && nameIsTouched;

  const emailIsValid =  email.length === 0 ? true : email.includes("@");
  const emailInputIsInvalid = email.length > 0 && !emailIsValid;

  const phoneIsValid = phone !== "";
  const phoneInputIsInvalid = !phoneIsValid && phoneIsTouched;

  const remarksIsValid = remarks !== "";
  const remarksInputIsInalid = !remarksIsValid && remarksIsTouched;

  const divisionIsValid = division.id ? true : false;
  const divisionInputIsInvalid = !divisionIsValid && divisionIsTouched;

  const districtIsValid = district.id ? true : false;
  const districtInputIsInvalid = !districtIsValid && districtIsTouched;

  const upzilaIsValid = upzila.id ? true : false;
  const upzilaInputIsInvalid = !upzilaIsValid && upzilaIsTouched;

  let formIsValid = false;

  let formIsDirty = false;
  if (
    nameIsTouched ||
    emailIsTouched ||
    phoneIsTouched ||
    districtIsTouched ||
    divisionIsTouched ||
    upzilaIsTouched ||
    remarksIsTouched
  ) {
    formIsDirty = true;
    addressFormDirtyCheck && addressFormDirtyCheck(true);
  }

  if (
    nameIsValid &&
    emailIsValid &&
    phoneIsValid &&
    remarksIsValid &&
    divisionIsValid &&
    district.id &&
    upzila.id
  ) {
    formIsValid = true;
  }

  const nameChangeHandler = ({ target }) => {
    setName(target.value);
  };

  const nameBlurHandler = () => {
    setNameIsTouched(true);
  };

  const emailChangeHandler = ({ target }) => {
    setEmail(target.value);
  };

  const emailBlurHandler = () => {
    setEmailIsTouched(true);
  };

  const phoneChangeHandler = ({ target }) => {
    setPhone(target.value.trim());
  };

  const phoneBlurHandler = () => {
    setPhoneIsTouched(true);
  };

  const remarksChangeHandler = ({ target }) => {
    setRemarks(target.value);
  };

  const remarksBlurHandler = () => {
    setRemarksIsTouched(true);
  };

  const divisionBlurHandler = () => {
    setDivisionIsTouched(true);
  };

  const districtBlurHandler = () => {
    setDistrictIsTouched(true);
  };

  const upzilaBlurHandler = () => {
    setUpzilaIsTouched(true);
  };

  const divisionSelectHandler = (division) => {
    if(!division.id){
      setDivision({});
      return;
    } 

    setDivision(division);
    setDistrict({});
    setUpzila({});
    sendDistrictRequest({
      PageNumber: 1,
      PageSize: 1000,
      filter: [{ Operation: 0, field: "ProvinceId", value: division.id }],
    });
  };

  const districtSelectHandler = (district) => {
    if(!district.id){
      setDistrict({});
      return;
    }

    setDistrict(district);

    sendUpzilaRequest({
      PageNumber: 1,
      PageSize: 1000,
      filter: [{ Operation: 0, field: "DistrictId", value: district.id }],
    });
  };

  const upzilaSelectHandler = (upzila) => {
    if(!upzila.id) return;

    setUpzila(upzila);
  };

  const submitHandler = () => {
      if(!nameIsValid){
        setNameIsTouched(true);
      }
    if(!phoneIsValid){
      setPhoneIsTouched(true);
    }
    if(!emailIsValid){
      setEmailIsTouched(true);
    }
    if(!divisionIsValid){
      setDivisionIsTouched(true);
    }
    if(!districtIsValid){
      setDistrictIsTouched(true);
    }
    if(!upzilaIsValid){
      setUpzilaIsTouched(true);
    }
    if(!remarksIsValid){
      setRemarksIsTouched(true);
    }

    if (!formIsValid) {
      return;
    }

    const addressData = {
      CustomerId: authCtx.user.id,
      DistrictId: district.id,
      IsDefault: primary,
      IsValid: true,
      Name: name,
      ProvinceId: division.id,
      Rank: 0,
      Type: address.Type,
      UpazilaId: upzila.id,
      email: email,
      mobile: phone,
      Remarks: remarks,
    };

    onSubmit(addressData);
  };
  //#endregion

  useEffect(() => {
    setPrimary(address.IsDefault ?? false);

    setName(address.Name ?? "");
    setEmail(address.Email ?? "");
    setPhone(address.Mobile ?? "");
    setRemarks(address.Remarks ?? "");

    divisionSelectHandler({
      id: address.ProvinceId,
      name: address.Province,
    });

    districtSelectHandler({
      id: address.DistrictId,
      name: address.District,
    });

    setUpzila({ id: address.UpazilaId, name: address.Upazila });

  }, [address]);

  const primaryChangeHandler = (isPrimary) => {
    setPrimary(isPrimary);
  }

  return (
    <Fragment>
      <div>
        <div className="form__control mb-16">
          <InputControl
            name={"name"}
            label={"Name"}
            required
            className="brick"
            value={name}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            error={nameInputIsInvalid && "Name is required"}
          />
        </div>
        <div className=" mb-16">
          <div className="form__control mb-16">
            <InputControl
              name={"phone"}
              label={"Phone Number"}
              required
              className="brick"
              value={phone}
              onChange={phoneChangeHandler}
              onBlur={phoneBlurHandler}
              error={phoneInputIsInvalid ? "Phone number is required" : ""}
            />
          </div>
          <div className="form__control mb-16">
            <InputControl
              name={"email"}
              label={"Email"}
              required
              className="brick"
              value={email}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              error={emailInputIsInvalid ? "Invail email" : ""}
            />
          </div>

          <div className="grid-3 mb-16 g-8">
            <Select
              label="Select Region"
              name="division"
              options={divisions || []}
              onSelect={divisionSelectHandler}
              config={{ searchPath: "name", keyPath: "id", textPath: "name" }}
              selectedOption={division}
              previewText={
                districtStatus === "pending" ? "Loading data..." : ""
              }
              error={divisionInputIsInvalid && "Region is required"}
              onBlur={divisionBlurHandler}
            />
            <Select
              label="Select City"
              name="district"
              options={loadedDistricts || []}
              onSelect={districtSelectHandler}
              config={{ searchPath: "name", keyPath: "id", textPath: "name" }}
              selectedOption={district}
              onBlur={districtBlurHandler}
              error={districtInputIsInvalid && "City is required"}
              previewText={
                districtStatus === "pending"
                  ? "Loading data..."
                  : "Select Region First"
              }
            />
            <Select
              label="Select Area"
              name="area"
              options={loadedUpzila || []}
              onSelect={upzilaSelectHandler}
              config={{ searchPath: "name", keyPath: "id", textPath: "name" }}
              selectedOption={upzila}
              onBlur={upzilaBlurHandler}
              error={upzilaInputIsInvalid && "Area is required"}
              previewText={
                upzilaStatus === "pending"
                  ? "Loading data..."
                  : "Select City First"
              }
            />
          </div>
          <div className="form__control mb-16">
            <div className="form__control--text-area">
              <label htmlFor="address">Address</label>
              <textarea
                name="address"
                id="address"
                rows="1"
                className="brick"
                value={remarks}
                onChange={remarksChangeHandler}
                onBlur={remarksBlurHandler}
              ></textarea>
              {remarksInputIsInalid && (
                <div className="alert alert-error">
                  Please write your address
                </div>
              )}
            </div>
          </div>
          <AddressActions
            onSubmit={submitHandler}
            onSelect={onSelect}
            onPrimaryChange={primaryChangeHandler}
            isPrimary={primary}
          />
        </div>
      </div>
      <Prompt
        when={formIsDirty}
        message={(location) =>
          "Are you sure you want to leave? All your entered data will be lost!"
        }
      />
    </Fragment>
  );
};

export default AddressForm;
