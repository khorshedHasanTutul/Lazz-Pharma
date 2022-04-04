import React, { useEffect, useState } from "react";

const ContactBodyTemplate = () => {
  //send button state
  const [clicked, setClicked] = useState(false);

  //message State
  const [message, setMessage] = useState("");
  const [messageIsTouched, setMessageIsTouched] = useState(false);
  const [messageIsValid, setMessageIsValid] = useState(false);

  //name State
  const [name, setName] = useState("");
  const [nameIsTouched, setNameIsTouched] = useState(false);
  const [nameIsValid, setNameIsValid] = useState(false);

  //mobile state
  const [phone, setphone] = useState("");
  const [phoneIsTouched, setPhoneIsTouched] = useState(false);
  const [phoneIsValid, setPhoneIsValid] = useState(false);

  //email state
  const [email, setEmail] = useState("");
  const [emailIsTouched, setEmailIsTouched] = useState(false);
  const [emailIsValid, setEmailIsvalid] = useState(false);

  //Message Funcction
  const messageOnChangeHandler = ({ target }) => {
    setMessage(target.value);
  };
  const messageTouchedHandler = () => {
    setMessageIsTouched(true);
  };

  //Name Funcction
  const nameOnChangeHandler = ({ target }) => {
    setName(target.value);
  };
  const nameTouchedHandler = () => {
    setNameIsTouched(true);
  };

  //phone Funcction
  const phoneOnChangeHandler = ({ target }) => {
    setphone(target.value);
  };
  const phoneTouchedHandler = () => {
    setPhoneIsTouched(true);
  };

  //email functions
  const emailOnChangeHandler = ({ target }) => {
    setEmail(target.value);
  };
  const emailTouchedHandler = () => {
    setEmailIsTouched(true);
  };

  //send button Handler

  const sendOnClickedHandler = (evt) => {
    setClicked(true);
    evt.preventDefault();
    if (
      name.length !== 0 &&
      email.length !== 0 &&
      phone.length !== 0 &&
      message.length !== 0
    ) {
      //api post goes here
      setName("");
      setNameIsValid(false);
      setNameIsTouched(false);
      setEmail("");
      setEmailIsvalid(false);
      setEmailIsTouched(false);
      setphone("");
      setPhoneIsValid(false);
      setPhoneIsTouched(false);
      setMessage("");
      setMessageIsTouched(false);
      setMessageIsValid(false);
      setClicked(false);

      alert("Sent message successfully.");
    }
  };

  useEffect(() => {
    if (clicked) {
      if (
        (messageIsTouched && message.length === 0) ||
        (!messageIsTouched && message.length === 0)
      ) {
        setMessageIsValid(true);
      } else setMessageIsValid(false);

      if (
        (nameIsTouched && name.length === 0) ||
        (!nameIsTouched && name.length === 0)
      ) {
        setNameIsValid(true);
      } else setNameIsValid(false);

      if (
        (phoneIsTouched && phone.length === 0) ||
        (!phoneIsTouched && phone.length === 0)
      ) {
        setPhoneIsValid(true);
      } else setPhoneIsValid(false);

      if (
        (emailIsTouched && email.length === 0) ||
        (!emailIsTouched && email.length === 0)
      ) {
        setEmailIsvalid(true);
      } else setEmailIsvalid(false);
    }
  }, [
    message.length,
    messageIsTouched,
    nameIsTouched,
    name.length,
    phone.length,
    phoneIsTouched,
    email.length,
    emailIsTouched,
    clicked,
  ]);

  return (
    <div class="container">
      <h2 className="msg-blow">
        Please send your message below. We will get back to you at the earliest!
      </h2>
      <div class="row">
        <div id="form_container" class="col-md-7">
          <div class="col-sm-12 form-group">
            <div>
              <label>Message</label>
            </div>
            <div>
              <textarea
                class="form-control new-msg"
                placeholder="Message"
                type="text"
                value={message}
                onChange={messageOnChangeHandler}
                onBlur={messageTouchedHandler}
                required=""
              ></textarea>
              {messageIsValid && (
                <div class="alert alert-error">Message is required.</div>
              )}
              {messageIsTouched && message.length === 0 && !messageIsValid && (
                <div class="alert alert-error">Message is required.</div>
              )}
            </div>
          </div>
          <div class="col-sm-4 form-group">
            <div>
              <label>Name</label>
            </div>
            <div>
              <input
                class="form-control"
                placeholder="Name"
                type="text"
                onChange={nameOnChangeHandler}
                onBlur={nameTouchedHandler}
                value={name}
              />
            </div>
            {nameIsValid && (
              <div class="alert alert-error">Name is required.</div>
            )}
            {nameIsTouched && name.length === 0 && !nameIsValid && (
              <div class="alert alert-error">Name is required.</div>
            )}
          </div>
          <div class="col-sm-4 form-group">
            <div>
              <label>Phone</label>
            </div>
            <div>
              <input
                class="form-control"
                placeholder="Mobile"
                type="text"
                value={phone}
                onChange={phoneOnChangeHandler}
                onBlur={phoneTouchedHandler}
              />
            </div>
            {phoneIsValid && (
              <div class="alert alert-error">Phone is required.</div>
            )}
            {phoneIsTouched && phone.length === 0 && !phoneIsValid && (
              <div class="alert alert-error">Phone is required.</div>
            )}
          </div>
          <div class="col-sm-4 form-group">
            <div>
              <label>Email</label>
            </div>
            <div>
              <input
                class="form-control"
                placeholder="Email"
                type="text"
                value={email}
                onChange={emailOnChangeHandler}
                onBlur={emailTouchedHandler}
              />
            </div>
            {emailIsValid && (
              <div class="alert alert-error">Email is required.</div>
            )}
            {emailIsTouched && email.length === 0 && !emailIsValid && (
              <div class="alert alert-error">Email is required.</div>
            )}
          </div>
          <div class="col-sm-12 text-right form-group">
            <button
              class="External_Block_Button"
              style={{ width: "20%", fontSize: "18px", padding: "1%" }}
              type="button"
              onClick={sendOnClickedHandler}
            >
              SEND
            </button>
          </div>
        </div>

        <div class="col-md-5 contact-md">
          <h3 class="contact_info">
            <span>Whatever You want, Let us Know</span>
            <div class="row contact_info">
              <div class="col-sm-12 contact_info">
                <h4>Call Us:</h4>
                <p class="contact_info">
                  <a href="tel:+880258155933">+880258155933</a>,{" "}
                  <a href="tel:01319864049">01319864049</a>
                </p>
              </div>
              <div class="col-sm-12 contact_info">
                <h4>Email Us:</h4>
                <p class="contact_info">
                  <a href="mailto:lazzcorporate@gmail.com">
                    lazzcorporate@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ContactBodyTemplate;
