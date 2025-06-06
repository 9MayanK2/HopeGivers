const User = require('../../models/User');
const jwt = require('jsonwebtoken');

const getHome = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({ message: 'No token provided' });
        }

        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.userId).select('name');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ name: user.name, status: true });

    } catch (error) {
        next(error);
    }
};

module.exports = getHome;

