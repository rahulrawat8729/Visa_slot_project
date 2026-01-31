const express = require("express");
const cors = require("cors");

const alertRoutes = require("./routes/alertRoutes");
const logger = require("./middlewares/logger");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

// Global Middlewares
app.use(cors());
app.use(express.json());
app.use(logger);

// Routes
app.use("/alerts", alertRoutes);

// Health check
app.get("/", (req, res) => {
  res.status(200).json({ message: "Visa Slot Alerts API is running" });
});

// Error Handler (must be last)
app.use(errorHandler);

module.exports = app;
