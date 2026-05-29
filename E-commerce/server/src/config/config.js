
import dotenv from 'dotenv'
dotenv.config()

const REQUIRED_KEYS = [
  "MONGODB_URL",
  "PORT",
  "JWT_SECRET",
  "IMK_PUBLIC_KEY",
  "IMK_PRIVATE_KEY",
  "IMK_URL"
];


for (const key of REQUIRED_KEYS) {
  if (!process.env[key]) {
    throw new Error(`❌ Missing required environment variable: ${key}`);
  }
}


const config = {
  MONGODB_URL: process.env.MONGODB_URL,
  PORT: process.env.PORT || 3000 , // optional default
  JWT_SECRET : process.env.JWT_SECRET,
  IMK_PUBLIC_KEY : process.env.IMK_PUBLIC_KEY,
  IMK_PRIVATE_KEY : process.env.IMK_PRIVATE_KEY,
  IMK_URL : process.env.IMK_URL
  
};

export default config;
