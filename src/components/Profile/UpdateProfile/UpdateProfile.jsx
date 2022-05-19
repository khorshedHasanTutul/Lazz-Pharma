import React, { useCallback, useContext, useEffect, useState } from "react";
import { GET_USER_INFO, UPDATE_USER_INFO } from "../../../lib/endpoints";
import { http } from "../../../Service/httpService";
import authContext from "../../../store/auth-context";
import Suspense from "../../Suspense/Suspense";

const UpdateProfile = () => {
  const [clicked, setClicked] = useState(false);
  const authCtx = useContext(authContext);

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
  const [profileInfo, setProfileInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  console.log({ name }, profileInfo.Name);
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
  const fileUploadHandler = ({ target }) => {
    setFiles(target.files[0]);
    if (!target.files || target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(target.files[0]);
  };

  //save button handler
  const saveButtonHandler = (e) => {
    e.preventDefault();
    setClicked(true);
    if (name !== profileInfo.Name || email !== profileInfo.Email) {
      UpdateProfile();
    }
  };
  //end

  const updateProfile = useCallback(() => {
    http.post({
      url: UPDATE_USER_INFO,
      payload: {
        UserId: authCtx.user.id,
        Name: name,
        Email: email,
      },
      before: () => {},
      successed: (res) => {
        console.log(res);
        getProfileInfo();
      },
      failed: () => {},
      always: () => {},
    });
  }, []);

  const getProfileInfo = () => {
    http.get({
      url: GET_USER_INFO,
      before: () => {
        setIsLoading(true);
      },
      successed: (res) => {
        console.log(res);
        setProfileInfo(res.Data.Customer);
      },
      failed: () => {
        setIsLoading(false);
      },
      always: () => {
        setIsLoading(false);
      },
    });
  };

  useEffect(() => {
    getProfileInfo();
  }, []);

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

  console.log({ profileInfo });

  return (
    <>
      {!isLoading && (
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
                  value={profileInfo?.Name}
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
                  value={profileInfo?.Email}
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
                  value={profileInfo?.Phone}
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
      )}
      {isLoading && <Suspense />}
    </>
  );
};

export default UpdateProfile;
