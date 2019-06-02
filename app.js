const express = require("express");

const app = express();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.set("view engine", "pug");

const mainRoutes = require("./routes");
const cardRoutes = require("./routes/cards");

app.use(mainRoutes);
app.use("/cards", cardRoutes);
app.use("/static", express.static("public"));

app.use((req, res, next) => {
  console.log("world!");
  next();
});

app.use((req, res, next) => {
  const err = new Error("Not Found!");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render("error");
});

app.listen(1717, () => {
  console.log("This is running on port 1717!");
});
