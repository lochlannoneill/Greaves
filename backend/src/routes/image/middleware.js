// Install the Azure Blob SDK: npm install @azure/storage-blob
const env = require("../../../config/env.js"); // Import your env.js
const { BlobServiceClient } = require("@azure/storage-blob");
const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require("uuid"); // For unique file names

// Image upload with Multer (in memory)
const storage = multer.memoryStorage(); // No local file storage
const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 }, // 5MB limit
}).single("image");

const uploadToAzure = async (file) => {
  const blobServiceClient = BlobServiceClient.fromConnectionString(
    env.AZURE_STORAGE_CONNECTION_STRING
  );

  // Specify the container name (create it if it doesn't exist)
  const containerName = "images";
  const containerClient = blobServiceClient.getContainerClient(containerName);

  // Ensure the container exists with public access level
  await containerClient.createIfNotExists({ access: "container" }); // or "blob"

  // Generate a unique file name for the blob
  const blobName = `${uuidv4()}${path.extname(file.originalname)}`;
  const blockBlobClient = containerClient.getBlockBlobClient(blobName);

  // Set the content type based on the file's mimetype
  const contentType = file.mimetype; // Use the mimetype from the uploaded file

  // Upload the file buffer to Azure Blob Storage with the specified content type
  const uploadResponse = await blockBlobClient.uploadData(file.buffer, {
    blobHTTPHeaders: { blobContentType: contentType }, // Specify the content type here
  });

  // Return the URL of the uploaded image
  return blockBlobClient.url;
};

module.exports = { upload, uploadToAzure };
