import React from "react";
import { NavLink } from "react-router-dom";

const NavLinkMenus = () => {
  const navLinksData = [
    {
      text: "Home",
      to: "/",
    },
    {
      text: "Order Us",
      to: "/order",
    },
    {
      text: "Branch & Location",
      to: "/branch",
    },
    {
      text: "Review",
      to: "/review",
    },
    {
      text: "Carrer",
      to: "/carrer",
    },
    {
      text: "Gallery",
      to: "/gallery",
    },
    {
      text: "About Us",
      to: "/about",
    },
    {
      text: "Contact Us",
      to: "/contact",
    },
  ];
  return (
    <div id="navbar" class="navbar-collapse collapse">
      <ul class="nav navbar-nav">
        {navLinksData.map((links) => (
          <li>
            <span></span>
            <NavLink to={links.to}>{links.text}</NavLink>
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
