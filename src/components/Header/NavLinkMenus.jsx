import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import {
  urlAboutRoute,
  urlBranchLocationRoute,
  urlCarrerRoute,
  urlContactRoute,
  urlGalleryRoute,
  urlHomeRoute,
  urlRequestOrderRoute,
  urlReviewRoute,
  urlSpecialOfferRoute,
} from "../../Service/UrlService";

const NavLinkMenus = () => {
  const ref = useRef();
  const navLinksData = [
    {
      text: "Home",
      to: urlHomeRoute(),
    },
    {
      text: "Request Order",
      to: urlRequestOrderRoute(),
    },
    {
      text:"Special Offer",
      to:urlSpecialOfferRoute(),
    },
    {
      text: "Branch & Location",
      to: urlBranchLocationRoute(),
    },
    {
      text: "Review",
      to: urlReviewRoute(),
    },
    // {
    //   text: "Carrer",
    //   to: urlCarrerRoute(),
    // },
    {
      text: "Gallery",
      to: urlGalleryRoute(),
    },
    {
      text: "About Us",
      to: urlAboutRoute(),
    },
    {
      text: "Contact Us",
      to: urlContactRoute(),
    },
  ];
  return (
    <div id="navbar" class="navbar-collapse collapse">
      <ul class="nav navbar-nav">
        {navLinksData.map((links) => (
          <li className={"navItem"} ref={ref}>
            {/* <span></span> */}
            <NavLink
              to={links.to}
              exact
              activeStyle={{
                textDecoration:"underline"
              }}
            >
              {links.text}
            </NavLink>
          </li>
        ))}
        {/* <li class="active">
          <span></span>
          <a href="https://www.lazzpharma.com/">Home</a>
        </li> */}
      </ul>
    </div>
  );
};

export default NavLinkMenus;
