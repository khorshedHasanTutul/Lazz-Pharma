import React from "react";

const ContactBodyTemplate = () => {
  return (
    <div class="container">
      <h2>
        Please send your message below. We will get back to you at the earliest!
      </h2>
      <div class="row">
        <div id="form_container" class="col-md-9">
          <div class="col-sm-12 form-group">
            <div>
              <label>Your Message</label>
            </div>
            <div>
              <textarea
                class="form-control"
                style={{height: "25%"}}
                placeholder="Your Message"
                type="text"
              ></textarea>
            </div>
          </div>
          <div class="col-sm-4 form-group">
            <div>
              <label>Your Name</label>
            </div>
            <div>
              <input class="form-control" placeholder="Your Name" type="text" />
            </div>
          </div>
          <div class="col-sm-4 form-group">
            <div>
              <label>Your Mobile</label>
            </div>
            <div>
              <input
                class="form-control"
                placeholder="Your Mobile"
                type="text"
              />
            </div>
          </div>
          <div class="col-sm-4 form-group">
            <div>
              <label>Your Email (Optional)</label>
            </div>
            <div>
              <input
                class="form-control"
                placeholder="Your Email (Optional)"
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
        <div class="col-md-3">
          <h3 class="contact_info">
            Whatever You want, Let us Know
            <div class="row contact_info">
              <div class="col-sm-12 contact_info">
                <h4>Call Us:</h4>
                <p class="contact_info">+880258155933, 01319864049</p>
              </div>
              <div class="col-sm-12 contact_info">
                <h4>Email Us:</h4>
                <p class="contact_info">lazzcorporate@gmail.com</p>
              </div>
            </div>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ContactBodyTemplate;
