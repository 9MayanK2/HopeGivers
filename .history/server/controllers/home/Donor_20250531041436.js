const Donor = require('../../models/Donor');
const bcrypt = require('bcrypt');
const joi = require('joi');

const DonorUser = async (req, res, next) => {
  // Validate the request body
  const { error: validationError } = validateUser(req.body);

  // Use camelCase keys matching frontend
  const {
    fullName,
    bloodGroup,
    mobileNumber,
    country,
    state,
    district,
    city,
    userId,
    email,
    password,
    isAvailable,
    authorize,
  } = req.body;

  try {
    if (validationError) {
      const error = new Error(validationError.details[0].message);
      error.statusCode = 400;
      throw error;
    }

    const formattedName = fullName.toLowerCase();
    const formattedEmail = email.toLowerCase();

    const foundUser = await Donor.findOne({ email: formattedEmail });
    if (foundUser) {
      const error = new Error('This email already exists');
      error.statusCode = 400;
      throw error;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newDonor = new Donor({
      fullName: formattedName,      // Your DB field probably still expects lowercase keys
      email: formattedEmail,
      password: hashedPassword,
      bloodgroup: bloodGroup,
      mobileNumber,
      country,
      state,
      district,
      city,
      userID: userId,
      isAvailable,
      authorize,
    });

    const savedUser = await newDonor.save();
    res.status(201).json({ message: 'User registered successfully', status: true, name: savedUser.fullname });
  } catch (error) {
    console.log('Error in register controller:', error.message);
    next(error);
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
    userId: joi.string().required(),
    isAvailable: joi.boolean(),
    authorize: joi.boolean(),
  });

  return userSchema.validate(data);
}
