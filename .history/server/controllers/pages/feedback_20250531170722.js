const Feedback = require("../../models/Feedback");

submitFeedback = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        const newFeedback = new Feedback({ name, email, subject, message });
        await newFeedback.save();

        res.status(201).json({ message: "Feedback submitted successfully.",name:name });
    } catch (error) {
        res.status(500).json({ error: "Failed to submit feedback." });
    }
};

module.exports = submitFeedback;
