const express = require("express");
const router = express.Router();
const { data } = require("../data/flashcardData.json");
const { cards } = data;

router.get("/", (req, res) => {
  const cardTotal = cards.length;
  const id = Math.floor(Math.random() * cardTotal);
  res.redirect(`${req.baseUrl}/${id}`);
});

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
  const name = req.cookies.username;
  const { side } = req.query;
  const { id } = req.params;
  const regex = RegExp(/^.*(answer|question).*$/gm);
  const check = regex.test(side);

  if (!side || !check) {
    res.redirect(`/cards/${id}?side=question`);
  }
  const text = cards[id][side];
  const question = cards[id].question;
  const { hint } = cards[id];
  let flipUrl;
  let templateData;
  if (side === "answer") {
    flipUrl = req.baseUrl + req.url.replace(/answer/gi, "question");
    templateData = { text, side, flipUrl, question, name };
  } else {
    flipUrl = req.baseUrl + req.url.replace(/question/gi, "answer");
    templateData = { text, hint, side, flipUrl, name };
  }
  res.render("card", templateData);
});

module.exports = router;
