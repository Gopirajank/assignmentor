const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const route = require("./routes/routes");
const dotenv = require("dotenv");
// CORS origin issue
app.use(cors({ origin: "*" }));

// Environment variable path
dotenv.config();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", route);

const PORT = process.env.PORT || 6500;

// Mongoose connection
mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('error', err => {
  console.error('Error connecting to MongoDB:', err);
});

// Port connection
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
