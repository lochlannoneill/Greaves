const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    default: "/images/default_user.png",
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

userSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) return next();

  try {
    const hash = await bcrypt.hash(user.password, 10);
    user.password = hash;

    // Modify username to be lowercase and remove spaces or special characters
    user.username = user.username
      .toLowerCase()
      .replace(/\s+/g, "")
      .replace(/[^\w\s]/gi, "");

    // Modify firstname to remove spaces or special characters
    user.firstname = user.firstname
      .replace(/\s+/g, "")
      .replace(/[^\w\s]/gi, "");

    // Modify lastname to ensure only one space between words
    user.lastname = user.lastname.replace(/\s+/g, " ");

    // Remove non-word characters and ensure only one space between words in lastname
    user.lastname = user.lastname.replace(/[^\w\s]|(?<=\s)\s|^\s+|\s+$/g, "");

    // Remove leading and trailing spaces from lastname
    user.lastname = user.lastname.trim();

    // Add '@' symbol to the start of the username
    if (!user.username.startsWith("@")) {
      user.username = "@" + user.username;
    }

    next();
  } catch (error) {
    next(error);
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
