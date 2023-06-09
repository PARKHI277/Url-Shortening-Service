require("dotenv").config();
const express = require("express");
require("./config/mongodb");
const client = require("./config/redis");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const authRoutes = require("./routes/auth");
const urlRoutes = require("./routes/url");
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.send("Hi, Api is working");
});

app.use("/api/v1", authRoutes);
app.use("/api/v1", urlRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Connection succesful at port ${port}`);
});
