import React, { useCallback, useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import {
  GET_REVIEW,
  GET_REVIEW_BY_PRODUCT,
  POST_REVIEW_PRODUCT,
} from "../../../lib/endpoints";
import { paramsUrlGenerator } from "../../../lib/utilities";
import { http } from "../../../Service/httpService";
import authContext from "../../../store/auth-context";
import AuthenticationModalBody from "../../Authentication/AuthenticationModalBody";
import LoginModal from "../../Authentication/LoginModal";
import Paginator from "../../Paginators/Paginators";

const ProductInfoTabs = ({
  clickedReviewHandler,
  reviewClickedHandler,
  productDetails,
}) => {
  const authCtx = useContext(authContext);
  const { id } = useParams();
  const ref = useRef(null);
  const refAutoFocus = useRef();
  const [isActiveDetails, setIsActiveDetails] = useState(true);
  // const [isActiveInformation, setIsActiveInformation] = useState(false);
  const [isActiveReview, setIsActiveReview] = useState(false);
  const [review, setReview] = useState("");
  const [reviewTouched, setReviewTouched] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [reviewValid, setReviewValid] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [allReviews, setAllReviews] = useState({
    items: [],
    totalCount: 0,
    count: 0,
  });
  const [params, setParams] = useState({
    isDescending: false,
    pageNumber: 1,
    pageSize: 5,
  });

  const detailsActiveHandler = () => {
    setIsActiveDetails(true);
    // setIsActiveInformation(false);
    setIsActiveReview(false);
  };
  const closeAuthModalHandler = () => {
    setLoginModal((prevState) => !prevState);
  };
  const reviewTouchedHandler = () => {
    setReviewTouched(true);
  };
  const pageChangeHandler = (page) => {
    setParams((prevState) => ({ ...prevState, pageNumber: page }));
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
    if (!authCtx.isLoggedIn) {
      setLoginModal(true);
      return;
    }
    setClicked(true);
    if (review.length > 0) {
      http.post({
        url: POST_REVIEW_PRODUCT,
        payload: {
          ProductId: id,
          Content: review,
        },
        before: () => {},
        successed: (res) => {
          setAllReviews((prevState) => ({
            ...prevState,
            items: [res.Data, ...prevState.items],
            totalCount: prevState.totalCount + 1,
          }));
          setReview("");
          setClicked(false);
          setReviewTouched(false);
          setReviewValid(false);
        },
        failed: () => {},
      });
    }
  };

  const getReview = useCallback((paramsUrl) => {
    http.post({
      url: GET_REVIEW_BY_PRODUCT + paramsUrl,
      payload: {
        filter: [
          {
            field: "ProductId",
            value: id,
            operation: 0,
          },
        ],
      },
      before: () => {},
      successed: (res) => {
        setAllReviews({
          items: res.Data.Data,
          totalCount: res.Data.Total,
          count: res.Data.Data?.length ?? 0,
        });
      },
      failed: () => {},
      always: () => {},
    });
  }, []);

  useEffect(() => {
    const paramsUrl = paramsUrlGenerator(params);
    getReview(paramsUrl);
  }, [getReview, params]);

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

  useEffect(() => {
    if (clicked) {
      if (
        (reviewTouched && review.length === 0) ||
        (!reviewTouched && review.length === 0)
      ) {
        setReviewValid(true);
      } else setReviewValid(false);
    }
  }, [clicked, review.length, reviewTouched]);

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
                    onBlur={reviewTouchedHandler}
                  />
                  {reviewValid && (
                    <div class="alert alert-error">
                      Cant't Post Empty Review.
                    </div>
                  )}
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
            <div class="comment_container">
              {allReviews.items.map((item) => (
                <div className="comment-single-item">
                  <div className="item-img">
                    <img
                      src="/Contents/assets/image/user.png"
                      alt="img"
                      srcset=""
                    />
                  </div>
                  <div className="item-reply-box">
                    <div className="commenter-name">
                      {item.Customer !== null ? item.Customer : "Customer"}
                    </div>
                    <div className="commenter-comment">
                      <p>{item.Content}</p>
                    </div>
                  </div>
                </div>
              ))}

              <Paginator
                items={allReviews.totalCount}
                pageItems={params.pageSize}
                startPage={params.pageNumber}
                onPageChange={pageChangeHandler}
              />
            </div>
          </div>
        )}
      </div>
      {loginModal && (
        <AuthenticationModalBody
          Template={LoginModal}
          closeModal={closeAuthModalHandler}
        />
      )}
    </div>
  );
};

export default ProductInfoTabs;
