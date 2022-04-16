import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { getCategories } from "../../Service/DataService";
import {
  urlCategoryWiseRoute,
  urlHomeRoute,
  urlSubCategoryWiseRoute,
} from "../../Service/UrlService";

import NavLinkMenus from "./NavLinkMenus";

const NavHeader = () => {
  const [showCategory, setShowCategory] = useState(false);
  const getMainCategories = getCategories();
  const categoryTouchedHandler = () => {
    setShowCategory(prevState => !prevState);
  };
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
              <h4 class="title" onClick={categoryTouchedHandler}>
                <span class="title-menu">Categories</span>
                <span class="btn-open-mobile pull-right home-page">
                  <i class="fa fa-bars"></i>
                </span>
              </h4>
              {/* //vertical manu component there  */}
              <div
                id="box-vertical-megamenus"
                class="nav_top_category_container nav_top_category_container-desktop col-md-0 col-lg-3"
              >
                <div class="box-vertical-megamenus" style={{ left: "0px" }}>
                  {showCategory && (
                    <div class="vertical-menu-content is-home">
                      <ul
                        id="category_left_menu"
                        class="vertical-menu-list"
                        style={{ display: "block" }}
                      >
                        {getMainCategories.map((item) => {
                          const getChildCategories = getCategories(item.id);
                          return (
                            <li>
                              <Link
                                class="parent"
                                to={urlCategoryWiseRoute() + item.id}
                              >
                                <img
                                  class="icon-menu normal-img"
                                  alt="Lazz"
                                  src="./Contents/assets/image/medicine.png"
                                />
                                <img
                                  class="icon-menu hover-img"
                                  alt="Lazz"
                                  src="./Contents/assets/image/medicine-hover.png"
                                />
                                {item.name}
                              </Link>
                              {getChildCategories.length > 0 && (
                                <div class="vertical-dropdown-menu">
                                  {/* <a href></a> */}
                                  <div class="vertical-groups col-sm-12">
                                    <div class="mega-group col-sm-12">
                                      <ul class="group-link-default">
                                        {getChildCategories.map((child) => (
                                          <li>
                                            <Link
                                              to={
                                                urlSubCategoryWiseRoute() +
                                                child.id
                                              }
                                            >
                                              {child.name}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
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
