import React from "react";

import NavLinkMenus from "./NavLinkMenus";

const NavHeader = () => {
  return (
    <div id="nav-top-menu" class="nav-top-menu home">
      <div class="container-fluid custom-nav-container">
        <div class="row">
          {/* <!-- desktop varsion --> */}
          <div
            id="box-vertical-megamenus"
            class="nav_top_category_container nav_top_category_container-desktop col-sm-3"
          >
            <div class="box-vertical-megamenus" style={{ left: "0px" }}>
              <h4 class="title">
                <span class="title-menu">Categories</span>
                <span class="btn-open-mobile pull-right home-page">
                  <i class="fa fa-bars"></i>
                </span>
              </h4>
              {/* //vertical manu component there  */}
            </div>
          </div>
          {/* <!-- desktop varsion --> */}
          <div id="main-menu" class="col-sm-9 main-menu">
            <nav class="navbar navbar-default">
              <div class="container-fluid" style={{ padding: "0px" }}>
                <div class="navbar-header">
                  <button
                    type="button"
                    class="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#navbar"
                    aria-expanded="false"
                    aria-controls="navbar"
                    style={{
                      position: "absolute",
                      left: "15px",
                      textAlign: "left",
                      width: "90%",
                    }}
                  >
                    <i class="fa fa-bars" style={{ fontSize: "19px" }}></i>
                    <span class="Mobile_Menu"> MENU </span>
                  </button>
                </div>
                <NavLinkMenus />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavHeader;
