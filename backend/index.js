const PORT = 4000;

// Importing required modules
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { error } = require("console");

app.use(express.json()); // any request that comes in will be parsed to json
app.use(cors()); // will connect to express app on port 4000

// MongoDB database connection
mongoose
  .connect(
    "mongodb+srv://lochlannoneill:zADROgfBCV2oUdx8@cluster0.5jlntnb.mongodb.net/greaves"
  )
  .then(() => {
    console.log("Connected to MongoDB");

    // API Creation
    app.get("/", (request, response) => {
      response.send("Express App is running");
    });

    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Could not connect to MongoDB:", err);
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
}).single("productImage");

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
