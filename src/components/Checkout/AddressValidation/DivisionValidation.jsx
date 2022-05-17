import React, { useEffect, useState } from "react";
import { GET_PROVINCE } from "../../../lib/endpoints";
import { http } from "../../../Service/httpService";
import Select from "../../utilities/select/Select";

const Divisionvalidation = ({
  clicked,
  getDistrictHandler,
  fixDivision,
  setDivisionId,
}) => {
  const [divisionList, setDivisionList] = useState([]);
  const [selectedDivision, setSelectedDivision] = useState({});
  const [selectedValue, setSelectedValue] = useState("");
  const [divisionIsTouched, setDivisionIsTouched] = useState(false);
  const [divisionIsValid, setDivisionIsValid] = useState(false);
  console.log({ divisionList });

  const divisionSelectHandler = (divisionList) => {
    setSelectedDivision(divisionList);
    getDistrictHandler(divisionList.id);
  };
  const divisionBlurHandler = () => {
    setDivisionIsTouched(true);
  };

  //api request for get divisions
  const getDivisionsHttp = () => {
    http.get({
      url: GET_PROVINCE,
      before: () => {},
      successed: (data) => {
        const transformedDivision = [];

        data.Data[0].forEach((division) => {
          transformedDivision.push({
            id: division[1],
            name: division[0],
          });
        });
        setDivisionList(transformedDivision);
      },
      failed: () => {},
      always: () => {},
    });
  };

  //effect for get divisions function call
  useEffect(() => {
    getDivisionsHttp();
  }, []);

  //effect for validation rules
  useEffect(() => {
    if (clicked) {
      if (
        (divisionIsTouched && !selectedDivision?.name) ||
        (!divisionIsTouched && !selectedDivision?.name)
      ) {
        setDivisionIsValid(true);
      } else setDivisionIsValid(false);
    }
  }, [divisionIsTouched, selectedDivision?.name, clicked]);

  //effect for  set database division value
  useEffect(() => {
    if (fixDivision) {
      setSelectedValue(fixDivision);
      setSelectedDivision(fixDivision);
      setDivisionId(fixDivision.id);
    }
  }, [fixDivision, setDivisionId]);

  return (
    <Select
      label="Select Region"
      name="division"
      options={divisionList || []}
      onSelect={divisionSelectHandler}
      config={{ searchPath: "name", keyPath: "id", textPath: "name" }}
      selectedOption={selectedDivision}
      // previewText={
      //   districtStatus === "pending" ? "Loading data..." : ""
      // }
      error={
        divisionIsValid
          ? "Region is required"
          : divisionIsTouched && !selectedDivision?.name && !divisionIsValid
          ? "Region is required"
          : ""
      }
      onBlur={divisionBlurHandler}
    />
  );
};

export default Divisionvalidation;
