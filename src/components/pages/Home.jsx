import React, { Fragment } from "react";
import Banner from "../Banner/Banner";
import HomeProducts from "../Products/HomeProducts/HomeProducts";

const Home = () => {
  return (
    <Fragment>
      <Banner />
      <HomeProducts />
    </Fragment>
  );
};

export default Home;
