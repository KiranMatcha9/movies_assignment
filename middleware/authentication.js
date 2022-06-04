require('dotenv').config();

const authentication = async (req,res,next) => {
    const authHeader = req.headers.authorization;
        if(!authHeader || !authHeader.startsWith('Bearer ')){
            throw new Error('Authentication invalid > Please provide the correct Bearer token');
        }
        const token = authHeader.split(' ')[1];
        if(token != process.env.JWT_SECRET){
            throw new Error('Authentication invalid > Please provide the correct Bearer token');
        }
    next();
    }

module.exports = authentication;