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
