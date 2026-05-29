
import dotenv from 'dotenv'
dotenv.config()

const REQUIRED_KEYS = [
  "MONGODB_URL",
  "PORT",
  "JWT_SECRET"
];


for (const key of REQUIRED_KEYS) {
  if (!process.env[key]) {
    throw new Error(`❌ Missing required environment variable: ${key}`);
  }
}


const config = {
  MONGODB_URL: process.env.MONGODB_URL,
  PORT: process.env.PORT || 3000 , // optional default
  JWT_SECRET : process.env.JWT_SECRET
};

export default config;
