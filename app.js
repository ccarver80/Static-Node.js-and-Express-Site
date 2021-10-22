const express = require("express");
const data = require("./data/data.json");

const bodyParser = require("body-parser");
const { render } = require("pug");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/static', express.static("public"));

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("projects", (res, req) => {
  res.render("project");
});

app.listen(3000, () => {
  console.log("Your server is running on port 3000!");
});
