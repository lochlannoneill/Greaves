const env = require("../config/env.js"); // Import your env.js
const path = require("path");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes/routes");

// Middleware
app.use(express.json());
app.use(cors());
app.use("/images", express.static(path.join(__dirname, "upload/images")));

// MongoDB database connection using environment variable
mongoose
  .connect(env.MONGODB_URI, {}) // Use env.js for connection string
  .then(() => {
    console.log("MongoDB connected: cluster0.5jlntnb.mongodb.net/greaves");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1); // Exit process on MongoDB connection failure
  });

// API Creation
app.use("/", routes); // Just pass the router object

// Start the server
app.listen(4000, () => {
  console.log("Server is running on port: 4000");
});
