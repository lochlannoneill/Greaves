const PORT = 4000;

// Importing required modules
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB database connection
mongoose
  .connect(
    "mongodb+srv://lochlannoneill:zADROgfBCV2oUdx8@cluster0.5jlntnb.mongodb.net/greaves",
    {}
  )
  .then(() => {
    console.log("MongoDB connected successfully.");
    console.log("Database: greaves");
    console.log("Host: cluster0.5jlntnb.mongodb.net");
    console.log("Port: default MongoDB port (27017)");

    // API Creation
    app.get("/", (request, response) => {
      console.log("GET request received at '/'");
      response.send("Express App is running");
    });

    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1); // Exit process on MongoDB connection failure
  });

// Image storage engine
const storage = multer.diskStorage({
  destination: path.join(__dirname, "upload/images"), // Absolute path for file upload
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
}).single("product");

// API for image upload
app.use("/images", express.static(path.join(__dirname, "upload/images")));
app.post("/upload", (req, res) => {
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
      image_url: `http://localhost:${PORT}/images/${req.file.filename}`,
    });
  });
});

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
  categories: [String],
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

app.post("/addProduct", (req, res) => {
  const newProduct = new Product({
    title: req.body.title,
    image: req.body.image,
    description: req.body.description,
    tags: req.body.tags,
    categories: req.body.categories,
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

// Delete product by ID
app.delete("/products/:id", (req, res) => {
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

// API for getting all products
app.get("/products", (req, res) => {
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

// API for getting all products by category
app.get("/:category/products", (req, res) => {
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

// API for getting a product by ID
app.get("/product/:id", (req, res) => {
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

// API for updating a product by ID
app.put("/updateProduct/:id", (req, res) => {
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
