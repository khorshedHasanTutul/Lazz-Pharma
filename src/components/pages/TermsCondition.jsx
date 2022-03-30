import React from "react";
import ReturnPolicyProduct from "../Return/ReturnPolicyProduct";
import TermsConditionContents from "../TermsCondition/TermsConditionContents";
import TermsConditionHeader from "../TermsCondition/TermsConditionHeader";

const TermsCondition = () => {
  return (
    <div class="columns-container">
      <div class="container" id="columns">
        {/* <!-- breadcrumb --> */}
        <TermsConditionHeader />
        {/* <!-- ./breadcrumb --> */}
        <div class="row">
          <TermsConditionContents />
          {/* <ReturnPolicyProduct /> */}

          {/* <!-- ./row--> */}
        </div>
      </div>
    </div>
  );
};

export default TermsCondition;
