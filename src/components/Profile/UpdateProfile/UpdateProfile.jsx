import React, { useCallback, useContext, useEffect, useState } from "react";
import {
  GET_USER_INFO,
  PROFILE_IMAGE_UPDATE,
  UPDATE_USER_INFO,
} from "../../../lib/endpoints";
import { BASE_URL, http } from "../../../Service/httpService";
import authContext from "../../../store/auth-context";
import Suspense from "../../Suspense/Suspense";

const UpdateProfile = ({ ProfileInfoHttp }) => {
  const [clicked, setClicked] = useState(false);
  const authCtx = useContext(authContext);
  const [profileInfo, setProfileInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  //name validation
  const [name, setName] = useState("");
  const [nameIsTouched, setNameIsTouched] = useState(false);
  const [nameIsValid, setNameIsValid] = useState(false);
  //  states
  const [email, setEmail] = useState("");
  const [files, setFiles] = useState();

  //image preview
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [isInvalidImg, setIsInvalidImg] = useState(false);

  const nameChangeHandler = ({ target }) => {
    setName(target.value);
  };
  const nameTouchedHandler = () => {
    setNameIsTouched(true);
  };

  const emailChangeHandler = ({ target }) => {
    setEmail(target.value);
  };
  const fileUploadHandler = ({ target }) => {
    const file = target.files[0];
    const allowedExtensions = ["jpg", "jpeg", "png"];
    const subs = file.name.toLowerCase().split(".");

    if (!allowedExtensions.includes(subs[subs.length - 1])) {
      setIsInvalidImg(true);
      return;
    }
    setFiles(file);
    if (!target.files || target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(file);
    setIsInvalidImg(false);
  };
  console.log({ name }, { email });

  //save button handler
  const saveButtonHandler = (e) => {
    e.preventDefault();
    setClicked(true);
    const file = files;

    if (
      (name !== profileInfo.Name || email !== profileInfo.Email) &&
      name.length > 0
    ) {
      updateProfileHttp(name, email);
    }
    if (file.name !== profileInfo.Image) {
      updateProfileImage(file);
    }
  };

  //update only profile image api call
  const updateProfileImage = useCallback((file) => {
    http.file({
      url: PROFILE_IMAGE_UPDATE,
      payload: {
        Img: file,
        UserId: authCtx.user.id,
        ActivityId: "00000000-0000-0000-0000-000000000000",
      },
      before: () => {},
      successed: (res) => {
        setPreview(`${BASE_URL}/${res.Data}`);
        ProfileInfoHttp();
      },
      failed: () => {},
      always: () => {},
    });
  }, []);
  console.log({ profileInfo });

  // update profile http api call
  const updateProfileHttp = useCallback((name, email) => {
    http.post({
      url: UPDATE_USER_INFO,
      payload: {
        UserId: authCtx.user.id,
        Name: name,
        Email: email,
      },
      before: () => {},
      successed: (res) => {
        getProfileInfo();
        ProfileInfoHttp();
      },
      failed: () => {},
      always: () => {},
    });
  }, []);

  // get profile info api call
  const getProfileInfo = () => {
    http.get({
      url: GET_USER_INFO,
      before: () => {
        setIsLoading(true);
      },
      successed: (res) => {
        setProfileInfo(res.Data.Customer);
        if (res.Data.Customer.Name !== null) {
          setName(res.Data.Customer.Name);
        }
        if (res.Data.Customer.Email !== null) {
          setEmail(res.Data.Customer.Email);
        }

        setPreview(`${BASE_URL}/${res.Data.Customer.Image}`);
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

  useEffect(() => {
    getProfileInfo();
  }, []);

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
                  required
                  value={name}
                  onChange={nameChangeHandler}
                  onBlur={nameTouchedHandler}
                />

                {nameIsValid && (
                  <div class="alert alert-error" style={{position:"absolute"}}>Name is required.</div>
                )}
                {nameIsTouched && name.length === 0 && !nameIsValid && (
                  <div class="alert alert-error"  style={{position:"absolute"}}>Name is required.</div>
                )}
              </div>
              <div class="custom-input">
                <label for="name">Email</label>
                <input
                  type="email"
                  name=""
                  id="name"
                  required
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
                  {isInvalidImg && (
                    <div class="alert alert-error"  style={{position:"absolute"}}>
                      Only JPG JPEG PNG format acceptable.
                    </div>
                  )}
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
