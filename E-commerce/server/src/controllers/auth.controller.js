import asycHandler from "../utils/asycHandler.js";
import { registerService } from "../services/auth.services.js";
import jwt from "jsonwebtoken";
import config from '../config/config.js'
// controller for user registration
const registerUser = asycHandler(async (req, res) => {
  const response = await registerService(req.body);

  let token = jwt.sign(
    {
      userId: response._id,
    },
    config.JWT_SECRET,
    { expiresIn: "1d" },
  );

  res.cookie("token", token);

  res.status(201).json({
    success: true,
    message: "User registered successfully",
    data: response,
  });

});

export {registerUser}