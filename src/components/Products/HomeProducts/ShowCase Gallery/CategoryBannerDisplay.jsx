import React from "react";
import { Link } from "react-router-dom";

const CategoryBannerDisplay = () => {
  return (
    <div className="banner_image_category">
      <Link to={"/hello slider"}>
      <img src="/Contents/assets/image/LazzMalik.jpg" alt="" />
      </Link>
      
    </div>
  );
};

export default CategoryBannerDisplay;
