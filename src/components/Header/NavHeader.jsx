import React from "react";
import { useLocation } from "react-router-dom";
import { urlHomeRoute } from "../../Service/UrlService";
import NavLinkMenus from "./NavLinkMenus";

const NavHeader = () => {
    const {pathname} = useLocation();
  return (
    <div id="nav-top-menu" class="nav-top-menu home">
      <div class="container-fluid">
        <div class="row">
          {/* <!-- desktop varsion --> */}
          <div
            id="box-vertical-megamenus"
            class="nav_top_category_container nav_top_category_container-desktop col-sm-3"
          >
            <div class="box-vertical-megamenus" style={{ left: "0px" }}>
              <h4 class="title">
                <span class="title-menu">Categories</span>
                <span class="btn-open-mobile pull-right home-page">
                  <i class="fa fa-bars"></i>
                </span>
              </h4>
              {
                  pathname===urlHomeRoute()&&(
                    <div class="vertical-menu-content is-home">
                    <ul
                      id="category_left_menu"
                      class="vertical-menu-list"
                      style={{ display: "block" }}
                    >
                      <li>
                        <a
                          class="parent"
                          href="https://www.lazzpharma.com/ProductCategoryDetails/Index?Id=05554363-1502-48cc-90f5-96f2ffff41e2"
                        >
                          <img
                            class="icon-menu normal-img"
                            alt="Lazz"
                            src="./Lazz Pharma Limited_files/medicine.png"
                          />
                          <img
                            class="icon-menu hover-img"
                            alt="Lazz"
                            src="img/medicine.png"
                          />
                          Medicine
                        </a>
                        <div class="vertical-dropdown-menu">
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
                        </div>
                      </li>
                      <li>
                        <a
                          class="parent"
                          href="https://www.lazzpharma.com/ProductCategoryDetails/Index?Id=f047ca0e-220e-4ea6-9c70-e596b5f70461"
                        >
                          <img
                            class="icon-menu normal-img"
                            alt="Lazz"
                            src="./Lazz Pharma Limited_files/medicine.png"
                          />
                          <img
                            class="icon-menu hover-img"
                            alt="Lazz"
                            src="img/medicine.png"
                          />
                          Surgical Product &amp; Medical Equipement
                        </a>
                        <div class="vertical-dropdown-menu">
                          <a href="https://www.lazzpharma.com/#"></a>
                          <div class="vertical-groups col-sm-12">
                            <div class="mega-group col-sm-12">
                              <ul class="group-link-default">
                                <li>
                                  <a href="https://www.lazzpharma.com/ProductSubCategoryDetails/Index?Id=da472152-f9fe-4783-aa29-fd62038a4c34">
                                    BLOOD PRESSURE MONITOR
                                  </a>
                                </li>
                                <li>
                                  <a href="https://www.lazzpharma.com/ProductSubCategoryDetails/Index?Id=3b12d133-665f-45f7-a44f-2cb7a8dbdc5e">
                                    Face Mask
                                  </a>
                                </li>
                                <li>
                                  <a href="https://www.lazzpharma.com/ProductSubCategoryDetails/Index?Id=f671f535-a265-44a0-924c-cff9507b4bb0">
                                    Pulse Oximeter
                                  </a>
                                </li>
                                <li>
                                  <a href="https://www.lazzpharma.com/ProductSubCategoryDetails/Index?Id=88b718ab-37d8-4dcf-91a5-ffbe60c9d017">
                                    Nebulizer
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <a
                          class="parent"
                          href="https://www.lazzpharma.com/ProductCategoryDetails/Index?Id=c497d766-17ad-44aa-97f9-a7b0d102de03"
                        >
                          <img
                            class="icon-menu normal-img"
                            alt="Lazz"
                            src="./Lazz Pharma Limited_files/medicine.png"
                          />
                          <img
                            class="icon-menu hover-img"
                            alt="Lazz"
                            src="img/medicine.png"
                          />
                          Personal Care
                        </a>
                        <div class="vertical-dropdown-menu">
                          <a href="https://www.lazzpharma.com/#"></a>
                          <div class="vertical-groups col-sm-12">
                            <div class="mega-group col-sm-12">
                              <ul class="group-link-default">
                                <li>
                                  <a href="https://www.lazzpharma.com/ProductSubCategoryDetails/Index?Id=ddb336c2-ad57-436a-baef-189fc8419ff6">
                                    Skin Care
                                  </a>
                                </li>
                                <li>
                                  <a href="https://www.lazzpharma.com/ProductSubCategoryDetails/Index?Id=b11220be-5901-400b-b520-6262cc37bc28">
                                    Skin Care (Bio derma)
                                  </a>
                                </li>
                                <li>
                                  <a href="https://www.lazzpharma.com/ProductSubCategoryDetails/Index?Id=620619f1-7b7b-45ed-bd42-8d42a0434583">
                                    Beauty Care
                                  </a>
                                </li>
                                <li>
                                  <a href="https://www.lazzpharma.com/ProductSubCategoryDetails/Index?Id=c34659f2-aec5-4613-bbe4-57bf576647ed">
                                    Eye &amp; Ear Care
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div class="mega-group col-sm-12">
                              <ul class="group-link-default">
                                <li>
                                  <a href="https://www.lazzpharma.com/ProductSubCategoryDetails/Index?Id=a55b5b13-6b8c-400e-be56-b25d8f186cb8">
                                    Hair Care
                                  </a>
                                </li>
                                <li>
                                  <a href="https://www.lazzpharma.com/ProductSubCategoryDetails/Index?Id=87d435a8-fa30-497c-ad2d-8d8d895ac7a4">
                                    Oral Care
                                  </a>
                                </li>
                                <li>
                                  <a href="https://www.lazzpharma.com/ProductSubCategoryDetails/Index?Id=67709349-95da-4ae6-ae6e-fb19f753ea7e">
                                    Food Supplements
                                  </a>
                                </li>
                                <li>
                                  <a href="https://www.lazzpharma.com/ProductSubCategoryDetails/Index?Id=22bcd352-056e-460e-b147-3124fa2195d6">
                                    Weight maintenance
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <a
                          class="parent"
                          href="https://www.lazzpharma.com/ProductCategoryDetails/Index?Id=ce1ecdeb-0766-451c-af37-f77b89a68e02"
                        >
                          <img
                            class="icon-menu normal-img"
                            alt="Lazz"
                            src="./Lazz Pharma Limited_files/medicine.png"
                          />
                          <img
                            class="icon-menu hover-img"
                            alt="Lazz"
                            src="img/medicine.png"
                          />
                          Food &amp; Toiletries
                        </a>
                        <div class="vertical-dropdown-menu">
                          <a href="https://www.lazzpharma.com/#"></a>
                          <div class="vertical-groups col-sm-12">
                            <div class="mega-group col-sm-12">
                              <ul class="group-link-default">
                                <li>
                                  <a href="https://www.lazzpharma.com/ProductSubCategoryDetails/Index?Id=abf6def7-ab3c-4ad5-bff7-9a03ae4b579d">
                                    Chocolate
                                  </a>
                                </li>
                                <li>
                                  <a href="https://www.lazzpharma.com/ProductSubCategoryDetails/Index?Id=2c6c1e50-9b6a-43fb-83c7-13fe5c2dcb1a">
                                    Biscuit
                                  </a>
                                </li>
                                <li>
                                  <a href="https://www.lazzpharma.com/ProductSubCategoryDetails/Index?Id=fa157ffe-21cc-47aa-b542-07e2ef32f847">
                                    Honey
                                  </a>
                                </li>
                                <li>
                                  <a href="https://www.lazzpharma.com/ProductSubCategoryDetails/Index?Id=89a793fa-f6e4-4881-924a-55177daa47a0">
                                    Horlicks
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <a
                          class="parent"
                          href="https://www.lazzpharma.com/ProductCategoryDetails/Index?Id=bea33156-ada8-4998-9d23-7c035e59ae25"
                        >
                          <img
                            class="icon-menu normal-img"
                            alt="Lazz"
                            src="./Lazz Pharma Limited_files/medicine.png"
                          />
                          <img
                            class="icon-menu hover-img"
                            alt="Lazz"
                            src="img/medicine.png"
                          />
                          Baby Care
                        </a>
                        <div class="vertical-dropdown-menu">
                          <a href="https://www.lazzpharma.com/#"></a>
                          <div class="vertical-groups col-sm-12">
                            <div class="mega-group col-sm-12">
                              <ul class="group-link-default">
                                <li>
                                  <a href="https://www.lazzpharma.com/ProductSubCategoryDetails/Index?Id=78934cc2-e2e6-4683-84c7-9182a159033d">
                                    Baby Milk
                                  </a>
                                </li>
                                <li>
                                  <a href="https://www.lazzpharma.com/ProductSubCategoryDetails/Index?Id=14191f2a-00b7-4e0d-9d83-57195be0e0e2">
                                    Baby Diapers
                                  </a>
                                </li>
                                <li>
                                  <a href="https://www.lazzpharma.com/ProductSubCategoryDetails/Index?Id=85bbac4d-da23-441b-9f37-bb8109784720">
                                    Baby Wipes
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <a
                          class="parent"
                          href="https://www.lazzpharma.com/ProductCategoryDetails/Index?Id=5bd9f8bb-ecaa-4620-ba78-120f8c1a57dc"
                        >
                          <img
                            class="icon-menu normal-img"
                            alt="Lazz"
                            src="./Lazz Pharma Limited_files/medicine.png"
                          />
                          <img
                            class="icon-menu hover-img"
                            alt="Lazz"
                            src="img/medicine.png"
                          />
                          Women's Care
                        </a>
                        <div class="vertical-dropdown-menu">
                          <a href="https://www.lazzpharma.com/#"></a>
                          <div class="vertical-groups col-sm-12">
                            <div class="mega-group col-sm-12">
                              <ul class="group-link-default">
                                <li>
                                  <a href="https://www.lazzpharma.com/ProductSubCategoryDetails/Index?Id=01f6536f-167a-4ec3-83ed-fc94df8fb6a5">
                                    Sanitary Pad
                                  </a>
                                </li>
                                <li>
                                  <a href="https://www.lazzpharma.com/ProductSubCategoryDetails/Index?Id=bbe7d493-4508-473b-a4cf-9600b227b395">
                                    Adult Diapers
                                  </a>
                                </li>
                                <li>
                                  <a href="https://www.lazzpharma.com/ProductSubCategoryDetails/Index?Id=1d63e6c5-9531-4fde-979f-d52a82a61228">
                                    Pregnancy Test
                                  </a>
                                </li>
                                <li>
                                  <a href="https://www.lazzpharma.com/ProductSubCategoryDetails/Index?Id=903605f8-51fb-447b-90e6-deff004a9a6c">
                                    Birth Control
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <a
                          class="parent"
                          href="https://www.lazzpharma.com/ProductCategoryDetails/Index?Id=0f9a4ee5-9665-4d06-a707-534b54d7dcef"
                        >
                          <img
                            class="icon-menu normal-img"
                            alt="Lazz"
                            src="./Lazz Pharma Limited_files/medicine.png"
                          />
                          <img
                            class="icon-menu hover-img"
                            alt="Lazz"
                            src="img/medicine.png"
                          />
                          Dental &amp; Oral Care
                        </a>
                        <div class="vertical-dropdown-menu">
                          <a href="https://www.lazzpharma.com/#"></a>
                          <div class="vertical-groups col-sm-12">
                            <div class="mega-group col-sm-12">
                              <ul class="group-link-default">
                                <li>
                                  <a href="https://www.lazzpharma.com/ProductSubCategoryDetails/Index?Id=978c5ca3-7c59-4183-9e84-e391e746605f">
                                    Mouth Wash
                                  </a>
                                </li>
                                <li>
                                  <a href="https://www.lazzpharma.com/ProductSubCategoryDetails/Index?Id=82cba32e-d4e9-4d15-9783-91354ebe1853">
                                    Oral Gel
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <a
                          class="parent"
                          href="https://www.lazzpharma.com/ProductCategoryDetails/Index?Id=83ccbaa3-b441-490c-9344-0aed2a2e0c63"
                        >
                          <img
                            class="icon-menu normal-img"
                            alt="Lazz"
                            src="./Lazz Pharma Limited_files/medicine.png"
                          />
                          <img
                            class="icon-menu hover-img"
                            alt="Lazz"
                            src="img/medicine.png"
                          />
                          COVID-19
                        </a>
                        <div class="vertical-dropdown-menu">
                          <a href="https://www.lazzpharma.com/#"></a>
                          <div class="vertical-groups col-sm-12">
                            <div class="mega-group col-sm-12">
                              <ul class="group-link-default">
                                <li>
                                  <a href="https://www.lazzpharma.com/ProductSubCategoryDetails/Index?Id=06ee28f5-e57a-4fb6-802d-b03ad6fc6605">
                                    Tablet
                                  </a>
                                </li>
                                <li>
                                  <a href="https://www.lazzpharma.com/ProductSubCategoryDetails/Index?Id=34fd2153-11b4-478a-af32-43f7dfa2d099">
                                    Capsul
                                  </a>
                                </li>
                                <li>
                                  <a href="https://www.lazzpharma.com/ProductSubCategoryDetails/Index?Id=067a8bc2-2bac-4ac2-b67d-7c90209e2e86">
                                    Syrup
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <a
                          class="parent"
                          href="https://www.lazzpharma.com/ProductCategoryDetails/Index?Id=631c2d29-d803-44ac-abdc-64b808cffdd5"
                        >
                          <img
                            class="icon-menu normal-img"
                            alt="Lazz"
                            src="./Lazz Pharma Limited_files/medicine.png"
                          />
                          <img
                            class="icon-menu hover-img"
                            alt="Lazz"
                            src="img/medicine.png"
                          />
                          Herbal
                        </a>
                        <div class="vertical-dropdown-menu">
                          <a href="https://www.lazzpharma.com/#"></a>
                          <div class="vertical-groups col-sm-12">
                            <div class="mega-group col-sm-12">
                              <ul class="group-link-default">
                                <li>
                                  <a href="https://www.lazzpharma.com/ProductSubCategoryDetails/Index?Id=8cd69e1a-c8ee-4986-be16-7c9a6db22b08">
                                    Capsul
                                  </a>
                                </li>
                                <li>
                                  <a href="https://www.lazzpharma.com/ProductSubCategoryDetails/Index?Id=79e840a3-9a5e-439e-9d79-eea9bec57617">
                                    Tablet
                                  </a>
                                </li>
                                <li>
                                  <a href="https://www.lazzpharma.com/ProductSubCategoryDetails/Index?Id=9ccbe56b-01d4-48eb-b41d-bad389862eb4">
                                    Syrup
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <a
                          class="parent"
                          href="https://www.lazzpharma.com/ProductCategoryDetails/Index?Id=5700bd3d-8347-4a26-bbe8-e13af2bc05d9"
                        >
                          <img
                            class="icon-menu normal-img"
                            alt="Lazz"
                            src="./Lazz Pharma Limited_files/medicine.png"
                          />
                          <img
                            class="icon-menu hover-img"
                            alt="Lazz"
                            src="img/medicine.png"
                          />
                          Books &amp; Stationary
                        </a>
                        <div class="vertical-dropdown-menu">
                          <a href="https://www.lazzpharma.com/#"></a>
                          <div class="vertical-groups col-sm-12">
                            <div class="mega-group col-sm-12">
                              <ul class="group-link-default">
                                <li>
                                  <a href="https://www.lazzpharma.com/ProductSubCategoryDetails/Index?Id=a1d2a608-8341-4798-a2cd-9fe1568c7755">
                                    LAZZ BOOK &amp; STATIONERY
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <a
                          class=""
                          href="https://www.lazzpharma.com/ProductCategoryDetails/Index?Id=aef38ffa-8a4d-4844-9fac-95b3b01965f0"
                        >
                          <img
                            class="icon-menu normal-img"
                            alt="Lazz"
                            src="./Lazz Pharma Limited_files/medicine.png"
                          />
                          <img
                            class="icon-menu hover-img"
                            alt="Lazz"
                            src="img/medicine.png"
                          />
                          Diabetic Accessories
                        </a>
                      </li>
                      <li>
                        <a
                          class=""
                          href="https://www.lazzpharma.com/ProductCategoryDetails/Index?Id=358cbbdc-9eaa-4ed2-997b-10f44cf5c99c"
                        >
                          <img
                            class="icon-menu normal-img"
                            alt="Lazz"
                            src="./Lazz Pharma Limited_files/medicine.png"
                          />
                          <img
                            class="icon-menu hover-img"
                            alt="Lazz"
                            src="img/medicine.png"
                          />
                          Physical Fitness
                        </a>
                      </li>
                    </ul>
                  </div>
                  )
              }
              
            </div>
          </div>
          {/* <!-- desktop varsion --> */}
          <div id="main-menu" class="col-sm-9 main-menu">
            <nav class="navbar navbar-default">
              <div class="container-fluid" style={{ padding: "0px" }}>
                <div class="navbar-header">
                  <button
                    type="button"
                    class="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#navbar"
                    aria-expanded="false"
                    aria-controls="navbar"
                    style={{
                      position: "absolute",
                      left: "15px",
                      textAlign: "left",
                      width: "90%",
                    }}
                  >
                    <i class="fa fa-bars" style={{ fontSize: "19px" }}></i>
                    <span class="Mobile_Menu"> MENU </span>
                  </button>
                </div>
                <NavLinkMenus />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavHeader;
