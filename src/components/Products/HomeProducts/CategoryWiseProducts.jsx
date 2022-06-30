import React from "react";
import { Link } from "react-router-dom";
import {
  getCategories,
  getProducts,
  productTypes,
} from "../../../Service/DataService";
import appData from "../../../Service/DataSource/appData";
import { urlSubCategoryWiseRoute } from "../../../Service/UrlService";
import Slider from "../../utilities/Slider";
import ProductsInfoModel from "../ProductsInfoModel";
import CategoryBannerDisplay from "./ShowCase Gallery/CategoryBannerDisplay";

const CategoryWiseProducts = () => {
  const options = {
    rewind: true,
    type: "slide",
    drag: "free",
    autoplay: false,
    rewindSpeed: 1000,
    speed: 1000,
    pauseOnHover: true,
    perPage: 5,
    width: "100%",
    breakpoints: {
      375: {
        perPage: 2,
      },
      576: {
        perPage: 2,
      },
      991: {
        perPage: 3,
      },
      992: {
        perPage: 3,
      },
      1024: {
        perPage: 4,
      },
      1200: {
        perPage: 5,
      },
    },
    autoScroll: {
      speed: 1,
    },
  };
  const options2 = {
    rewind: true,
    type: "loop",
    autoplay: true,
    rewindSpeed: 1000,
    speed: 500,
    pauseOnHover: false,
    width: "100%",
  };
  const Banner = [
    {
      id: 1,
      image: "/Contents/assets/image/banner1.jpg",
    },
    {
      id: 2,
      image: "/Contents/assets/image/banner2.jpg",
    },
  ];
  // const getCategory = getCategories();
  // const getChildCategories = getCategories(getCategory[0].id);
  // const getSpecialProducts = getProducts(productTypes.special);
  const getCategory = appData.BottomHeader;
  const findOnlyVisibleProduct = getCategory[0].dropDownCategoryItem.filter(
    (item) => item.visible === true
  );
  return (
    <>
      <section class="product-main-area">
        <div class="container_product">
          {findOnlyVisibleProduct.map((item) => {
            const getProduct = appData.categoryProducts.filter(
              (item2) => item2.category_id === item.categoryId
            );
            console.log({getProduct})
            return (
              <div className="product_scroll_container">
                {/* THis commented lines are essential  */}

                {/* <div className="banner_image_category">
                  <Link to="/helloImage">
                    <img src="/Contents/assets/image/LazzMalik.jpg" alt="" />
                  </Link>
                  <Link to="/omgImage">
                    <img src="/Contents/assets/image/LazzMalik.jpg" alt="" />
                  </Link>
                </div>
                <div className="banner_image_category_vertical">
                  <Link to={"/hello vertical image"}>
                    <img src="/Contents/assets/image/LazzMalik.jpg" alt="" />
                  </Link>
                  <Link to={"/hello vertical image"}>
                    <img src="/Contents/assets/image/LazzMalik.jpg" alt="" />
                  </Link>
                  <Link to={"/hello vertical image"}>
                    <img src="/Contents/assets/image/LazzMalik.jpg" alt="" />
                  </Link>
                </div>
                <Slider
                  Template={CategoryBannerDisplay}
                  options={options2}
                  data={Banner}
                /> */}

                <div class="common-heading">
                  <h1>{item.categoryName}</h1>
                  <span>view All</span>
                </div>
                <div class="spices-auto-scroll mt-20">
                  <div class="slide-track splide__track product-main-flex">
                    <ul class="splide__list">
                      <Slider
                        options={options}
                        Template={ProductsInfoModel}
                        data={getProduct}
                      />
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default CategoryWiseProducts;
