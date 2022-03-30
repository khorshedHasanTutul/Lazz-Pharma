import React from "react";
import ReturnPolicyContent from "../Return/ReturnPolicyContent";
import ReturnPolicyHeader from "../Return/ReturnPolicyHeader";
import ReturnPolicyProduct from "../Return/ReturnPolicyProduct";

const Returnpolicy = () => {
  return (
    <div class="columns-container">
      <div class="container" id="columns">
        {/* <!-- breadcrumb --> */}
        <ReturnPolicyHeader />
        {/* <!-- ./breadcrumb --> */}
        <div class="row">
          <ReturnPolicyContent />

         {/* <ReturnPolicyProduct /> */}

          {/* <!-- ./row--> */}
        </div>
      </div>
    </div>
  );
};

export default Returnpolicy;
