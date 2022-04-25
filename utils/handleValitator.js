const { validationResult } = require("express-validator");

const validateResults = (req, res, next) => {
    try {
        validationResult(req).throw()        
        return next();
    } catch (error) {
        console.error(error);
        res.status(400);
        res.send({ errors: error.array() });        
    }
};

module.exports =  validateResults;