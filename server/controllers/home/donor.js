const Donor = require('../../models/Donor');
const bcrypt = require('bcrypt');
const joi = require('joi');

const DonorUser = async (req, res, next) => {
  try {
    // Clone request data and remove retypePassword
    const dataToValidate = { ...req.body };
    delete dataToValidate.retypePassword;

    // Validate the request body
    const { error: validationError } = validateUser(dataToValidate);

    if (validationError) {
      const error = new Error(validationError.details[0].message);
      error.statusCode = 400;
      throw error;
    }

    const {
      fullName,
      bloodGroup,
      mobileNumber,
      country,
      state,
      district,
      city,
      email,
      password,
      isAvailable,
      authorize,
    } = dataToValidate;

    const formattedName = fullName.toLowerCase();
    const formattedEmail = email.toLowerCase();

    // Check if email already exists
    const foundUser = await Donor.findOne({ email: formattedEmail });
    if (foundUser) {
      const error = new Error('This email already exists');
      error.statusCode = 400;
      throw error;
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save new donor
    const newDonor = new Donor({
      fullName: formattedName,
      email: formattedEmail,
      password: hashedPassword,
      bloodGroup,
      mobileNumber,
      country,
      state,
      district,
      city,
      isAvailable,
      authorize,
    });

    const savedUser = await newDonor.save();
    res.status(201).json({
      message: 'Donor registered successfully',
      status: true,
      name: savedUser.fullName, // fixed from fullname to fullName
    });

  } catch (error) {
    console.log('Error in Donor register controller:', error.message);
    next(error); // Pass the error to error-handling middleware
  }
};

module.exports = DonorUser;

function validateUser(data) {
  const userSchema = joi.object({
    fullName: joi.string().min(3).max(30).required(),
    email: joi.string().email().required(),
    password: joi.string().min(7).max(30).required(),
    mobileNumber: joi
      .string()
      .pattern(/^[0-9]{10}$/)
      .required()
      .messages({
        'string.pattern.base': 'Mobile number must be a 10-digit number',
        'string.empty': 'Mobile number is required',
      }),
    bloodGroup: joi.string().required(),
    country: joi.string().required(),
    state: joi.string().required(),
    district: joi.string().required(),
    city: joi.string().required(),
    isAvailable: joi.boolean(),
    authorize: joi.boolean(),
  });

  // Do not validate retypePassword — remove it from data before calling this function
  return userSchema.validate(data);
}
