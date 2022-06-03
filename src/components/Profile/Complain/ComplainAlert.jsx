import React from "react";

const ComplainAlert = ({ Template, closeModal, content }) => {
  return (
    <div class="order-success-modal">
      <div id="demo-modal5" class="modal">
        <div class="modal__content">
          <div class="login-main-area">
            <div
              class="login-info-from"
              style={{
                padding: "32px 0",
                textAlign: "center",
                color: "#016449",
                fontWeight: "bold",
              }}
            >
              {Template && <Template></Template>}

              {content && <>{content}</>}
            </div>
          </div>
          <a href onClick={closeModal} class="modal__close">
            &times;
          </a>
        </div>
      </div>
    </div>
  );
};

export default ComplainAlert;
