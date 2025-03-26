import mongoose from "mongoose";
import cloudinary from "../lib/cloudinary.js";
import mongooseSequence from "mongoose-sequence";

const AutoIncrement = mongooseSequence(mongoose);

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
  certificate10: { type: String, required: true },
  certificate12: { type: String, required: true },
  profilePic: { type: String, required: true },
  casteCertificate: { type: String, required: true },
  idCard: { type: String, required: true },
  address: { type: String, required: true },
  state: { type: String, required: true },
  district: { type: String, required: true },
  pincode: { type: String, required: true },
  payment: { type: String, required: true },
  clerkId: { type: String, required: true },
  rollNumber: { type: Number, unique: true },
  formApproval : {type: String , default:"pending..."},
  neetRank : {type: String , default:"pending..."},
  downloadMarksheet : {type: String , default:"pending..."},
});

userSchema.plugin(AutoIncrement, { inc_field: "rollNumber" });

const User = mongoose.model('User', userSchema);
export default User;