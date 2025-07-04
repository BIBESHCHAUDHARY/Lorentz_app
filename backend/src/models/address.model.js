const mongoose = require("mongoose");

var addressSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  province: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  municipality: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  addressType: {
    type: String,
    enum: ["billing", "shipping"],
    required: true,
  },
});

module.exports = mongoose.model("Address", addressSchema);
