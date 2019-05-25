const express = require("express");

const app = express();

const names = [
  { first: null, last: "Einstein" },
  { first: "Marko", last: "Delgadillo" },
  { first: "Breadna", last: "Pancakes" },
  { first: "Karen", last: "Dahmer" }
];

app.set("view engine", "pug");

app.get("/", (req, res) => {
  // the parameter to .render is the name of the template
  res.render("index");
});

// // routed to the /cards endpoint
// app.get("/cards", (req, res) => {
//   // rendering using the card.pug template
//   // sending the value of prompt in the parameter to the variable of the same name in the template file
//   res.render("card", { prompt: "Who is buried in Grant's tomb?", hint: "Think about who's tomb it is!" });
// });

// using res.locals to set the value of the variable in the template file
app.get("/cards", (req, res) => {
  res.locals.prompt = "Who is buried in Grant's tomb?";
  res.locals.hint = "Think about who's tomb it is!";
  // res.locals.names = names;
  res.render("card");
});

app.get("/sandbox", (req, res) => {
  res.render();
});

app.listen(1717, () => {
  console.log("This is running on port 1717!");
});
