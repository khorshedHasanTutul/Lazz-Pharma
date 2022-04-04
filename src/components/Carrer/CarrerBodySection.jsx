import React from "react";

const CarrerBodySection = () => {
  return (
    <div class="container section">
      <div class="row custom-career-row">
        <div class="col-md-6 career-content">
          <h1>Are you Dedicated, Hardworking and Fun? Join Us!</h1>
          <p class="career_common">
            We believe in those people who are passionate about their work and
            feel the joy of working. We are always welcome and eagerly waiting
            for you.
          </p>
          <div style={{ position: "relative" }}>
            <button
              class="btn btn_upload"
              type="button"
              style={{ width: "100%" }}
            >
              <i class="fa fa-plus" aria-hidden="true"></i>{" "}
              <span> Drop Your CV Here</span>
            </button>
            <input
              id="btn_image"
              class="btn btn_upload btn-default btn-round"
              style={{
                position: "absolute",
                left: "0px",
                top: "0px",
                opacity: "0",
                padding: "3px",
                width: "100%",
              }}
              type="file"
            />
          </div>
        </div>
      <div class="col-md-6 career-img">
          <img
            src={"./Contents/assets/image/carrer.jpg"}
            alt="LazzEmployee"
          />
        </div>
      </div>
      <div class="page-header text-center">
        <h1 id="timeline">Current Opportunities</h1>
      </div>
      <div class="row">
        <div class="timeline col-md-12">
          <div class="timeline-panel">
            <div class="timeline-body">
              <h2 class="job_title">Senior Sales Executives</h2>
              <div class="job_nat">
                <h4>No. of Vacancies</h4>
                <p>N/A</p>
              </div>
              <div class="job_nat">
                <h4>Employment Status</h4>
                <p>Full time</p>
              </div>
              <div class="job_nat">
                <h4>Educational Requirement</h4>
                <p>Minimum HSC</p>
              </div>
              <div class="job_nat">
                <h4>Job Location</h4>
                <p>Narsingdi</p>
              </div>
              <div class="job_nat">
                <h4>Salary</h4>
                <p>Negotiable</p>
              </div>
              
              <div style={{ position: "relative" }}>
                <button
                  class="btn btn_upload"
                  type="button"
                  style={{ width: "35%" }}
                >
                  <i class="fa fa-plus" aria-hidden="true"></i>{" "}
                  <span> Drop Your CV Here</span>
                </button>
                <input
                  id="btn_image"
                  class="btn btn_upload btn-default btn-round"
                  style={{
                    position: "absolute",
                    left: "33%",
                    top: "0px",
                    opacity: "0",
                    padding: "3px",
                    width: "35%",
                  }}
                  type="file"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarrerBodySection;
