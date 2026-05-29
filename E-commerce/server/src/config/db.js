import mongoose from 'mongoose'
import config from './config.js'
const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGODB_URL)
        console.log('Database Connection Successfully')
    } catch (error) {
        console.log('Database Connection Failed', error.message)
    }
}

export default connectDB