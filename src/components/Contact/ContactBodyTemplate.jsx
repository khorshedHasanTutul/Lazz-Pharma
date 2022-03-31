import React from "react";

const ContactBodyTemplate = () => {
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
              ></textarea>
            </div>
          </div>
          <div class="col-sm-4 form-group">
            <div>
              <label>Name</label>
            </div>
            <div>
              <input class="form-control" placeholder="Name" type="text" />
            </div>
          </div>
          <div class="col-sm-4 form-group">
            <div>
              <label>Mobile</label>
            </div>
            <div>
              <input
                class="form-control"
                placeholder="Mobile"
                type="text"
              />
            </div>
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
              />
            </div>
          </div>
          <div class="col-sm-12 text-right form-group">
            <button
              class="External_Block_Button"
              style={{width: "20%", fontSize: "18px", padding: "1%"}}
              type="button"
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
                <p class="contact_info"><a href="tel:+880258155933">+880258155933</a>, <a href="tel:01319864049">01319864049</a></p>
              </div>
              <div class="col-sm-12 contact_info">
                <h4>Email Us:</h4>
                <p class="contact_info"><a href="mailto:lazzcorporate@gmail.com">lazzcorporate@gmail.com</a></p>
              </div>
            </div>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ContactBodyTemplate;
