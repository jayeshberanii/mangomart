const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(cors({
    origin: "http://localhost:5174", // Frontend origin (adjust as needed)
    credentials: true,               // Allow cookies to be sent with requests
  }));
app.use(express.json());

// Routes
app.use("/api/v1/admin", require("./routes/adminRoutes"));
app.use("/api/v1/products", require("./routes/productRoutes"));
app.use("/api/v1/orders", require("./routes/orderRoutes"));
// console.log("Routes loaded");


// Default route
app.get("/", (req, res) => {
  res.send("Mango Selling API is running...");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
