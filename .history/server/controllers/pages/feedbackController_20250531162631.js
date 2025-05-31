const Feedback = require("../models/Feedback");

const submitFeedback = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newFeedback = new Feedback({ name, email, subject, message });
    await newFeedback.save();

    res.status(200).json({ message: `Thank you, ${name}, for your feedback!` });
  } catch (error) {
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

module.exports = { submitFeedback ;
