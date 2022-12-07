const express = require("express");
const bcrypt = require("bcryptjs");
const Router = express.Router();
const User = require("../models/user");

Router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    const [user] = await User.find({ email });
    if (!user) {
      return res.status(400).send("User does not exist.");
    }

    const isEqual = await bcrypt.compare(password, user.password);
    if (!isEqual) {
      res.status(400).send({
        result: "ERROR",
      });
    } else {
      res.send({
        result: "OK",
      });
    }
  } catch (error) {
    console.log(error);
  }
});

Router.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const encryptedPassword = await bcrypt.hash(password, 8);

    console.log({ encryptedPassword });
    const user = new User({
      username,
      email,
      password: encryptedPassword,
    });
    const result = await user.save();

    console.log({ result });
    res.send({ success: true });
  } catch (error) {
    console.log({ error });
  }
});

module.exports = Router;
