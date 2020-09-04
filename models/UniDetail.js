const mongoose = require("mongoose");

const UniDetailSchema = new mongoose.Schema({
  uniname: {
    type: String,
    trim: true,
    required: true,
  },
  registrationDate: {
    type: Date,
    required: true,
  },
  expiryDate: {
    type: Date,
    required: true,
  },
  imgUrl: {
    type: String,
    trim: true,
    required: true,
  },
  noOfStudent: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  webUrl: {
    type: String,
    trim: true,
    required: true,
  },
  contactNo: {
    type: Number,
    required: true,
  },
});

module.exports = UniDetail = mongoose.model("unidetail", UniDetailSchema);
