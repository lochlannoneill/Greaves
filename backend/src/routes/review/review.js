const express = require("express");
const router = express.Router();
const Product = require("../../models/productModel");
const Review = require("../../models/reviewModel");

// TODO - FIX THIS
// GET - Reviews by product ID
router.get("/products/:id/reviews", (req, res) => {
  const productId = req.params.id;
  Product.findById(productId)
    .then((product) => {
      console.log("Product reviews retrieved:", productId);
      res.json(product.reviews);
    })
    .catch((err) => {
      console.error("Failed to retrieve product reviews:", err);
      res.status(500).json({
        success: false,
        message: "Failed to retrieve product reviews",
      });
    });
});

// POST - new review
router.post("/", async (req, res) => {
  try {
    // Create a new Review document
    const newReview = new Review({
      userId: req.body.userId,
      productId: req.body.productId,
      rating: req.body.rating,
      summary: req.body.summary,
      verifiedPurchase: req.body.verifiedPurchase,
      images: req.body.images,
      description: req.body.description,
      helpful: req.body.helpful,
    });

    // Save the new review
    await newReview.save();

    // Update the corresponding product with the ObjectId of the saved review
    const updatedProduct = await Product.findByIdAndUpdate(
      req.body.productId,
      { $push: { reviews: newReview._id } },
      { new: true }
    );

    console.log(
      "Review (",
      newReview,
      ") added to Product (",
      req.body.productId,
      ")"
    );

    res.json(updatedProduct);
  } catch (err) {
    console.error("Failed to add review to product:", err);
    res
      .status(500)
      .json({ success: false, message: "Failed to add review to product" });
  }
});

// GET - all reviews
router.get("/", (req, res) => {
  Review.find()
    .then((reviews) => {
      console.log("Reviews retrieved.");
      res.json(reviews);
    })
    .catch((err) => {
      console.error("Failed to retrieve reviews:", err);
      res
        .status(500)
        .json({ success: false, message: "Failed to retrieve reviews" });
    });
});

// GET - review by ID
router.get("/:id", (req, res) => {
  const reviewId = req.params.id;
  Review.findById(reviewId) // Add parentheses to call the method
    .then((review) => {
      console.log("Review retrieved:", reviewId);
      res.json(review);
    })
    .catch((err) => {
      console.error("Failed to retrieve review:", err);
      res
        .status(500)
        .json({ success: false, message: "Failed to retrieve review" });
    });
});

// DELETE - review by ID
router.delete("/:id", (req, res) => {
  const reviewId = req.params.id;
  Review.findByIdAndDelete(reviewId)
    .then(() => {
      console.log("Review deleted:", reviewId);
      res.json({
        success: true,
        message: "Review deleted",
      });
    })
    .catch((err) => {
      console.error("Failed to delete review:", err);
      res
        .status(500)
        .json({ success: false, message: "Failed to delete review" });
    });
});

// GET - reviews sorted by helpful count
router.get("/helpful", (req, res) => {
  Review.find()
    .sort({ helpful: -1 })
    .then((reviews) => {
      console.log("Reviews retrieved and sorted by helpful count.");
      res.json(reviews);
    })
    .catch((err) => {
      console.error("Failed to retrieve reviews:", err);
      res
        .status(500)
        .json({ success: false, message: "Failed to retrieve reviews" });
    });
});

module.exports = router;
