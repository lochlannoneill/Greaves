// Importing required modules
const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

// Define PORT
const PORT = 4000;

// Create Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// API Creation
app.get("/", (request, response) => {
  console.log("GET request received at '/'");
  response.send("Express App is running");
});

// Start the server
const server = app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);

  // MongoDB database connection
  mongoose
    .connect(
      "mongodb+srv://lochlannoneill:zADROgfBCV2oUdx8@cluster0.5jlntnb.mongodb.net/greaves"
    )
    .then(() => {
      console.log("MongoDB connected successfully.");
      console.log("Database: greaves");
      console.log("Host: cluster0.5jlntnb.mongodb.net");
      console.log("Port: default MongoDB port (27017)");
    })
    .catch((err) => {
      console.error("Failed to connect to MongoDB:", err);
      process.exit(1); // Exit process on MongoDB connection failure
    });
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

const upload = multer({ storage: storage }).single("product");

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
  title: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  tags: [{ type: String, lowercase: true }],
  category: {
    type: String,
    lowercase: true,
    required: true,
    validate: {
      validator: function (value) {
        const allowedCategories = ["men", "women", "boys", "girls"];
        return allowedCategories.includes(value.toLowerCase());
      },
      message: (props) =>
        `${props.value} is not a valid category. Category must be 'men', 'women', 'boys', or 'girls'.`,
    },
  },
  rating: { type: Number, default: 0 },
  stock: {
    small: { type: Number, min: 0, default: 0 },
    medium: { type: Number, min: 0, default: 0 },
    large: { type: Number, min: 0, default: 0 },
    xlarge: { type: Number, min: 0, default: 0 },
    xxlarge: { type: Number, min: 0, default: 0 },
  },
  price: { type: Number, required: true, min: 0 },
  price_previous: { type: Number, min: 0 },
  date: { type: Date, default: Date.now },
});

// Middleware to convert tags and categories to lowercase before saving
productSchema.pre("save", function (next) {
  this.tags = this.tags.map((tag) => tag.toLowerCase());
  this.category = this.category.toLowerCase();
  next();
});

// Creating a Mongoose model for the product schema
const Product = mongoose.model("Product", productSchema);

// API for adding a product
app.post("/addProduct", (req, res) => {
  const newProduct = new Product({
    title: req.body.title,
    image: req.body.image,
    description: req.body.description,
    tags: req.body.tags,
    category: req.body.category,
    rating: req.body.rating,
    stock: req.body.stock,
    price: req.body.price,
    price_previous: req.body.price_previous,
  });
  console.log("Adding product:", newProduct);
  newProduct
    .save()
    .then(() => {
      console.log("Product added successfully: " + req.body.title);
      res.json({
        success: true,
        message: "Product added successfully: " + req.body.title,
      });
    })
    .catch((err) => {
      console.error("Failed to add product:", err);
      res
        .status(500)
        .json({ success: false, message: "Failed to add product" });
    });
});
