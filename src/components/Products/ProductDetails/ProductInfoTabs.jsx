import React, { useCallback, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { POST_REVIEW_PRODUCT } from "../../../lib/endpoints";
import { http } from "../../../Service/httpService";

const ProductInfoTabs = ({
  clickedReviewHandler,
  reviewClickedHandler,
  productDetails,
}) => {
  const { id } = useParams();
  const ref = useRef(null);
  const refAutoFocus = useRef();
  const [isActiveDetails, setIsActiveDetails] = useState(true);
  // const [isActiveInformation, setIsActiveInformation] = useState(false);
  const [isActiveReview, setIsActiveReview] = useState(false);
  const [review, setReview] = useState("");
  const [getReviews, setGetReviews] = useState([]);

  const detailsActiveHandler = () => {
    setIsActiveDetails(true);
    // setIsActiveInformation(false);
    setIsActiveReview(false);
  };

  // const informationActiveHandler = () => {
  //   setIsActiveDetails(false);
  //   setIsActiveInformation(true);
  //   setIsActiveReview(false);
  // };

  const reviewActiveHandler = () => {
    setIsActiveDetails(false);
    // setIsActiveInformation(false);
    setIsActiveReview(true);
  };
  const reviewChangeHandler = ({ target }) => {
    setReview(target.value);
  };
  const submitReviewHandler = () => {
    if (review.length > 0) {
      http.post({
        url: POST_REVIEW_PRODUCT,
        payload: {
          ProductId: id,
          Content: review,
        },
        before: () => {},
        successed: (res) => {
          setReview("");
        },
        failed: () => {},
      });
    }
  };

  useEffect(() => {
    if (clickedReviewHandler) {
      reviewActiveHandler();
      reviewClickedHandler();
    }
  }, [clickedReviewHandler, reviewClickedHandler]);

  useEffect(() => {
    if (isActiveReview) {
      refAutoFocus.current.focus();
    }
  }, [isActiveReview]);

  useEffect(() => {
    if (isActiveDetails) {
      ref.current.classList.add("active");
    } else {
      ref.current.classList.remove("active");
    }
    // if (isActiveInformation) {
    //   ref.current.nextElementSibling.classList.add("active");
    // } else {
    //   ref.current.nextElementSibling.classList.remove("active");
    // }
    if (isActiveReview) {
      ref.current.parentNode.childNodes[1].classList.add("active");
    } else {
      ref.current.parentNode.childNodes[1].classList.remove("active");
    }
  }, [isActiveDetails, isActiveReview]);

  return (
    <div class="product-tab">
      <ul class="nav-tab">
        <li onClick={detailsActiveHandler} ref={ref}>
          <a href data-toggle="tab">
            Product Details
          </a>
        </li>
        {/* <li onClick={informationActiveHandler}>
          <a href data-toggle="tab">
            Information
          </a>
        </li> */}
        <li onClick={reviewActiveHandler}>
          <a href data-toggle="tab">
            Reviews
          </a>
        </li>
      </ul>
      <div class="tab-container" style={{ position: "relative" }}>
        {isActiveDetails && (
          <div class="tab-panel" style={{ position: "inherit" }}>
            <p>
              {productDetails?.details && productDetails.details}
              The Information Provided Here Is For Informational Purposes Only.
              This May Not Cover All Possible Side Effects, Drug Interactions Or
              Warnings Or Alerts. Please Consult Your Doctor And Discuss All
              Your Queries Related To Any Disease Or Medicine. We Intend To
              Support, Not Replace, The Doctor-Patient Relationship.
            </p>
          </div>
        )}

        {/* {isActiveInformation && (
          <div class="tab-panel " style={{ position: "inherit" }}>
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <td width="200">Company</td>
                  <td>ZUELLIG PHARMA</td>
                </tr>
                <tr>
                  <td>Generic Name</td>
                  <td> DEVICE </td>
                </tr>
                <tr>
                  <td>Category</td>
                  <td> DEVICE </td>
                </tr>
                <tr>
                  <td>Strength</td>
                  <td> . </td>
                </tr>
                <tr>
                  <td>Unit Type</td>
                  <td> PCS </td>
                </tr>
              </tbody>
            </table>
          </div>
        )} */}

        {isActiveReview && (
          <div class="product-comments-block-tab">
            <div class="new_comment_container">
              <div class="row">
                <div class="col-md-8">
                  <input
                    ref={refAutoFocus}
                    data-binding="Text"
                    class="input form-control"
                    placeholder="Post Your Review Here"
                    type="text"
                    data-type="string"
                    value={review}
                    onChange={reviewChangeHandler}
                  />
                </div>
                <div class="col-md-4" onClick={submitReviewHandler}>
                  <button
                    class="button form-control"
                    type="submit"
                    style={{ padding: "0px !important" }}
                  >
                    {" "}
                    Post
                  </button>
                </div>
              </div>
            </div>
            <p> </p>
            <div class="comment_container"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductInfoTabs;
