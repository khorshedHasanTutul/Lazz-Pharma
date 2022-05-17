import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import {
  urlHomeRoute,
  urlOrderRoute,
  urlPrescriptionHistory,
  urlProfileAddressRoute,
  urlProfileComplain,
  urlProfileEditRoute,
  urlProfileRoute,
  urlRequestHistoryRoute,
  urlSpecialOfferRoute,
} from "../../../Service/UrlService";
import authContext from "../../../store/auth-context";

const SidebarLinks = () => {
  const authCtx = useContext(authContext);
  let history = useHistory();
  const logoutHandler = () => {
    authCtx.logout();
    history.push(urlHomeRoute());
  };
  return (
    <div class="profile-nav">
      <ul>
        <li class="">
          <NavLink
            activeClassName="active"
            to={urlProfileRoute() + urlOrderRoute()}
          >
            <i class="fa fa-angle-double-right" aria-hidden="true"></i>
            Order History
          </NavLink>
        </li>

        <li className="">
          <NavLink
            activeClassName="active"
            to={urlProfileRoute() + urlPrescriptionHistory()}
          >
            <i class="fa fa-angle-double-right" aria-hidden="true"></i>
            Prescription History
          </NavLink>
        </li>

        <li className="">
          <NavLink
            activeClassName="active"
            to={urlProfileRoute() + urlRequestHistoryRoute()}
          >
            <i class="fa fa-angle-double-right" aria-hidden="true"></i>
            Request History
          </NavLink>
        </li>

        <li>
          <NavLink
            activeClassName="active"
            to={urlProfileRoute() + urlProfileAddressRoute()}
            exact
          >
            <i class="fa fa-angle-double-right" aria-hidden="true"></i>
            Edit Address
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="active"
            to={urlProfileRoute() + urlSpecialOfferRoute()}
            exact
          >
            <i class="fa fa-angle-double-right" aria-hidden="true"></i>Special
            Offer
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="active"
            to={urlProfileRoute() + urlProfileEditRoute()}
            exact
          >
            <i class="fa fa-angle-double-right" aria-hidden="true"></i>Edit
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="active"
            to={urlProfileRoute() + urlProfileComplain()}
            exact
          >
            <i class="fa fa-angle-double-right" aria-hidden="true"></i>Submit
            Complain
          </NavLink>
        </li>
        <li>
          <a href onClick={logoutHandler}>
            <i class="fa fa-angle-double-right" aria-hidden="true"></i>Logout
          </a>{" "}
        </li>
      </ul>
    </div>
  );
};

export default SidebarLinks;