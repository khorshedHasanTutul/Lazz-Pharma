import React from "react";
import { Link } from "react-router-dom";
import {
  getCategories,
  getProducts,
  productTypes,
} from "../../../Service/DataService";
import { urlSubCategoryWiseRoute } from "../../../Service/UrlService";
import ProductsInfoModel from "../ProductsInfoModel";

const CategoryWiseProducts = () => {
  const getCategory = getCategories();
  const getChildCategories = getCategories(getCategory[0].id);
  const getSpecialProducts = getProducts(productTypes.special);
  return (
    <>
      <div class="tcontainerxxx">
        {/* <!-- desktop varsion  Mobile--> */}
        <div
          id="box-vertical-megamenus"
          class="nav_top_category_container nav_top_category_container-mobile col-sm-3"
        >
          <div class="box-vertical-megamenus" style={{ left: "0px" }}>
            <h4 class="title">
              <span class="title-menu">
                <i class="fa fa-bars"></i> {getCategory[0].name}
              </span>
              <span class="btn-open-mobile pull-right home-page"></span>
            </h4>
            <div class="vertical-menu-content is-home">
              <ul
                id="category_left_menu"
                class="vertical-menu-list"
                style={{ display: "block" }}
              >
                {getChildCategories.map((item) => (
                  <li>
                    <Link
                      class="parent"
                      href="https://www.lazzpharma.com/ProductCategoryDetails/Index?Id=05554363-1502-48cc-90f5-96f2ffff41e2"
                    >
                      <img
                        class="icon-menu normal-img"
                        alt="Lazz"
                        src="./Contents/assets/image/b1.jpg"
                      />
                      <img
                        class="icon-menu hover-img"
                        alt="Lazz"
                        src="./Contents/assets/image/b1.jpg"
                      />
                      {item.name}
                    </Link>
                    {/* <div class="vertical-dropdown-menu">
                      <a href="https://www.lazzpharma.com/#"></a>
                      <div class="vertical-groups col-sm-12">
                        <div class="mega-group col-sm-12">
                          <ul class="group-link-default">
                            <li>
                              <a href="https://www.lazzpharma.com/ProductSubCategoryDetails/Index?Id=3e96268f-b249-420b-9f6a-1ac2a262caae">
                                Anxiety
                              </a>
                            </li>
                            <li>
                              <a href="https://www.lazzpharma.com/ProductSubCategoryDetails/Index?Id=3f193e98-7cf5-4638-9538-6da43fe7d7bd">
                                Cough &amp; Cold
                              </a>
                            </li>
                            <li>
                              <a href="https://www.lazzpharma.com/ProductSubCategoryDetails/Index?Id=c1096130-5738-4709-ae2c-c5bcfef90488">
                                Diabetes
                              </a>
                            </li>
                            <li>
                              <a href="https://www.lazzpharma.com/ProductSubCategoryDetails/Index?Id=d0afd5fd-256f-465e-bda5-6d0a4ec92f64">
                                Gastro
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div class="mega-group col-sm-12">
                          <ul class="group-link-default">
                            <li>
                              <a href="https://www.lazzpharma.com/ProductSubCategoryDetails/Index?Id=2d18e1e6-8a49-424a-adc9-0e5694d6a218">
                                Heart Failure
                              </a>
                            </li>
                            <li>
                              <a href="https://www.lazzpharma.com/ProductSubCategoryDetails/Index?Id=892eca27-09b4-434c-8ea2-ed8a580a0ff3">
                                Allergies
                              </a>
                            </li>
                            <li>
                              <a href="https://www.lazzpharma.com/ProductSubCategoryDetails/Index?Id=07d8f51e-4d1d-45f8-98c5-f03ee129c716">
                                Asthma
                              </a>
                            </li>
                            <li>
                              <a href="https://www.lazzpharma.com/ProductSubCategoryDetails/Index?Id=62ef5f3b-d21f-4d05-a270-f1249bae4dee">
                                Cancer
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div class="mega-group col-sm-12">
                          <ul class="group-link-default">
                            <li>
                              <a href="https://www.lazzpharma.com/ProductSubCategoryDetails/Index?Id=6f5f2495-d029-4f5f-ae48-f776b7216ee8">
                                Constipation
                              </a>
                            </li>
                            <li>
                              <a href="https://www.lazzpharma.com/ProductSubCategoryDetails/Index?Id=0d15fd60-a7f8-4207-b0f8-89d982353f39">
                                Diarrhoea
                              </a>
                            </li>
                            <li>
                              <a href="https://www.lazzpharma.com/ProductSubCategoryDetails/Index?Id=ff550e8e-c14a-43af-bf43-fd6f7d187d4f">
                                Fever
                              </a>
                            </li>
                            <li>
                              <a href="https://www.lazzpharma.com/ProductSubCategoryDetails/Index?Id=3769138a-acc2-405c-b079-f8466b7ffbd8">
                                Kidney
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div> */}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- desktop varsion Mobile --> */}
      </div>

      <div class="container-fluid tcontainer-medicien">
        <div class="category-featured electronic">
          <nav class="navbar nav-menu show-brand">
            <div class="container-fluid">
              <div id="selected_category" class="navbar-brand">
                <a href>{getCategory[0].name}</a>
              </div>
              <div class="collapse navbar-collapse">
                <ul id="sale_tab_button" class="nav navbar-nav">
                  <li class="active">
                    <a href="https://www.lazzpharma.com/#">Specials</a>
                  </li>
                  <li>
                    <a href="https://www.lazzpharma.com/#">Deals Of The Week</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div class="product-featured clearfix">
            <div class="row">
              <div class="col-sm-2 sub-category-wapper">
                <ul id="_shop_sub_category_list" class="sub-category-list">
                  {getChildCategories.map((item) => (
                    <li>
                      <Link to={urlSubCategoryWiseRoute()+item.id}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div class="col-sm-10 col-right-tab">
                <div class="product-featured-tab-content">
                  <div id="sale_tab_container" class="tab-container">
                    <div class="tab-panel active">
                      <div>
                        <ul class="product-list row">
                          {getSpecialProducts.map((item) => (
                            <ProductsInfoModel item={item} />
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryWiseProducts;
