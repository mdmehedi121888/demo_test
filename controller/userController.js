import { User } from "../models/userSchema.js";

export const register = async (req, res, next) => {
  const { firstName, lastName, email, password, phone, nic, dob, gender } =
    req.body;
  // console.log(name,email,password);

  if (
    !firstName ||
    !lastName ||
    !email ||
    !password ||
    !phone ||
    !nic ||
    !dob ||
    !gender
  ) {
    return next(
      res.status(400).json({
        success: false,
        message: "Please fill up the form",
      })
    );
  }

  const isUser = await User.findOne({ email });

  if (isUser) {
    return next(
      res.status(400).json({
        success: false,
        message: "User is Already Exists!",
      })
    );
  }

  const user = await User.create({
    firstName,
    lastName,
    email,
    password,
    phone,
    gender,
    dob,
    nic,
  });

  if (user) {
    return next(
      res.status(200).json({
        success: true,
        message: "User Registered!",
        user,
      })
    );
  }
};
