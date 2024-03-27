const path = require("path");

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes/routes");
const upload = require("./middleware");

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB database connection
mongoose.connect(
  "mongodb+srv://lochlannoneill:zADROgfBCV2oUdx8@cluster0.5jlntnb.mongodb.net/greaves",
  {}
)
.then(() => {
  console.log("MongoDB connected: cluster0.5jlntnb.mongodb.net/greaves");
})
.catch((err) => {
  console.error("Failed to connect to MongoDB:", err);
  process.exit(1); // Exit process on MongoDB connection failure
});

// API Creation
app.use("/", routes); // Just pass the router object

app.listen(4000, () => {
  console.log("Server is running on port: 4000");
});

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
      image_url: `http://localhost:4000/images/${req.file.filename}`, // Change PORT to 4000
    });
  });
});
