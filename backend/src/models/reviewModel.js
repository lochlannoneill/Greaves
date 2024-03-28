const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product", // Referencing the Product model
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Referencing the User model
  },
  rating: {
    type: Number,
    default: 0,
  },
  summary: {
    type: String,
    required: true,
  },
  datetime: {
    type: Date,
    default: Date.now,
  },
  verifiedPurchase: Boolean,
  images: [String],
  description: String,
  helpful: [String],
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
