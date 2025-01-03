const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoutes = require("./routes/product");
const cartRoutes = require("./routes/cart");
const orderRoutes = require("./routes/order");
dotenv.config();
app.use(express.json());
app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running on port 5000");
});
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Database connection error:", err.message);
  });

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoutes);
app.use("/api/carts", cartRoutes);
app.use("/api/orders", orderRoutes    );