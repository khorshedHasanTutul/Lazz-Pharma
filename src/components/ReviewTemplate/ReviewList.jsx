import React from "react";

const ReviewList = ({list}) => {

  return (
    <div class="comment_container">
      {list.map((item) => (
        <div class="item">
          <div class="row">
            <div class="col ctr_img">
              <div class="img_container">
                <div class="img_round">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlGf1LsCO_POD_MWK0T40UPrQZfYOjgU0SvQ&usqp=CAU" />
                </div>
              </div>
            </div>
            <div class="col commnet-dettail_container">
              <div class="commnet-dettail">
                <div>
                  <a>
                    <strong>
                      {item.Customer !== null ? item.Customer : "Customer"}
                    </strong>
                  </a>
                  <div></div>
                </div>
                <div class="commnet-content">{item.Content}</div>
              </div>
              <div class="comment_event">
                <a class="comment_time col">
                  <em>21, Apr-2021</em>
                </a>
                {/* <a class="btn_like"> Like </a>
                    <a class="btn_unlike"> Unlike </a>
                    <a class="btn_reply"> Reply </a> */}
              </div>
              <div class="comment_reply_container"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
