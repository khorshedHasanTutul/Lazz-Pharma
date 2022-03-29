import React from 'react'

const ReviewBodyTemplate = () => {
  return (
    <div class="">
        <div
          class="product-comments-block-tab"
          style={{maxWidth: "800px", margin: "0 auto"}}
        >
          <div class="new_comment_container" style={{marginBottom: "15px"}}>
            <div class="row">
              <div class="col-md-8">
                <input
                  data-binding="Text"
                  class="input form-control"
                  placeholder="Post Your Review Here"
                  type="text"
                  data-type="string"
                  max=""
                  min=""
                />
              </div>
              <div class="col-md-4">
                <button
                  class="button form-control"
                  type="submit"
                  style={{padding: "0px !important"}}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
          <p></p>
          <div class="comment_container">
            <div class="item">
              <div class="row">
                <div class="col ctr_img">
                  <div class="img_container">
                    <div class="img_round">
                      <img src="Lazz%20Pharma%20Limited_files/profile-user.png" />
                    </div>
                  </div>
                </div>
                <div class="col commnet-dettail_container">
                  <div class="commnet-dettail">
                    <div>
                      <a>
                        <strong>Md. Sabbir Rahman</strong>
                      </a>
                      <div></div>
                    </div>
                    <div class="commnet-content">
                      A class medicine store in Bangladesh........ Best wishes
                      for LazzPharma
                    </div>
                  </div>
                  <div class="comment_event">
                    <a class="comment_time col">
                      <em>21, Apr-2021</em>
                    </a>
                    <a class="btn_like"> Like </a>
                    <a class="btn_unlike"> Unlike </a>
                    <a class="btn_reply"> Reply </a>
                  </div>
                  <div class="comment_reply_container"></div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="row">
                <div class="col ctr_img">
                  <div class="img_container">
                    <div class="img_round">
                      <img src="Lazz%20Pharma%20Limited_files/profile-user.png" />
                    </div>
                  </div>
                </div>
                <div class="col commnet-dettail_container">
                  <div class="commnet-dettail">
                    <div>
                      <a>
                        <strong>Hasibul</strong>
                      </a>
                      <div></div>
                    </div>
                    <div class="commnet-content">
                      Service of LazzPharmar is outstanding!!!
                    </div>
                  </div>
                  <div class="comment_event">
                    <a class="comment_time col">
                      <em>13, Apr-2021</em>
                    </a>
                    <a class="btn_like"> Like </a>
                    <a class="btn_unlike"> Unlike </a>
                    <a class="btn_reply"> Reply </a>
                  </div>
                  <div class="comment_reply_container"></div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="row">
                <div class="col ctr_img">
                  <div class="img_container">
                    <div class="img_round">
                      <img src="Lazz%20Pharma%20Limited_files/profile-user.png" />
                    </div>
                  </div>
                </div>
                <div class="col commnet-dettail_container">
                  <div class="commnet-dettail">
                    <div>
                      <a>
                        <strong>Skail</strong>
                      </a>
                      <div></div>
                    </div>
                    <div class="commnet-content">Best Ecommerce site.</div>
                  </div>
                  <div class="comment_event">
                    <a class="comment_time col">
                      <em>12, Apr-2021</em>
                    </a>
                    <a class="btn_like"> Like </a>
                    <a class="btn_unlike"> Unlike </a>
                    <a class="btn_reply"> Reply </a>
                  </div>
                  <div class="comment_reply_container"></div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="row">
                <div class="col ctr_img">
                  <div class="img_container">
                    <div class="img_round">
                      <img src="Lazz%20Pharma%20Limited_files/profile-user.png" />
                    </div>
                  </div>
                </div>
                <div class="col commnet-dettail_container">
                  <div class="commnet-dettail">
                    <div>
                      <a>
                        <strong>Anik</strong>
                      </a>
                      <div></div>
                    </div>
                    <div class="commnet-content">
                      The best online Pharmacy store in Bangladesh with the
                      lowest prices
                    </div>
                  </div>
                  <div class="comment_event">
                    <a class="comment_time col">
                      <em>01, Mar-2021</em>
                    </a>
                    <a class="btn_like"> Like </a>
                    <a class="btn_unlike"> Unlike </a>
                    <a class="btn_reply"> Reply </a>
                  </div>
                  <div class="comment_reply_container"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="load_more_container"></div>
        </div>
      </div>
  )
}

export default ReviewBodyTemplate