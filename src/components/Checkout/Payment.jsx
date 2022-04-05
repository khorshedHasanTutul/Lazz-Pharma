import React from "react";
import { Link } from "react-router-dom";
import { urlHomeRoute } from "../../Service/UrlService";

const Payment = () => {
  return (
    <div class="tab_content">
      <div class="heading-counter warning">
        Your shopping cart contains:
        <span> 2 Product</span>
      </div>
      <div class="discount-cupon-payment">
        <label for="discount_code">Use Coupon</label>
        <form id="discount_codeSubmit">
          <input
            type="text"
            id="discount_code"
            placeholder="Discount Code..."
          />
          <button type="submit">Apply</button>
        </form>
      </div>
      <div class="order-detail-content">
        <div class="shaping-address-saveing-row">
          <div class=" shapping-address-inner-content">
            <div class="location-ad-icon" style={{ fontSize: "3rem" }}>
              <i class="fa fa-map-marker" aria-hidden="true"></i>
            </div>
            <div class="saving-address-content">
              <small>Khorshed Hasan Tutul</small>
              <small>01704247162</small>
              <span>
                <aside>Office</aside>
              </span>
              <span>jakma@outlook.com</span>
              <span>Dhaka-Dhaka-Mirpur-Mirpur Block C Road 12</span>
            </div>
          </div>
          <div class="saving-ad-btn">
            <button>Change</button>
          </div>
        </div>
        <table class="table table-bordered table-responsive cart_summary">
          <tbody>
            <tr>
              <td colspan="3">Amount (tax incl.)</td>
              <td colspan="2">8180.0875</td>
            </tr>
            <tr>
              <td colspan="3">Special Discount</td>
              <td colspan="2">80</td>
            </tr>
            <tr>
              <td colspan="3">Cupon Discount</td>
              <td colspan="2">80</td>
            </tr>
            <tr>
              <td colspan="3">Delivery Charge</td>
              <td colspan="2">80</td>
            </tr>
            <tr>
              <td colspan="3">
                <strong>Total Amount </strong>
              </td>
              <td colspan="2">
                <strong>8260.0875</strong>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="row" style={{ margin: "auto" }}>
          <div class="col-md-6 box-border">
            <label class="Method_Selector">
              <input type="radio" name="radio_4" id="radio_button_5" />
              Cash on Delivery
            </label>
          </div>
          <div class="col-md-6 box-border">
            <label class="Method_Selector">
              <input type="radio" name="radio_4" id="radio_button_6" />
              Onlie Payments
            </label>
          </div>
          <div class="col-md-12">
            <p class="OrderNotice" style={{ marginTop: "1%" }}>
              *** Please pay first for outside Dhaka delivery (ঢাকার বাইরে
              অর্ডারের ক্ষেত্রে ক্যাশ অন ডেলিভারি প্রযোজ্য নয়)
            </p>
            <p class="OrderNotice">
              *** Please pay the delivery charge first for inside Dhaka delivery
              (Cash on Delivery) (ঢাকার ভিতর ক্যাশ অন ডেলিভারি এর ক্ষেত্রে
              ডেলিভারি চার্জ আগে প্রদান করতে হবে)
            </p>
            <p class="OrderNotice">
              *** LP agent will call you for delivery charge and reconfirm your
              order (আপনার অর্ডার পুনরায় নিশ্চিত করতে লাজ ফার্মা থেকে আপনার সাথে
              যোগাযোগ করা হবে)
            </p>
          </div>
          <div class="cart_navigation">
            <Link class="prev-btn" to={urlHomeRoute()}>
              Continue shopping
            </Link>
            <a href class="next-btn">
              Order Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
