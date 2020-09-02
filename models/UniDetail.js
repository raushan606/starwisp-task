const mongoose = require("mongoose");
const autoincrement = require("mongoose-auto-increment");

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
  },
  contactNo: {
    type: Number,
    required: true,
  },
});
