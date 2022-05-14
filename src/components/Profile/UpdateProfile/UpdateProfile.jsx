import React, { useEffect, useState } from "react";

const UpdateProfile = () => {
  const [clicked, setClicked] = useState(false);

  //name validation
  const [name, setName] = useState("");
  const [nameIsTouched, setNameIsTouched] = useState(false);
  const [nameIsValid, setNameIsValid] = useState(false);
  //end
  //email state
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  //file state
  const [files, setFiles] = useState();
  //image preview
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  //name Handlers
  const nameChangeHandler = ({ target }) => {
    setName(target.value);
  };
  const nameTouchedHandler = () => {
    setNameIsTouched(true);
  };
  //   end
  const emailChangeHandler = ({ target }) => {
    setEmail(target.value);
  };
  const fileUploadHandler = (e) => {
    setFiles(e.target.files[0]);
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };

  //save button handler
  const saveButtonHandler = (e) => {
    e.preventDefault();
    setClicked(true);
  };
  //end

  useEffect(() => {
    if (clicked) {
      if (
        (nameIsTouched && name.length === 0) ||
        (!nameIsTouched && name.length === 0)
      ) {
        setNameIsValid(true);
      } else setNameIsValid(false);
    }
  }, [clicked, name.length, nameIsTouched]);

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  return (
    <div class="edit-profile-main-flex">
      <form className="form-parrent">
        <div class="edit-profile-main-form first-column">
          <div class="custom-input">
            <label for="name">Name</label>
            <input
              type="text"
              name=""
              id="name"
              required=""
              value={name}
              onChange={nameChangeHandler}
              onBlur={nameTouchedHandler}
            />

            {nameIsValid && (
              <div class="alert alert-error">Name is required.</div>
            )}
            {nameIsTouched && name.length === 0 && !nameIsValid && (
              <div class="alert alert-error">Name is required.</div>
            )}
          </div>
          <div class="custom-input">
            <label for="name">Email</label>
            <input
              type="email"
              name=""
              id="name"
              required=""
              value={email}
              onChange={emailChangeHandler}
            />
          </div>
          <div class="custom-input">
            <label for="name">Phone Number</label>
            <input
              type="text"
              class="disabled"
              name=""
              id="name"
              disabled
              value="01704247162"
            />
          </div>
        </div>
        <div class="edit-profile-main-form second-column">
          <div className="image_preview">
            {preview && <img src={preview} alt="" />}
          </div>
          <div className="container-file-button">
            <div class="custom-input">
              <label for="name">Upload Photo</label>
              <input
                type="file"
                name=""
                id="name"
                required=""
                onChange={fileUploadHandler}
              />
              {/* <div class="alert alert-error">Photo is required.</div> */}
            </div>
            <button
              type="submit"
              onClick={saveButtonHandler}
              style={{ position: "relative", top: "14px", height: "36px" }}
            >
              Save
              {/* <i class="fa fa-floppy-o" aria-hidden="true"></i> */}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
