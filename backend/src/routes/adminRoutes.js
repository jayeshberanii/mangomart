const express = require("express");
const router = express.Router();
const { loginAdmin, registerAdmin, getUser } = require("../controllers/adminController");
const { protect } = require("../middleware/authMiddleware");

// Login
router.post("/login", loginAdmin);

// Optional: Register route (run once to create admin)
router.post("/register", registerAdmin);

// Get user details 
router.get("/user",protect, getUser);

module.exports = router;
