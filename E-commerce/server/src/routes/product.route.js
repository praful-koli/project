import express from 'express'
const router = express.Router()
import validateProduct from '../validators/product.validator.js' 
import checkErrors from '../middlewares/validator.middleware.js'
import identifyUser from '../middlewares/auth.middleware.js'
import upload from '../config/multer.js'
import { createProduct , getAllProducts , getPorductById  , updateProduct , deleteProduct} from '../controllers/products.controller.js'

/**
 * @route POST /api/products
 * @description Create new products 
 * @access Private
 * @body name {String} , description {String} , price {Number},category{{String}} ,images {String}
 * @example POST /api/products
 */

router.post('/' , identifyUser , upload.array('images') , validateProduct , checkErrors  , createProduct)

/**
 * @route GET /api/products
 * @description Get all products with optional category filtering
 * @access Public
 * @queryParam {string} [category] - Filter products by category (optional)
 * @example GET /api/products
 * @example GET /api/products?category=electronics
 */

router.get('/', getAllProducts)


/**
 * @route GET /api/products/:id
 * @description Get a single product by its ID
 * @access Public
 * @param {string} id - MongoDB product ID (required)
 * @example GET /api/products/665f1b2c9f1b2c0012345678
 */

router.get('/:id' , getPorductById)


/**
 * @route PUT /api/:id 
 * @description Update product by id 
 * @access Private
 * @body name {String} , description {String} , price {Number},category{{String}} ,images {String}
 * @example /api/product/2128417hrf387r1hy18hnd1hd12
 */

router.put('/:id' , identifyUser , upload.array('images') ,  validateProduct , checkErrors , updateProduct )


/**
 * @route DELETE api/products/:id
   @description Delete spcefilce product by id 
   @acess Private
   @param {string} id - MongoDB product ID (required)
   @example GET /api/products/665f1b2c9f1b2c0012345678
 */

router.delete('/:id', identifyUser , deleteProduct)

export default router