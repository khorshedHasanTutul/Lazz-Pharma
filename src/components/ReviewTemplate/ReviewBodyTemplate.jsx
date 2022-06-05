import { click } from "@testing-library/user-event/dist/click";
import React, {
  Fragment,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { GET_REVIEW, POST_REVIEW } from "../../lib/endpoints";
import { paramsUrlGenerator } from "../../lib/utilities";
import { http } from "../../Service/httpService";
import authContext from "../../store/auth-context";
import AuthenticationModalBody from "../Authentication/AuthenticationModalBody";
import LoginModal from "../Authentication/LoginModal";
import Paginator from "../Paginators/Paginators";
import Suspense from "../Suspense/Suspense";
import ReviewList from "./ReviewList";

const ReviewBodyTemplate = () => {
  const authCtx = useContext(authContext);
  const [review, setReview] = useState("");
  const [visibleLogInModal, setVisibleLogInModal] = useState(false);
  const [reviewPressed, setReviewPressed] = useState(false);
  const [reviewIsTouched, setReviewIsTouched] = useState(false);
  const [reviewValid, setReviewValid] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [isGetting, setIsGetting] = useState(false);
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

  const postSubmitHandler = () => {
    setClicked(true);
    setReviewPressed(true);
    if (authCtx.isLoggedIn !== true) {
      setVisibleLogInModal(true);
      return;
    }
    if (review.length > 0) {
      http.post({
        url: POST_REVIEW,
        payload: {
          Content: review,
          ActivityId: "00000000-0000-0000-0000-000000000000",
        },
        before: () => {
          setIsGetting(true);
        },
        successed: (res) => {
          // later optimized this one
          // setAllReviews((prevState) => [
          //   {
          //     ...prevState,
          //     items: prevState.items.push(res.Data.Data),
          //     totalCount: prevState.totalCount + 1,
          //     count: prevState.count + 1,
          //   },
          // ]);
          setReview("");
          setClicked(false);
          setReviewValid(false);
          setReviewIsTouched(false);
          const paramsUrl = paramsUrlGenerator(params);
          getReviews(paramsUrl);
          setIsGetting(false);
        },
        failed: () => {
          setIsGetting(true);
        },
        always: () => {
          setIsGetting(false);
        },
      });
    }
  };

  const reviewChangeHandler = ({ target }) => {
    setReview(target.value);
  };
  const reviewTouchedHandler = () => {
    setReviewIsTouched(true);
  };

  const closeModal = () => {
    setVisibleLogInModal((prevState) => !prevState);
  };
  const pageChangeHandler = (page) => {
    setParams((prevState) => ({ ...prevState, pageNumber: page }));
  };

  const getReviews = useCallback((params) => {
    http.get({
      url: GET_REVIEW + params,
      before: () => {
        setIsGetting(true);
      },
      successed: (res) => {
        setAllReviews({
          items: res.Data.Data,
          totalCount: res.Data.Total,
          count: res.Data.Data?.length ?? 0,
        });
      },
      failed: () => {
        setIsGetting(false);
      },
      always: () => {
        setIsGetting(false);
      },
    });
  }, []);

  useEffect(() => {
    if (clicked) {
      if (
        (reviewIsTouched && review.length === 0) ||
        (!reviewIsTouched && review.length === 0)
      ) {
        setReviewValid(true);
      } else setReviewValid(false);
    }
  }, [clicked, reviewIsTouched, review.length]);

  useEffect(() => {
    const paramsUrl = paramsUrlGenerator(params);
    getReviews(paramsUrl);
  }, [params, getReviews]);

  return (
    <Fragment>
      <div class="">
        <div
          class="product-comments-block-tab"
          style={{ maxWidth: "800px", margin: "0 auto" }}
        >
          <div class="new_comment_container" style={{ marginBottom: "15px" }}>
            <div class="row">
              <div class="col-md-8">
                <input
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
                  <div class="alert alert-error">Post can't be empty.</div>
                )}
                {reviewIsTouched && review.length === 0 && !reviewValid && (
                  <div class="alert alert-error">Post can't be empty.</div>
                )}
              </div>
              <div class="col-md-4">
                <button
                  class="button form-control"
                  type="submit"
                  style={{ padding: "0px !important" }}
                  onClick={postSubmitHandler}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
          <p></p>
          <ReviewList list={allReviews.items} />
          <div class="load_more_container"></div>
          <Paginator
            items={allReviews.totalCount}
            pageItems={params.pageSize}
            startPage={params.pageNumber}
            onPageChange={pageChangeHandler}
          />
          {isGetting && <Suspense />}
        </div>
      </div>

      {visibleLogInModal && (
        <AuthenticationModalBody
          Template={LoginModal}
          closeModal={closeModal}
          reviewPressed={reviewPressed}
        />
      )}
    </Fragment>
  );
};

export default ReviewBodyTemplate;
