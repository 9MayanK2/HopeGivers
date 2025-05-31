const apis = () => {
    const local = 'http://localhost:5555/';

    const list = {
        registerUser: `${local}user/register`,
        loginUser: `${local}user/login`,
        forgetPassword: `${local}user/forget/password`,
        otpVerify: `${local}user/otp/verify`,
        getOtpTime: `${local}user/otp/time`,
        updatePassword: `${local}user/password/update`,
        getAccess: `${local}user/get/access`,
        getHomeData: `${local}user/home`, // 🆕 Added API for Navbar home info
        donorRegister: `${local}user/donor/register`,
        
    };

    return list;
};

export default apis;
