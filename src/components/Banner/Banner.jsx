import React from "react";
import Slider from "../utilities/Slider";
import BannerTemplate from "./BannerTemplate";

const Banner = () => {
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
      <div className="banner-area">
        <div className="container-fluid">
          <div className="row custom-slide-row">
            <div className="col-md-3"></div>
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
