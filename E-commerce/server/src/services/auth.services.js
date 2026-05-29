import userModel from "../models/users.model.js";
import ApiError from "../utils/ApiError.js";
import validateEmail from "../utils/validateEamil.js";
import bcrypt from 'bcrypt'


// regtisterService
const registerService = async (userData) => {
  const { name, email, password } = userData;
  //  check user alredy register

  let user = await userModel.findOne({ email });

  if (user) {
    throw new ApiError(409, "User Already register go to login");
  }

  // if user is new then register the user and hash a password

  let hashpassword = await bcrypt.hash(password, 10)

  let newUser = await userModel.create({ name, email, password :hashpassword });

  return newUser;
};


export { registerService };