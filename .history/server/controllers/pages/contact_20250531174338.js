const Contact = require('../../models/Contact');
const nodemailer = require('nodemailer');

const contactHandler = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        // Save to MongoDB
        const newContact = new Contact({ name, email, subject, message });
        await newContact.save();

        // Send email to user
        const transporter = nodemailer.createTransport({
            auth: {
                user: process.env.EMAIL_USER, // Your email address
                pass: process.env.EMAIL_PASS  // Your email password or app password
            }
        });

        const mailOptions = {
            process.env.EMAIL_USER,
            to: email,
            subject: 'Thanks for Contacting Us',
            text: `Hi ${name},\n\nThank you for reaching out. We will contact you as soon as possible.\n\nRegards,\nBloodStuff Team`
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: 'Contact saved and email sent' });
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ error: 'Something went wrong' });
    }
};

module.exports = contactHandler;
