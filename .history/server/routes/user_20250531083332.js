const express = require('express');
const registerController = require('../controllers/auth/register');
const router = express.Router();
const loginController = require('../controllers/auth/login');
const forgetPasswordController = require('../controllers//auth/forgetPassword');
const verifyOtpController = require('../controllers/auth/verifyOtp.js');
const getOtpTimeController = require('../controllers/auth/getOtpTime.js');
const updatePasswordController = require('../controllers/auth/passwordUpdate');
const getAccessController = require('../controllers/auth/getAccess');
// Home page controller
const getHomeController = require('../controllers/home/home.js');
const verifyToken=require('../middleware/verifyToken.js');

//Donor Regisration route
const DonorRegisterController = require('../controllers/home/donor.js');
const receiverController = require('../controllers/home/receiver.js');

router.post('/register', registerController);
router.post('/login', loginController);
router.post('/forget/password', forgetPasswordController);
router.post('/otp/verify', verifyOtpController);
router.post('/otp/time', getOtpTimeController);
router.post('/password/update', updatePasswordController);
router.post('/get/access', getAccessController);
// Home Page Route
router.post('/home',verifyToken, getHomeController);
router.post('/donor/register', DonorRegisterController);

module.exports = router;