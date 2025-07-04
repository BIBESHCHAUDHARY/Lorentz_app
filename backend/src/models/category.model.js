const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: [true, "Title must be unique"],
    },
    image: {
      type: String,
      required: true,
    },
    order: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const categoryModel = mongoose.model("Category", categorySchema);

module.exports = { categoryModel };
