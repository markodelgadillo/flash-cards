const express = require("express");
const router = express.Router();

// using res.locals to set the value of the variable in the template file
// since all routers in this file are for /cards, the get parameter can be changed from '/cards' to just '/'
router.get("/", (req, res) => {
  res.locals.prompt = "Who is buried in Grant's tomb?";
  res.locals.hint = "Think about who's tomb it is!";
  res.render("card");
});

module.exports = router;
