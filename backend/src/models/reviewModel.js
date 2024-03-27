const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product' // Referencing the Product model
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User' // Referencing the User model
  },
  rating: Number,
  summary: String,
  date: Date,
  time: String,
  verified: Boolean,
  images: [String],
  description: String,
  helpful: [String]
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
