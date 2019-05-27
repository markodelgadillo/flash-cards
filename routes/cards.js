const express = require("express");
const router = express.Router();
const { data } = require("../data/flashcardData.json");
const { cards } = data;

// using res.locals to set the value of the variable in the template file
// since all routers in this file are for /cards, the get parameter can be changed from '/cards' to just '/'
// ---------
// router.get("/", (req, res) => {
//   res.locals.prompt = "Who is buried in Grant's tomb?";
//   res.locals.hint = "Think about who's tomb it is!";
//   res.render("card");
// });
// -----------------------------------------------------

// using '/:id' will grab the id from the URL and use that to display the corresponding data from the JSON
router.get("/:id", (req, res) => {
  res.render("card", {
    prompt: cards[req.params.id].question,
    hint: cards[req.params.id].hint
  });
});

module.exports = router;
