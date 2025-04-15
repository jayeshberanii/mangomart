const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(cors({
    origin: [
      "http://localhost:5174", 
      "http://localhost:5173",
      "http://69.62.84.37:5173",
      "http://69.62.84.37:5174",
      "http://69.62.84.37:4173",
      "http://69.62.84.37:4174",
      "http://themangomart.in",
      "https://themangomart.in",
      "https://admin.themangomart.in",
      "http://admin.themangomart.in",
      "http://www.themangomart.in",
      "https://www.themangomart.in"
    ], // Frontend origin (adjust as needed)
    credentials: true,               // Allow cookies to be sent with requests
  }));
app.use(express.json());

// Routes
app.use("/api/v1/admin", require("./routes/adminRoutes"));
app.use("/api/v1/products", require("./routes/productRoutes"));
app.use("/api/v1/orders", require("./routes/orderRoutes"));

// Default route
app.get("/", (req, res) => {
  res.send("Mango Selling API is running...");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
