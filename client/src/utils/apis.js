const apis = () => {
  const local = 'http://localhost:5555/';

  const list = {
    registerUser: `${local}user/auth/register`,            // Fixed double slashes
    loginUser: `${local}user/auth/login`,
    forgetPassword: `${local}user/auth/forget/password`,
    otpVerify: `${local}user/auth/otp/verify`,
    getOtpTime: `${local}user/auth/otp/time`,
    updatePassword: `${local}user/auth/password/update`,
    getAccess: `${local}user/auth/get/access`,
  };

  const list1 = {
    getHomeData: `${local}home`,                          // For Navbar
    donorRegister: `${local}donor/register`,
    receiverRegister: `${local}donor/search-donors`,
    chatBot: `${local}chat`,
    feedbackForm: `${local}feedback/form`,
    contactUs: `${local}contactus`,
  };

  return { list, list1 };
};

export default apis;
