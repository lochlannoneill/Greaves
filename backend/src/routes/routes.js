const express = require("express");
const router = express.Router();

// Import route handlers for each resource
const reviewRoutes = require("./review/review");
const productRoutes = require("./product/product");
const userRoutes = require("./user/user");
const imageRoutes = require("./image/image");

// Use the route handlers
router.use("/reviews", reviewRoutes);
router.use("/products", productRoutes);
router.use("/users", userRoutes);
router.use("/images", imageRoutes);

// Default route
router.get("/", (request, response) => {
  console.log("GET request received at '/'");
  response.send("Express App is running");
});

module.exports = router;
