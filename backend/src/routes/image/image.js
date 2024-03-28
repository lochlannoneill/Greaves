const express = require("express");
const router = express.Router();
const upload = require("./middleware");

// POST - image upload
router.post("/", (req, res) => {
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

  module.exports = router;