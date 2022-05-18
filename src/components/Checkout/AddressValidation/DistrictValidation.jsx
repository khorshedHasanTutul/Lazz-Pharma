import React, { useEffect, useState } from "react";
import { GET_DISTRICT } from "../../../lib/endpoints";
import { http } from "../../../Service/httpService";
import Select from "../../utilities/select/Select";

const DistrictValidation = ({
  clicked,
  divisionID,
  getAreaHandler,
  fixDistrict,
  setDistrictId,
}) => {
  const [selectedDistrict, setSelectedDistrict] = useState({});
  const [districtList, setDistrictList] = useState([]);
  const [districtIsTouched, setDistrictIsTouched] = useState(false);
  const [isValidDistrict, setIsValidDistrict] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const districtSelectHandler = (districtList) => {
    setSelectedDistrict(districtList);
    getAreaHandler(districtList.id);
  };

  //api request for get districts
  const getDistrictHttp = (divisionID) => {
    http.post({
      url: GET_DISTRICT,
      payload: {
        PageNumber: 1,
        PageSize: 1000,
        filter: [{ Operation: 0, field: "ProvinceId", value: divisionID }],
      },
      before: () => {},
      successed: (res) => {
        const transformedDistricts = [];

        res.Data.Data[0].forEach((district) => {
          transformedDistricts.push({
            id: district[1],
            name: district[0],
            charge: district[2],
          });
        });
        setDistrictList(transformedDistricts);
      },
      failed: () => {
        console.log("failed");
      },
      always: () => {},
    });
  };
  const districtBlurHandler = () => {
    setDistrictIsTouched(true);
  };
  //effect for getDistricts function call
  useEffect(() => {
    getDistrictHttp(divisionID);
  }, [divisionID]);
  //effect for set database information
  useEffect(() => {
    if (fixDistrict.id!==undefined) {
      setSelectedValue(fixDistrict);
      setSelectedDistrict(fixDistrict);
      setDistrictId(fixDistrict.id);
    }
  }, [fixDistrict, setDistrictId]);

  useEffect(() => {
    if (clicked) {
      if (
        (districtIsTouched && !selectedDistrict?.name) ||
        (!districtIsTouched && !selectedDistrict?.name)
      ) {
        setIsValidDistrict(true);
      } else {
        setIsValidDistrict(false);
      }
    }
  }, [clicked, districtIsTouched, selectedDistrict?.name]);

  return (
    <Select
      label="Select City"
      name="district"
      options={districtList || []}
      onSelect={districtSelectHandler}
      config={{ searchPath: "name", keyPath: "id", textPath: "name" }}
      selectedOption={selectedDistrict}
      onBlur={districtBlurHandler}
      error={
        isValidDistrict
          ? "City is required"
          : districtIsTouched && !selectedDistrict?.name && !isValidDistrict
          ? "City is required"
          : ""
      }
      // previewText={
      //   districtStatus === "pending"
      //     ? "Loading data..."
      //     : "Select Region First"
      // }
    />
  );
};

export default DistrictValidation;
