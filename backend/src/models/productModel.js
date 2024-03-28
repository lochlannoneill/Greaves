const mongoose = require("mongoose");

// Schema for creating products
const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tags: [String],
  category: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  stock: {
    small: {
      type: Number,
      min: 0,
      default: 0,
    },
    medium: {
      type: Number,
      min: 0,
      default: 0,
    },
    large: {
      type: Number,
      min: 0,
      default: 0,
    },
    xlarge: {
      type: Number,
      min: 0,
      default: 0,
    },
    xxlarge: {
      type: Number,
      min: 0,
      default: 0,
    },
  },
  price: {
    type: Number,
    required: true,
  },
  price_old: Number,
  date: {
    type: Date,
    default: Date.now,
  },
});

// Creating a Mongoose model for the product schema
const Product = mongoose.model("Product", productSchema);

module.exports = Product;