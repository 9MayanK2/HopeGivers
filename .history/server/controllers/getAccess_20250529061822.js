const User = require('../models/User');

const getAccess = async (req, res, next) => {

    const { token } = req.body;
    
    try {
    }catch (error) {
        next(error);
    }
}
