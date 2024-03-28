const multer = require("multer");
const path = require("path");

// Image storage engine
const storage = multer.diskStorage({
  destination: path.join(__dirname, "./upload/images"), // Absolute path for file upload
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
}).single("image");

module.exports = upload;
