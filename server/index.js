const express = require("express");
const cors = require("cors");
const userRoute = require("./routes/userRoute");
const categoryRoute = require("./routes/categoryRoute");
const User = require("./models/user");

require("dotenv").config();
require("./db");
const app = express();

const PORT = process.env.PORT || 3030;

const EMAIL = "test@example.com";
const PASSWORD = "password@123";

app.use(cors());
app.use(express.json());
app.use(userRoute);
app.use(categoryRoute);

app.all("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
