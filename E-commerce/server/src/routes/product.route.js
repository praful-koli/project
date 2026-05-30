import express from 'express'
const router = express.Router()
import validateProduct from '../validators/product.validator.js' 
import checkErrors from '../middlewares/validator.middleware.js'
import identifyUser from '../middlewares/auth.middleware.js'
import upload from '../config/multer.js'
import { createProduct } from '../controllers/products.controller.js'
/**
 * @route POST /api/products
 * @description Create new products required req.body name , description , price ,category ,images
 * @access Private
 */

router.post('/' , identifyUser , upload.array('images') , validateProduct , checkErrors  , createProduct)

export default router