import React, { useEffect, useState } from "react";
import Select from "../../utilities/select/Select";

const Complain = () => {
  const [clicked, setClicked] = useState(false);
  //complain states
  const [complainIsTouched, setComplainIsTouched] = useState(false);
  const [complainIsInvalid, setComplainIsInvalid] = useState(false);
  const [selectedComplain, setSelectedComplain] = useState({});

  //title validation start
  const [title, setTitle] = useState("");
  const [titleIsTouched, setTitleIsTouched] = useState(false);
  const [titleIsValid, setTitleIsValid] = useState(false);
  //end

  //Remarks validation start
  const [remark, setRemark] = useState("");
  const [remarkIsTouched, setRemarkIsTouched] = useState(false);
  const [remarkIsValid, setRemarkIsValid] = useState(false);
  //end

  //object of complain Type
  const complainList = [
    {
      id: 0,
      name: "Website",
    },
    {
      id: 1,
      name: "Delivary",
    },
    {
      id: 2,
      name: "Agent Behaviors",
    },
    {
      id: 3,
      name: "Products",
    },
    {
      id: 4,
      name: "Others",
    },
  ];

  const titleChangeHandler = ({ target }) => {
    setTitle(target.value);
  };
  const titleTouchedHandler = () => {
    setTitleIsTouched(true);
  };

  const remarkChangeHandler = ({ target }) => {
    setRemark(target.value);
  };
  const remarkTouchedHandler = () => {
    setRemarkIsTouched(true);
  };

  const complainSelectHandler = (complainList) => {
    setSelectedComplain(complainList);
  };
  const complainBlurHandler = () => {
    setComplainIsTouched(true);
  };

  const submitButtonHandler = (e) => {
    e.preventDefault();
    setClicked(true);
  };
  useEffect(() => {
    if (clicked) {
      if (
        (remarkIsTouched && remark.length === 0) ||
        (!remarkIsTouched && remark.length === 0)
      ) {
        setRemarkIsValid(true);
      } else setRemarkIsValid(false);

      if (
        (complainIsTouched && !selectedComplain?.name) ||
        (!complainIsTouched && !selectedComplain?.name)
      ) {
        setComplainIsInvalid(true);
      } else {
        setComplainIsInvalid(false);
      }
    }
  }, [ complainIsTouched,selectedComplain,remarkIsTouched, remark.length, clicked]);

  return (
    <div class="submit-compline-main-flex edit-profile-main-flex">
      <form>
        {/* <div class="custom-input">
          <label for="name">Title</label>
          <input
            type="text"
            name=""
            id="name"
            required=""
            onChange={titleChangeHandler}
            onBlur={titleTouchedHandler}
          />
          {titleIsValid && (
            <div class="alert alert-error">Title is required.</div>
          )}
          {titleIsTouched && title.length === 0 && !titleIsValid && (
            <div class="alert alert-error">Title is required.</div>
          )}
        </div> */}

        <div class="custom-input">
          <label for="msg">Describe Your Complain</label>
          <textarea
            name=""
            id="msg"
            value={remark}
            onChange={remarkChangeHandler}
            onBlur={remarkTouchedHandler}
          ></textarea>
          {remarkIsValid && (
            <div class="alert alert-error">Complain Text is required.</div>
          )}
          {remarkIsTouched && remark.length === 0 && !remarkIsValid && (
            <div class="alert alert-error">Complain Text is required.</div>
          )}
        </div>
        <div className="group-complain_type">
          <Select
            label="Select Complain"
            name="complain"
            options={complainList || []}
            onSelect={complainSelectHandler}
            config={{ searchPath: "name", keyPath: "id", textPath: "name" }}
            error={
              complainIsInvalid
                ? "Complain Type is required."
                : complainIsTouched &&
                  !selectedComplain.name &&
                  !complainIsInvalid
                ? "Complain Type is required."
                : ""
            }
            onBlur={complainBlurHandler}
            selectedOption={selectedComplain}
          />
          <div className="complain_button">
            <button
              type="submit"
              onClick={submitButtonHandler}
              style={{ height: "40px",width:"100%" }}
            >
              Send <i class="fa fa-paper-plane" aria-hidden="true"></i>
            </button>
          </div>
        </div>

        {/* <button type="submit" onClick={submitButtonHandler}>
          Send <i class="fa fa-paper-plane" aria-hidden="true"></i>
        </button> */}
      </form>
    </div>
  );
};

export default Complain;
