import React from "react";
import MiddleHeader from "./MiddleHeader";
import NavHeader from "./NavHeader";
import TopHeader from "./TopHeader";

const HeaderParent = () => {
  return (
    <div id="header" class="header header-new">
      <TopHeader />
      <MiddleHeader />
      <NavHeader />
    </div>
  );
};

export default HeaderParent;
