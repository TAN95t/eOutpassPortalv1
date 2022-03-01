const express = require("express");
const dotenv = require('dotenv');
const color = require("colors");
const connectDB = require('./config/db');
const cors = require('cors');
// Route files
const outpass = require("./routes/outpass");
const auth = require("./routes/auth");

// Load env vars
dotenv.config({ path: "./config/config.env" });

// Connect to database
connectDB();

const app = express();
app.use(cors());
// Body Parser
app.use(express.json());

// Mount routers
app.use("/api/v1/outpass", outpass);
app.use("/api/v1/auth", auth);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server running on port ${PORT}`.yellow.bold
  )
);