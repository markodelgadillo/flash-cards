const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const name = req.cookies.username;
  if (name && /^[a-zA-Z]+$/.test(name)) {
    // the parameter to .render is the name of the template
    res.render("index", { name });
  } else {
    res.redirect("/hello");
  }
});

router.get("/hello", (req, res) => {
  if (req.cookies.username) {
    res.redirect("/");
  } else {
    res.render("hello");
  }
});

router.post("/hello", (req, res) => {
  if (/^[a-zA-Z]+$/.test(req.body.username)) {
    res.cookie("username", req.body.username);
    res.redirect("/");
  } else {
    res.render("nameError");
  }
});

router.post("/goodbye", (req, res) => {
  res.clearCookie("username");
  res.redirect("/hello");
});

router.get("/sandbox", (req, res) => {
  res.render("sandbox");
});

module.exports = router;
