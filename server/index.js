const express = require("express");
const cors = require("cors");
const app = express();

const cookieParser = require('cookie-parser')
require("dotenv").config();
const connectDB = require("./config/db");
const router = require('./routes/index')

// Middlewares
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use(express.json())
app.use(cookieParser())

app.get("/", (req, res) => {
  res.json({
    message: "Server running on " + PORT,
  });
});

// api endpoints
app.use("/api" , router)


const PORT = process.env.PORT || 8000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
  });
});
