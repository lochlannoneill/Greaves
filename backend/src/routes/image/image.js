const express = require("express");
const router = express.Router();
const { upload, uploadToAzure } = require("./middleware");

// POST - image upload to Azure Blob
router.post("/", (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      console.error("File upload failed:", err);
      return res.status(500).json({
        success: false,
        message: "File upload failed",
        error: err.message,
      });
    }

    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: "No file uploaded" });
    }

    try {
      // Upload file to Azure Blob Storage
      const imageUrl = await uploadToAzure(req.file);

      // Corrected template literal syntax
      console.log(`Image uploaded successfully to Azure: ${imageUrl}`);
      res.json({
        success: true,
        message: "Image uploaded successfully",
        image_url: imageUrl,
      });
    } catch (uploadError) {
      console.error("Azure Blob upload failed:", uploadError);
      res.status(500).json({
        success: false,
        message: "Azure Blob upload failed",
        error: uploadError.message,
      });
    }
  });
});

module.exports = router;
