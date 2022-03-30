import React from "react";
import PrivacyContent from "../Privacy/PrivacyContent";
import PrivacyHeader from "../Privacy/PrivacyHeader";
import ReturnPolicyProduct from "../Return/ReturnPolicyProduct";

const Privacy = () => {
  return (
    <div class="columns-container">
      <div class="container" id="columns">
        {/* <!-- breadcrumb --> */}
        <PrivacyHeader />
        {/* <!-- ./breadcrumb --> */}
        <div class="row">
          <PrivacyContent />
          {/* <ReturnPolicyProduct /> */}

          {/* <!-- ./row--> */}
        </div>
      </div>
    </div>
  );
};

export default Privacy;
