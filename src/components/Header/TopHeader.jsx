import React, { forwardRef } from "react";

const TopHeader = forwardRef((props,ref) => {
  return (
    <div class="header-top-area" ref={ref}>
      <div class="container-fluid">
        <div class="row top-header">
          <div class="top_header_content">
            <div class="col-sm-12 col-md-6 d-flex-res j-c-sb">
              <p
                class="fa fa-phone"
                // style={{paddingRight:"13px", paddingLeft:"13px"}}
              >
                <span class="info-wrap" style={{fontFamily: "sans-serif",paddingRight:"5px"}}>
                  {/* <a class="new-phon" href="tel:0258155933">
                    0258155933,
                  </a>{" "} */}
                  <a class="new-phon" href="tel:01319864049">
                    01319864049
                  </a>
                </span>
              </p>
              <p class="fa fa-envelope-o" style={{paddingRright: "10px"}}>
                <span style={{fontFamily: "sans-serif"}}>
                  <a
                    class="new-phon new-mail"
                    href="mailto:lazzcorporate@gmail.com"
                  >
                    lazzcorporate@gmail.com
                  </a>{" "}
                </span>
              </p>
            </div>
            <div class="col-md-6 col-sm-6 hide_on_mobile">
              <p class="fa pull-right" style={{fontFamily: "sans-serif"}}>
                First Ever Model Pharmacy in Bangladesh!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default TopHeader;
