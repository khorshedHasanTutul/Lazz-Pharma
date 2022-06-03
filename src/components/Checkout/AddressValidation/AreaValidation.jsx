import React, { useEffect, useState } from "react";
import { GET_AREA } from "../../../lib/endpoints";
import { http } from "../../../Service/httpService";
import Select from "../../utilities/select/Select";

const AreaValidation = ({
  clicked,
  districtId,
  getSelectAreaHandler,
  fixArea,
  setFixArea,
  setAreaId,
}) => {
  const [areaList, setAreaList] = useState([]);
  const [selectedArea, setSelectedArea] = useState();
  const [selectedValue, setSelectedValue] = useState("");
  const [upazilaIsTouched, setUpazilaIsTouched] = useState(false);
  const [isUpazilaValid, setIsUpazilaValid] = useState(false);
  const areaSelectHandler = (areaList) => {
    setSelectedArea(areaList);
    getSelectAreaHandler(areaList.id);
    setFixArea({ id: areaList.id, name: areaList.name });
  };
  const upzilaBlurHandler = () => {
    setUpazilaIsTouched(true);
  };

  const getAreaHttp = (districtId) => {
    http.post({
      url: GET_AREA,
      payload: {
        PageNumber: 1,
        PageSize: 1000,
        filter: [{ Operation: 0, field: "DistrictId", value: districtId }],
      },
      before: () => {},
      successed: (res) => {
        const transformedAreas = [];

        res.Data.Data[0].forEach((area) => {
          transformedAreas.push({
            id: area[1],
            name: area[0],
            charge: area[2],
          });
        });
        setAreaList(transformedAreas);
      },
      failed: () => {
        console.log("failed");
      },
      always: () => {},
    });
  };

  useEffect(() => {
    getAreaHttp(districtId);
  }, [districtId]);

  useEffect(() => {
    if (fixArea.id !== undefined) {
      setSelectedValue(fixArea);
      setSelectedArea(fixArea);
      setAreaId(fixArea.id);
    }
    if (fixArea.id === undefined) {
      setSelectedValue("");
      setSelectedArea({});
      setAreaId();
    }
  }, [fixArea, setAreaId]);

  useEffect(() => {
    if (clicked) {
      if (
        (upazilaIsTouched && !selectedArea?.name) ||
        (!upazilaIsTouched && !selectedArea?.name)
      ) {
        setIsUpazilaValid(true);
      } else {
        setIsUpazilaValid(false);
      }
    }
  }, [clicked, upazilaIsTouched, selectedArea?.name]);

  return (
    <Select
      label="Select Area"
      name="area"
      options={areaList || []}
      onSelect={areaSelectHandler}
      config={{ searchPath: "name", keyPath: "id", textPath: "name" }}
      selectedOption={selectedArea}
      onBlur={upzilaBlurHandler}
      error={
        isUpazilaValid
          ? "Area is required"
          : upazilaIsTouched && !selectedArea?.name && !isUpazilaValid
          ? "Area is required"
          : ""
      }
      // previewText={
      //   upzilaStatus === "pending"
      //     ? "Loading data..."
      //     : "Select City First"
      // }
    />
  );
};

export default AreaValidation;
