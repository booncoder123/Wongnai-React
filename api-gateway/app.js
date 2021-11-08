const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();
const userRoutes = require("./Routes/users");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/user", userRoutes);

app.listen(process.env.PORT, function () {
  console.log(`  Port : ${process.env.PORT}`);
});
