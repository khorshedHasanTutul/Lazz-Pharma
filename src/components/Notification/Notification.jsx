import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GET_NOTIFICATION, NOTIFY_SEEN } from "../../lib/endpoints";
import { paramsUrlGenerator } from "../../lib/utilities";
import { http } from "../../Service/httpService";
import {
  urlHomeRoute,
  urlOrderDetailsRoute,
  urlOrderRoute,
  urlProfileRoute,
} from "../../Service/UrlService";
import Paginator from "../Paginators/Paginators";
import Suspense from "../Suspense/Suspense";
import classes from "./Notification.module.css";

const Notification = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [allNotification, setAllNotification] = useState({
    items: [],
    totalCount: 0,
    count: 0,
  });
  const [params, setParams] = useState({
    isDescending: false,
    pageNumber: 1,
    pageSize: 5,
  });

  const pageChangeHandler = (page) => {
    setParams((prevState) => ({ ...prevState, pageNumber: page }));
  };

  const getNotifications = useCallback((paramsUrl) => {
    http.get({
      url: GET_NOTIFICATION + paramsUrl,
      before: () => {
        setIsLoading(true);
      },
      successed: (res) => {
        setAllNotification({
          items: res.Data.Data,
          totalCount: res.Data.Total,
          count: res.Data.Data?.length ?? 0,
        });
        postSeenNotification();
        setIsLoading(false);
      },
      failed: () => {},
      always: () => {
        setIsLoading(false);
      },
    });
  }, []);

  const postSeenNotification = useCallback(() => {
    http.get({
      url: NOTIFY_SEEN + "00000000-0000-0000-0000-000000000000",
      before: () => {},
      successed: () => {},
      failed: () => {},
      always: () => {},
    });
  }, []);

  useEffect(() => {
    const paramsUrl = paramsUrlGenerator(params);
    getNotifications(paramsUrl);
  }, [params, getNotifications]);

  return (
    <div id={`body_parent container-fluid`}>
      <div id="body_content">
        <div class="columns-container">
          <div id="columns" class="container">
            <div class="breadcrumb clearfix">
              <Link to={urlHomeRoute()} class="home" title="Return to Home">
                Home
              </Link>
              <span class="navigation-pipe"> </span>
              <a href>Notification</a>
            </div>
          </div>
        </div>
        {!isLoading && (
          <div className="notification-content">
            {allNotification.items.length > 0 && (
              <div className={`${classes.notification__container}`}>
                {allNotification.items.map((item) => (
                  <div
                    className={`${classes.notification__single__item} ${classes.Notification_notification__single__item}`}
                  >
                    <Link
                      to={
                        urlProfileRoute() +
                        urlOrderDetailsRoute() +
                        item.ReferenceId
                      }
                    >
                      <p style={{ color: "white" }}>{item.Content}</p>
                    </Link>
                  </div>
                ))}
                <Paginator
                  items={allNotification.totalCount}
                  pageItems={params.pageSize}
                  startPage={params.pageNumber}
                  onPageChange={pageChangeHandler}
                />
              </div>
            )}
            {allNotification.items.length === 0 && (
              <div className={`${classes.empty__notification__list}`}>
                Notification list is empty. 😥
              </div>
            )}
          </div>
        )}

        {isLoading && <Suspense />}
      </div>
    </div>
  );
};

export default Notification;
