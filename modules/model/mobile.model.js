import mongoose from "mongoose";

const mobileSchema = mongoose.Schema({
  mobileName: { type: String },
  mobileModel: { type: String },
  mobileDiscription: { type: String },
});

const mobile = mongoose.model("mobile", mobileSchema, "mobile");

export default mobile;
