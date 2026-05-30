import express from 'express'
import authRoute from './routes/auth.route.js'
import productsRoute from './routes/product.route.js'
import cookieParser from 'cookie-parser'
import errorHandler from './middlewares/error.middleware.js'
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use('/api/auth', authRoute)
app.use('/api/products' ,productsRoute)

app.use(errorHandler)
export default app