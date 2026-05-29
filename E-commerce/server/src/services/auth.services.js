import userModel from "../models/users.model.js";
import ApiError from "../utils/ApiError.js";

// regtisterService
const registerService = async (userData) => {
  const { name, email, password } = userData;
  //  check user alredy register

  let user = await userModel.findOne({ email });

  if (user) {
    throw new ApiError(409, "User Already register go to login");
  }

  // if user is new then register the user

  let newUser = await userModel.create({ name, email, password });

  return newUser;
};

// loginService
const loginService = async (userData) => {
  const { email, password } = userData;

  // Find user by eamil
  let user = await userModel.findOne({ email });
  if (!user) throw new ApiError(404, "User not found");

  // Use the schema method to check password
  let isPassword =await user.matchPassword(password);

  console.log(isPassword);
  if (!isPassword) {
    throw new ApiError(401, "Invalid password");
  }

  // If password is correct, return user
  return user;
};
export { registerService, loginService };
