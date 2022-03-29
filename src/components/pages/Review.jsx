import React from "react";
import ReviewBodyTemplate from "../ReviewTemplate/ReviewBodyTemplate";
import ReviewHeader from "../ReviewTemplate/ReviewHeader";

const Review = () => {
  return (
    <div id="body_content">
      <ReviewHeader />
      <ReviewBodyTemplate />
    </div>
  );
};

export default Review;
