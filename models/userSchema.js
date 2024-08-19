import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "First Name must contain at least 3 characters"],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "Last Name must contain at least 3 characters"],
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    minLength: [11, "Phone Number Must Contain Exact 11 Digits"],
    maxLength: [11, "Phone Number Must Contain Exact 11 Digits!"],
  },
  nic: {
    type: String,
    required: true,
    minLength: [13, "NIC  Must Contain Exact 13 Digits"],
    maxLength: [13, "NIC  Must Contain Exact 13 Digits!"],
  },
  dob: {
    type: String,
    required: [true, "DOB is required"],
  },
  gender: {
    type: String,
    required: true,
    enum: ["Male", "Female"],
  },
  password: {
    type: String,
    minLength: [8, "Password must contain at least 8 characters"],
    required: true,
  },
});

export const User = mongoose.model("User", userSchema);
