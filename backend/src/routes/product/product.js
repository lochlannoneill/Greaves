const express = require("express");
const router = express.Router();
const Product = require("../../models/productModel");

// POST - new product
router.post("/", (req, res) => {
  const newProduct = new Product({
    title: req.body.title,
    image: req.body.image,
    description: req.body.description,
    tags: req.body.tags,
    category: req.body.category,
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
router.delete("/:id", (req, res) => {
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
router.get("/", (req, res) => {
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
router.get("/ids", (req, res) => {
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
router.get("/:category", (req, res) => {
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

// TODO - FIX THIS
// ERROR - THIS IS NOT WORKING
// GET - product by ID
router.get("/:id", (req, res) => {
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
router.put("/:id", (req, res) => {
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

module.exports = router;
