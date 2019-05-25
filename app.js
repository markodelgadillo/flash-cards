const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>There you are!</h1>");
});

app.get("/hello", (req, res) => {
  res.send("<h1>Hi, JavaScript GOD!</h1>");
});

app.listen(1717, () => {
  console.log("This is running on port 1717!");
});
