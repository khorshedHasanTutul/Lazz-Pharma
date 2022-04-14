import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { getCategories } from "../../Service/DataService";
import {
  urlCategoryWiseRoute,
  urlHomeRoute,
  urlSubCategoryWiseRoute,
} from "../../Service/UrlService";
import Slider from "../utilities/Slider";
import BannerTemplate from "./BannerTemplate";

const Banner = () => {
  const { pathname } = useLocation();
  const getMainCategories = getCategories();
  const Banner = [
    {
      id: 1,
      image: "/Contents/assets/image/banner1.jpg",
    },
    {
      id: 2,
      image: "/Contents/assets/image/banner2.jpg",
    },
  ];
  const options = {
    rewind: true,
    type: "loop",
    autoplay: true,
    rewindSpeed: 1000,
    speed: 500,
    pauseOnHover: false,
    width: "100%",
  };
  return (
    <div>
      <div className="banner-area" >
        <div className="container-fluid">
          <div className="row custom-slide-row">
            <div
              id="box-vertical-megamenus"
              class="nav_top_category_container nav_top_category_container-desktop col-sm-3"
            >
              <div class="box-vertical-megamenus" style={{ left: "0px" }}>
                  {pathname === urlHomeRoute() && (
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

            <div className="col-md-9">
              <div className="banner-slider">
                <Slider
                  Template={BannerTemplate}
                  options={options}
                  data={Banner}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
