import express from 'express'
import { registerUser } from '../controllers/auth.controller.js'
import validateRegister from '../validators/users.validator.js'
import checkErrors from '../middlewares/validator.middleware.js'
const router = express.Router()


/**
 * @route POST /api/auth/register
 * @description Register a new user need name and email in the request body
 * @access Public
 */
router.post('/register', validateRegister, checkErrors , registerUser)

/**
 * @route POST /api/auth/login
 * @description Login an existing user need email and password in the request body
 * @access Public
 */
// router.post('/login')

export default router