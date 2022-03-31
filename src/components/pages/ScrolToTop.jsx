import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrolToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  }, [pathname]);
  return null;
};

export default ScrolToTop;
