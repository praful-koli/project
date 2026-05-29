import { validationResult } from "express-validator";

const checkErrors = (req, res, next) => {
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array()   // returns all error messages
    });
  }
  
  next();  // no errors, move forward
};

export default checkErrors