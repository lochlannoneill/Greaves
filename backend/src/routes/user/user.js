const express = require("express");
const router = express.Router();
const User = require("../../models/userModel");

// Post - new user
router.post("/", (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    image: req.body.image,
    isVerified: req.body.isVerified,
    isAdmin: req.body.isAdmin,
  });
  console.log("Adding user:", newUser);
  newUser
    .save()
    .then(() => {
      console.log("User added: " + req.body.username);
      res.json({
        success: true,
        message: "User added: " + req.body.username,
      });
    })
    .catch((err) => {
      console.error("Failed to add user:", err);
      res.status(500).json({ success: false, message: "Failed to add user" });
    });
});

// GET - all users
router.get("/", (req, res) => {
  User.find()
    .then((users) => {
      console.log("Users retrieved.");
      res.json(users);
    })
    .catch((err) => {
      console.error("Failed to retrieve users:", err);
      res
        .status(500)
        .json({ success: false, message: "Failed to retrieve users" });
    });
});

// GET - all users ids
router.get("/ids", (req, res) => {
  User.find({}, "_id")
    .then((users) => {
      console.log("User IDs retrieved.");
      res.json(users);
    })
    .catch((err) => {
      console.error("Failed to retrieve user IDs:", err);
      res
        .status(500)
        .json({ success: false, message: "Failed to retrieve user IDs" });
    });
});

// GET - user by ID
router.get("/:id", (req, res) => {
  const userId = req.params.id;
  User.findById(userId)
    .then((user) => {
      console.log("User retrieved:", userId);
      res.json(user);
    })
    .catch((err) => {
      console.error("Failed to retrieve user:", err);
      res
        .status(500)
        .json({ success: false, message: "Failed to retrieve user" });
    });
});

// DELETE - user by ID
router.delete("/:id", (req, res) => {
  const userId = req.params.id;
  User.findByIdAndDelete(userId)
    .then(() => {
      console.log("User deleted:", userId);
      res.json({
        success: true,
        message: "User deleted",
      });
    })
    .catch((err) => {
      console.error("Failed to delete user:", err);
      res
        .status(500)
        .json({ success: false, message: "Failed to delete user" });
    });
});

// PUT - update user by ID
router.put("/:id", (req, res) => {
  const userId = req.params.id;
  User.findByIdAndUpdate(
    userId,
    {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      image: req.body.image,
      isVerified: req.body.isVerified,
      isAdmin: req.body.isAdmin,
    },
    { new: true }
  )
    .then((user) => {
      console.log("User updated:", userId);
      res.json(user);
    })
    .catch((err) => {
      console.error("Failed to update user:", err);
      res
        .status(500)
        .json({ success: false, message: "Failed to update user" });
    });
});

module.exports = router;
