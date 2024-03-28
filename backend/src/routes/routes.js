const express = require("express");
const router = express.Router();
const Product = require("../models/productModel");
const User = require("../models/userModel");
const Review = require("../models/reviewModel");
const upload = require("../middleware");

// Define routes
router.get("/", (request, response) => {
  console.log("GET request received at '/'");
  response.send("Express App is running");
});

// POST - image upload
router.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.error("File upload failed:", err);
      return res
        .status(500)
        .json({ success: false, message: "File upload failed" });
    }
    console.log("Image uploaded successfully.");
    res.json({
      success: true,
      message: "Image uploaded successfully",
      image_url: `http://localhost:4000/images/${req.file.filename}`,
    });
  });
});

// POST - new product
router.post("/products", (req, res) => {
  const newProduct = new Product({
    title: req.body.title,
    image: req.body.image,
    description: req.body.description,
    tags: req.body.tags,
    category: req.body.category,
    rating: req.body.rating,
    reviews: req.body.reviews,
    stock: req.body.stock,
    price: req.body.price,
    price_old: req.body.price_old,
  });
  console.log("Adding product:", newProduct);
  newProduct
    .save()
    .then(() => {
      console.log("Product added: " + req.body.title);
      res.json({
        success: true,
        message: "Product added: " + req.body.title,
      });
    })
    .catch((err) => {
      console.error("Failed to add product:", err);
      res
        .status(500)
        .json({ success: false, message: "Failed to add product" });
    });
});

// DELETE - product by ID
router.delete("/products/:id", (req, res) => {
  const productId = req.params.id;
  Product.findByIdAndDelete(productId)
    .then(() => {
      console.log("Product deleted:", productId);
      res.json({
        success: true,
        message: "Product deleted",
      });
    })
    .catch((err) => {
      console.error("Failed to delete product:", err);
      res
        .status(500)
        .json({ success: false, message: "Failed to delete product" });
    });
});

// GET - all products
router.get("/products", (req, res) => {
  Product.find()
    .then((products) => {
      console.log("Products retrieved.");
      res.json(products);
    })
    .catch((err) => {
      console.error("Failed to retrieve products:", err);
      res
        .status(500)
        .json({ success: false, message: "Failed to retrieve products" });
    });
});

// GET - all product ids
router.get("/products/ids", (req, res) => {
  Product.find({}, "_id")
    .then((products) => {
      console.log("Product IDs retrieved.");
      res.json(products);
    })
    .catch((err) => {
      console.error("Failed to retrieve product IDs:", err);
      res
        .status(500)
        .json({ success: false, message: "Failed to retrieve product IDs" });
    });
});

// GET - products by category
router.get("/:category/products", (req, res) => {
  const category = req.params.category;
  Product.find({ category: category })
    .then((products) => {
      console.log("Products retrieved:", category);
      res.json(products);
    })
    .catch((err) => {
      console.error("Failed to retrieve products:", err);
      res
        .status(500)
        .json({ success: false, message: "Failed to retrieve products" });
    });
});

// GET - product by ID
router.get("/products/:id", (req, res) => {
  const productId = req.params.id;
  Product.findById(productId)
    .then((product) => {
      console.log("Product retrieved:", productId);
      res.json(product);
    })
    .catch((err) => {
      console.error("Failed to retrieve product:", err);
      res
        .status(500)
        .json({ success: false, message: "Failed to retrieve product" });
    });
});

// PUT - update product by ID
router.put("/products/:id", (req, res) => {
  const productId = req.params.id;
  Product.findByIdAndUpdate(
    productId,
    {
      title: req.body.title,
      image: req.body.image,
      description: req.body.description,
      tags: req.body.tags,
      category: req.body.category,
      rating: req.body.rating,
      stock: req.body.stock,
      price: req.body.price,
      price_previous: req.body.price_previous,
    },
    { new: true }
  )
    .then((product) => {
      console.log("Product updated:", productId);
      res.json(product);
    })
    .catch((err) => {
      console.error("Failed to update product:", err);
      res
        .status(500)
        .json({ success: false, message: "Failed to update product" });
    });
});

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
      res
        .status(500)
        .json({
          success: false,
          message: "Failed to retrieve product reviews",
        });
    });
});

// POST - new review
router.post("/products/:id/reviews", (req, res) => {
  const productId = req.params.id;
  Product.findByIdAndUpdate(
    productId,
    {
      $push: { reviews: req.body },
    },
    { new: true }
  )
    .then((product) => {
      console.log("Review added to product:", productId);
      res.json(product);
    })
    .catch((err) => {
      console.error("Failed to add review to product:", err);
      res
        .status(500)
        .json({ success: false, message: "Failed to add review to product" });
    });
});

// DELETE - review by ID
router.delete("/products/:id/reviews/:reviewId", (req, res) => {
  const productId = req.params.id;
  const reviewId = req.params.reviewId;
  Product.findByIdAndUpdate(
    productId,
    {
      $pull: { reviews: { _id: reviewId } },
    },
    { new: true }
  )
    .then((product) => {
      console.log("Review deleted from product:", productId);
      res.json(product);
    })
    .catch((err) => {
      console.error("Failed to delete review from product:", err);
      res
        .status(500)
        .json({
          success: false,
          message: "Failed to delete review from product",
        });
    });
});

// Post - new user
router.post("/users", (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    image: req.body.image,
    isVerified: req.body.isVerified,
    isAdmin: req.body.isAdmin,
  });
  console.log("Adding user:", newUser);
  newUser
    .save()
    .then(() => {
      console.log("User added: " + req.body.username);
      res.json({
        success: true,
        message: "User added: " + req.body.username,
      });
    })
    .catch((err) => {
      console.error("Failed to add user:", err);
      res
        .status(500)
        .json({ success: false, message: "Failed to add user" });
    });
});

// GET - all users
router.get("/users", (req, res) => {
  User.find()
    .then((users) => {
      console.log("Users retrieved.");
      res.json(users);
    })
    .catch((err) => {
      console.error("Failed to retrieve users:", err);
      res
        .status(500)
        .json({ success: false, message: "Failed to retrieve users" });
    });
});

// GET - user by ID
router.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  User.findById(userId)
    .then((user) => {
      console.log("User retrieved:", userId);
      res.json(user);
    })
    .catch((err) => {
      console.error("Failed to retrieve user:", err);
      res
        .status(500)
        .json({ success: false, message: "Failed to retrieve user" });
    });
});

// DELETE - user by ID
router.delete("/users/:id", (req, res) => {
  const userId = req.params.id;
  User.findByIdAndDelete(userId)
    .then(() => {
      console.log("User deleted:", userId);
      res.json({
        success: true,
        message: "User deleted",
      });
    })
    .catch((err) => {
      console.error("Failed to delete user:", err);
      res
        .status(500)
        .json({ success: false, message: "Failed to delete user" });
    });
});

// PUT - update user by ID
router.put("/users/:id", (req, res) => {
  const userId = req.params.id;
  User.findByIdAndUpdate(
    userId,
    {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      image: req.body.image,
      isVerified: req.body.isVerified,
      isAdmin: req.body.isAdmin,
    },
    { new: true }
  )
    .then((user) => {
      console.log("User updated:", userId);
      res.json(user);
    })
    .catch((err) => {
      console.error("Failed to update user:", err);
      res
        .status(500)
        .json({ success: false, message: "Failed to update user" });
    });
});

// Export router
module.exports = router;
