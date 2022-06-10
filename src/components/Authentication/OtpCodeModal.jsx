import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  CREATE_LOGIN,
  CREATE_REGISTRATION,
  GET_OTP,
  UPDATE_PASSWORD,
  VERIFY_OTP,
} from "../../lib/endpoints";
import { http } from "../../Service/httpService";
import { urlHomeRoute } from "../../Service/UrlService";
import authContext from "../../store/auth-context";

const OtpCodeModal = ({
  closeModal,
  closeLoginModalhandler,
  forgotPassPressed,
}) => {
  let history = useHistory();
  const [clicked, setClicked] = useState(false);
  const [isExistUser, setIsExistUser] = useState(false);
  const [otp, setOtp] = useState("");
  const authCtx = useContext(authContext);
  const getAuthCtxRegistrationValue = authCtx.getRegistrationValue;
  const [otpIsTouched, setOtpIsTouched] = useState(false);
  const [otpIsValid, setOtpIsValid] = useState(false);
  const [failedMessage, setFailedMessage] = useState(false);
  const [otpResend, setOtpResend] = useState(false);

  const otpTouchedHandler = () => {
    setOtpIsTouched(true);
  };
  const otpChangedHandler = ({ target }) => {
    setOtp(target.value);
    setFailedMessage(false);
    setIsExistUser(false);
  };

  useEffect(() => {
    if (clicked) {
      if (
        (otpIsTouched && otp.length === 0) ||
        (!otpIsTouched && otp.length === 0)
      ) {
        setOtpIsValid(true);
      } else setOtpIsValid(false);
    }
  }, [clicked, otp.length, otpIsTouched]);

  const submitHandler = (evt) => {
    //success code goes here
    evt.preventDefault();
    setClicked(true);
    setOtpResend(false);

    //if fullfil all condition then state update of this states
    if (otp.length !== 0) {
      if (forgotPassPressed) {
        http.post({
          url: VERIFY_OTP,
          payload: {
            Code: otp,
            Id: authCtx.userOtpId.id,
            ActivityId: "00000000-0000-0000-0000-000000000000",
          },
          before: () => {
            // setIsLoading(true);
          },
          successed: (data) => {
            http.post({
              url: UPDATE_PASSWORD,
              payload: {
                Name: "",
                Phone: getAuthCtxRegistrationValue.phone,
                Password: getAuthCtxRegistrationValue.password,
                OTPId: authCtx.userOtpId.id,
                ActivityId: "00000000-0000-0000-0000-000000000000",
              },
              before: () => {},
              successed: (data) => {
                http.post({
                  url: CREATE_LOGIN,
                  payload: {
                    UserName: getAuthCtxRegistrationValue.phone,
                    Password: getAuthCtxRegistrationValue.password,
                  },
                  before: () => {},
                  successed: (res) => {
                    authCtx.login({
                      id: res.Data.Id,
                      name: res.Data.Name,
                      token: res.Data.datacontent,
                      image: res.Data.Icon,
                      email: res.Data.Email,
                      phone: res.Data.Phone,
                    });
                    closeModal();
                    history.push(urlHomeRoute());
                  },
                  failed: () => {},
                  always: () => {},
                });
              },
              failed: () => {
                //
                setIsExistUser(true);
              },
              always: () => {},
            });
          },
          failed: (data) => {
            console.log(data);
            setFailedMessage(true);
          },
          always: () => {
            // setIsLoading(false);
          },
        });
      } else {
        http.post({
          url: VERIFY_OTP,
          payload: {
            Code: otp,
            Id: authCtx.userOtpId.id,
            ActivityId: "00000000-0000-0000-0000-000000000000",
          },
          before: () => {
            // setIsLoading(true);
          },
          successed: (data) => {
            http.post({
              url: CREATE_REGISTRATION,
              payload: {
                Name: "",
                Phone: getAuthCtxRegistrationValue.phone,
                Password: getAuthCtxRegistrationValue.password,
                OTPId: authCtx.userOtpId.id,
                ActivityId: "00000000-0000-0000-0000-000000000000",
              },
              before: () => {},
              successed: (data) => {
                http.post({
                  url: CREATE_LOGIN,
                  payload: {
                    UserName: getAuthCtxRegistrationValue.phone,
                    Password: getAuthCtxRegistrationValue.password,
                  },
                  before: () => {},
                  successed: (res) => {
                    authCtx.login({
                      id: res.Data.Id,
                      name: res.Data.Name,
                      token: res.Data.datacontent,
                      image: res.Data.Icon,
                      email: res.Data.Email,
                      phone: res.Data.Phone,
                    });
                    closeModal();
                    history.push(urlHomeRoute());
                  },
                  failed: () => {},
                  always: () => {},
                });
              },
              failed: () => {
                //
                setIsExistUser(true);
              },
              always: () => {},
            });
          },
          failed: (data) => {
            console.log(data);
            setFailedMessage(true);
          },
          always: () => {
            // setIsLoading(false);
          },
        });
      }
    }
  };
  const resendOtpHandler = (evt) => {
    evt.preventDefault();
    ///code goes here
    http.post({
      url: GET_OTP,
      payload: {
        ActivityId: "00000000-0000-0000-0000-000000000000",
        Phone: getAuthCtxRegistrationValue.phone,
      },
      before: () => {
        setOtpIsTouched(false);
        setOtpIsValid(false);
        setOtpResend(false);
      },
      successed: (res) => {
        //spinner off here
        authCtx.userOtpId.id = res.Id;
        setOtpResend(true);
      },
      failed: () => {},
      always: () => {},
      map: (data) => {
        return data;
      },
    });
  };
  return (
    <div class="login-main-area">
      <div class="login-info-from">
        <form>
          <h2>Please Enter Your Otp Code</h2>
          <i class="fa fa-spinner" aria-hidden="true"></i>
          <div class="login-info-inner-content">
            <div class="custom-input">
              <label for="mobile">Otp Code</label>
              <input
                type="text"
                name=""
                id="mobile"
                required
                value={otp}
                onChange={otpChangedHandler}
                onBlur={otpTouchedHandler}
              />
              {failedMessage && <div class="alert alert-error">Wrong OTP!</div>}
              {!forgotPassPressed && isExistUser && (
                <div class="alert alert-error">User already Exist!</div>
              )}
              {forgotPassPressed && isExistUser && (
                <div class="alert alert-error">User doesn't exist!</div>
              )}
              {otpIsValid && (
                <div class="alert alert-error">Otp is required.</div>
              )}
              {otpIsTouched && otp.length === 0 && !otpIsValid && (
                <div class="alert alert-error">Otp is required.</div>
              )}
            </div>
            <div class="login-submit">
              {/* <!-- <input type="submit" value="Next"> --> */}
              <a href onClick={submitHandler}>
                Next
              </a>
            </div>
          </div>
        </form>
      </div>
      <div class="dont-have-account">
        <p>Don't Receved Otp Code</p>
        <a href onClick={resendOtpHandler}>
          Resent
        </a>
      </div>
      {otpResend && (
        <div class="dont-have-account">
          <p style={{ color: "red" }}>OTP Code Send Successfully.</p>
        </div>
      )}
    </div>
  );
};

export default OtpCodeModal;
