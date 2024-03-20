const port = 4000;
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

    app.listen(port, () => {
      console.log(`Server running on port: ${port}`);
    });
  })
  .catch((err) => {
    console.error("Could not connect to MongoDB:", err);
  });
