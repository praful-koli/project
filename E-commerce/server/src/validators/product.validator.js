import { body, validationResult } from 'express-validator';

// Rules for creating a product
const validateProduct = [
  body('name')
    .notEmpty()
    .withMessage('Product name is required'),

  body('price')
    .notEmpty()
    .withMessage('Price is required')
    .isNumeric()
    .withMessage('Price must be a number')
    .custom(value => value > 0)
    .withMessage('Price must be greater than 0'),

  body('description')
    .optional()
    .isString()
    .withMessage('Description must be a string'),

  body('category')
    .optional()
    .isString()
    .withMessage('Category must be a string'),
];


export default validateProduct