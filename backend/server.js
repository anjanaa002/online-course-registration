const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");

const app = express();
app.use(cors());
app.use(express.json());

connectDB();
const paymentRoutes = require("./routes/paymentRoutes");
app.use("/api/payment", paymentRoutes);
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/courses", require("./routes/courseRoutes"));
app.use("/api/enroll", require("./routes/enrollRoutes"));
// app.use("/api/payment", require("./routes/paymentRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));


app.listen(5000, () => console.log("Server running on port 5000"));
