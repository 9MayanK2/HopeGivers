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
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, // Your email address
                pass: process.env.EMAIL_PASS  // Your email password or app password
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Thank You for Contacting BloodStuff',

text: `Dear ${name},

Thank you for reaching out to BloodStuff. We have received your message and our support team is currently reviewing your request.

We truly appreciate your interest in our services and we are committed to providing you with the assistance you need. Whether your inquiry is related to blood donation, emergency requests, feedback, or general information, we assure you that one of our team members will get in touch with you shortly.

In the meantime, if you have any urgent concerns or would like to speak to someone immediately, feel free to call our helpline at 08099944333.

Thank you for trusting BloodStuff — together, we save lives.

Warm regards,  
The BloodStuff Support Team  
Email: bloocstuff@gmail.com  
Website: www.bloodstuff.org
`
 };

        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: 'Contact saved and email sent' });
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ error: 'Something went wrong' });
    }
};

module.exports = contactHandler;
