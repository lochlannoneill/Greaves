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
  .connect("mongodb+srv://lochlannoneill:zADROgfBCV2oUdx8@cluster0.5jlntnb.mongodb.net/greaves", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
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
const product = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  tags: [String],
  categories: [String],
  rating: Number,
  reviews: Number,
  stock: {
    small: Number,
    medium: Number,
    large: Number,
    xlarge: Number,
    xxlarge: Number,
    default: 0
  },
  price: {
    type: Number,
    required: true,
  },
  price_old: Number,
  date:{
    type: Date,
    default: Date.now
  }
});