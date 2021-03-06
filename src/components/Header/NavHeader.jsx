import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../../Service/DataService";
import {
  urlCategoryWiseRoute,
  urlSubCategoryWiseRoute,
} from "../../Service/UrlService";
import NavLinkMenus from "./NavLinkMenus";

const NavHeader = () => {
  const navHeaderRef = useRef();
  const [showCategory, setShowCategory] = useState(false);
  const getMainCategories = getCategories();

  const categoryTogglerOpenHandler = () => {
    setShowCategory(true);
  };
  const categoryTogglerCloseHandler = () => {
    setShowCategory(false);
  };

  // const categoryTouchedHandler = () => {
  //   setShowCategory((prevState) => !prevState);
  // };
  // useEffect(() => {
  //   if (navHeaderRef.current !== undefined) {
  //     navHeaderRef.current.addEventListener("mouseover", (evt) => {
  //       setShowCategory(true);
  //     });
  //     navHeaderRef.current.addEventListener("mouseout", (evt) => {
  //       setShowCategory(false);
  //     });
  //   }
  // }, []);
  return (
    <div id="nav-top-menu" class="nav-top-menu home">
      <div class="container-fluid custom-nav-container">
        <div class="row">
          {/* <!-- desktop varsion --> */}
          <div
            id="box-vertical-megamenus"
            class="nav_top_category_container nav_top_category_container-desktop col-sm-3"
            onMouseEnter={categoryTogglerOpenHandler}
            onMouseLeave={categoryTogglerCloseHandler}
          >
            <div class="box-vertical-megamenus" style={{ left: "0px" }}>
              <h4 class="title">
                <span class="title-menu">Categories</span>
                <span class="btn-open-mobile pull-right home-page">
                  <i class="fa fa-bars"></i>
                </span>
              </h4>
              {/* //vertical manu component there  */}
              {showCategory && (
                <div class="vertical-menu-content is-home">
                  <ul
                    id="category_left_menu"
                    class="vertical-menu-list"
                    style={{ display: "block" }}
                  >
                    {getMainCategories.map((item) => {
                      const getChildCategories = getCategories(item.id);
                      // const getCatImage =
                      return (
                        <li>
                          <Link
                            class="parent"
                            to={urlCategoryWiseRoute() + item.id}
                          >
                            <img
                              class="icon-menu normal-img"
                              alt="Lazz"
                              src={item.img}
                            />
                            <img
                              class="icon-menu hover-img"
                              alt="Lazz"
                              src={item.hovImg}
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
                                            urlSubCategoryWiseRoute() + child.id
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
