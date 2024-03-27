const path = require("path");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes/routes");

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
