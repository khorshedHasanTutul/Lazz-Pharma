import React from "react";
import Slider from "../utilities/Slider";
import AboutSliderTemplate from "./AboutSliderTemplate";

const AboutBodyTemplate = () => {
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
  const options = {
    rewind: true,
    type: "loop",
    autoplay: true,
    rewindSpeed: 1000,
    speed: 500,
    pauseOnHover: false,
    width: "100%",
  };
  return (
    <div class="row">
      <div class="col-md-12">
        <Slider Template={AboutSliderTemplate} options={options} data={Banner}  />
        <div class="team_heading_title text-center">
          <h1 class="text-uppercase">Board of Directors</h1>
          <hr />
        </div>
        <div class="container mt-5 d-flex justify-content-center">
          <div class="row">
            <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
              <div class="my-card">
                <img
                  class="my-card-img"
                  src="https://www.lazzpharma.com/Content/assets/iqraimages/Directors/Chairman-600x400-f.jpg"
                  alt="img"
                />
                <div class="my-card-body trainer-card-body">
                  <center>
                    <h5>Syeda Mahfuza Rahman</h5>
                  </center>
                  <h6>CHAIRMAN</h6>
                  <div>
                    <p>
                      Teaching was her first career, and Syeda Mahfuza Rahman
                      brings the values of integrity, ethics and sincerity to
                      Lazz Pharma. She has always prioritized customer
                      satisfaction over all else, and her contribution behind
                      the success of this organization is immense. Being the
                      chairman of this family-owned business, Syeda sees the
                      company’s employees as her extended family, and wants
                      every single customer to have the best experience possible
                      when shopping with Lazz Pharma.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
              <div class="my-card">
                <img
                  class="my-card-img"
                  src="https://www.lazzpharma.com/Content/assets/iqraimages/Directors/lutfor-rahman-580x400-f.jpg"
                  alt="img"
                />
                <div class="my-card-body trainer-card-body">
                  <center>
                    <h5>Md. Lutfor Rahman</h5>
                  </center>
                  <h6>MANAGING DIRECTOR</h6>
                  <div>
                    <p>
                      As a young entrepreneur in the 70s, he always had the
                      dream to go beyond the typical concept of a Pharmacy in
                      Bangladesh. Ever since the journey began, Lazz Pharma
                      stood out, as its first and foremost focus was honesty and
                      customer satisfaction. Over the last 40+ years, Lazz
                      Pharma Ltd has never compromised with this core value of
                      its business strategy. As the founder of this
                      organization, Mr Lutfor Rahman wishes to keep serving the
                      country with honesty and sincerity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                <div class="my-card">
                  <img
                    class="my-card-img"
                    src="https://www.lazzpharma.com/Content/assets/iqraimages/Directors/photo-1-f.jpg"
                    alt="img"
                  />
                  <div class="my-card-body trainer-card-body">
                    <center>
                      <h5>Shakib Rahman</h5>
                    </center>
                    <h6>Director, Business Operation</h6>
                    <div>
                      <p>
                        Shakib Rahman joined Lazz Pharma Ltd in August 1998.
                        With his experience of almost 20 years, the young
                        entrepreneur now oversees the administration of the
                        entire business, including the accounting department,
                        financial reporting and franchise management. Shakib
                        Rahman believes in constant improvement in customer
                        service and satisfaction, and his accumulated experience
                        in managing the highly skilled workforce of the company
                        makes him integral to the company’s success.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                <div class="my-card">
                  <img
                    class="my-card-img"
                    src="https://www.lazzpharma.com/Content/assets/iqraimages/Directors/photo%202%20-%20final-f.jpg"
                    alt="img"
                  />
                  <div class="my-card-body trainer-card-body">
                    <center>
                      <h5>Sumona Rahman</h5>
                    </center>
                    <h6>Director, Admin &amp; Business Strategy</h6>
                    <div>
                      <p>
                        Sumona comes on board with more than 20 years of
                        overseas experience in corporate administration, and is
                        primarily focused on e-commerce and R&amp;D for the core
                        services of the company. Her primary goal with the
                        e-commerce facet of Lazz Pharma is to make sure the
                        customer experience is efficient and timely. Being a
                        specialist in human resources management, Sumona
                        oversees the technical infrastructure and systems
                        integration across all of Lazz Pharma, and wishes to
                        move the business forward globally.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="team_heading_title text-center">
                <h1 class="text-uppercase">Corporate Associates</h1>
                <hr />
              </div>
              <div class="container mt-5 d-flex justify-content-center">
                <div class="row">
                  <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12">
                    <div class="my-card">
                      <img
                        alt="img"
                        class="my-card-img"
                        src="https://www.lazzpharma.com/Content/assets/iqraimages/CorporateMembers/Anower-Hossain1.jpg"
                      />
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12">
                    <div class="my-card">
                      <img
                        alt="img"
                        class="my-card-img"
                        src="https://www.lazzpharma.com/Content/assets/iqraimages/CorporateMembers/A.L.M-Kamal-Uddin-(Hafez)2.jpg"
                      />
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12">
                    <div class="my-card">
                      <img
                        alt="img"
                        class="my-card-img"
                        src="https://www.lazzpharma.com/Content/assets/iqraimages/CorporateMembers/Md.-Rovin3.jpg"
                      />
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12">
                    <div class="my-card">
                      <img
                        alt="img"
                        class="my-card-img"
                        src="https://www.lazzpharma.com/Content/assets/iqraimages/CorporateMembers/Md.-Yousuf-Al-Amin4.jpg"
                      />
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12">
                    <div class="my-card">
                      <img
                        alt="img"
                        class="my-card-img"
                        src="https://www.lazzpharma.com/Content/assets/iqraimages/CorporateMembers/Md.-Abid-Hasan-b5.jpg"
                      />
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12">
                    <div class="my-card">
                      <img
                        alt="img"
                        class="my-card-img"
                        src="https://www.lazzpharma.com/Content/assets/iqraimages/CorporateMembers/Md.-Hassan-Raju6.jpg"
                      />
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12">
                    <div class="my-card">
                      <img
                        alt="img"
                        class="my-card-img"
                        src="https://www.lazzpharma.com/Content/assets/iqraimages/CorporateMembers/Md.-Al-Amin7.jpg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBodyTemplate;
