const express = require("express");
const router = express.Router();
const {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrderStatus,
  deleteOrder,
  updateOrder
} = require("../controllers/orderController");

const { protect } = require("../middleware/authMiddleware");

// Public route to create order
router.post("/", createOrder);

// Admin routes
router.get("/", protect, getAllOrders);
router.get("/:id", protect, getOrderById);
router.put("/:id", protect, updateOrder);
router.put("/:id/status", protect, updateOrderStatus);
router.delete("/:id", protect, deleteOrder);

module.exports = router;
