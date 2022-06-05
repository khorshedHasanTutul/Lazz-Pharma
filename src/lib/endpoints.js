//Address Api request endpoints
export const GET_PROVINCE = "AddressArea/Province/AutoComplete";
export const GET_DISTRICT = "/AddressArea/District/AutoComplete";
export const GET_AREA = "/AddressArea/Upazila/AutoComplete";
export const GET_SAVED_ADDRESS = "/AddressArea/Address/Get";
export const CREATE_ADDRESS = "/AddressArea/Address/Create";

//Authentication
export const GET_OTP = "/MessagingArea/OtpMessage/WebRegister";
export const VERIFY_OTP = "/MessagingArea/OtpMessage/Check";
export const CREATE_REGISTRATION = "/CustomerArea/Customer/Add";
export const CREATE_LOGIN = "CustomerArea/AppCustomer/Login";
export const WEB_UPDATE_PASSWORD =
  "/MessagingArea/OtpMessage/WebUpdatePassword";
export const UPDATE_PASSWORD = "/CustomerArea/Customer/UpdatePassword";

//Product Related
export const GET_CURRENT_INFO = "/ProductArea/Product/GetCurrentInfo";
// export const DISCOUNT_OFFER = "/OfferArea/DiscountOffer/Order";
export const COUPON_CHECK = "/PromotionalArea/Coupon/Check";
export const CREATE_ORDER = "/ProductOrderArea/ProductOrder/Add";

//Order related
export const GET_ALL_ORDER = "/ProductOrderArea/ProductOrder/Get";
export const GET_ORDER_DETAILS = "/ProductOrderArea/ProductOrder/Details/";

//Profile Related
export const POST_PRESCRIPTION = "/ProductOrderArea/Prescription/Add";
export const POST_COMPLAIN = "/CommonArea/Complain/Add";
export const GET_USER_INFO = "/CustomerArea/Customer/GetInfo";
export const UPDATE_USER_INFO = "/CustomerArea/Customer/UpdateInfo";
export const PROFILE_IMAGE_UPDATE = "/CustomerArea/Customer/AddPicture";
export const GET_SPECIALS_OFFER = "/OfferArea/DiscountOffer/List";
export const GET_PRESCRIPTIONS =
  "ProductOrderArea/Prescription/MyPrescriptions/";
export const POST_REQUEST_ORDER = "RequestOrderArea/RequestOrder/Create";
export const REMOVE_PRESCRIPTION = "ProductOrderArea/Prescription/Remove/";
export const POST_CONTACT = "ContactArea/Contact/Add";
export const POST_REVIEW = "/ReviewArea/AppReview/Create";
export const GET_REVIEW = "/ReviewArea/AppReview/Get";

export const GET_ORDER_BY_PRESCRIPTIONS =
  "/ProductOrderArea/ProductOrder/Prescriptions/";
