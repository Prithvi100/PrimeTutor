const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

app.get("/VideoCard", (req, res) => {
  res.sendFile("assets/sample.mp4", { root: path.join(__dirname) });
});

app.listen(3030, (req, res) => {
  console.log("Listening to the video....");
});

// wiseties
// env4y8pxn0V6Q1XQ
