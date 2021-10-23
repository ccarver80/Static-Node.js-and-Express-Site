const express = require("express"); // Pulls in express!

const { render } = require("pug"); //Pulls in Pug for rendering templates

const app = express(); //Creates a express app

app.use("/static", express.static("public")); //set static folder to "public"

app.set("view engine", "pug");// create view engine to pug

const indexRoute = require("./routes/index");
const aboutRoute = require("./routes/about");           //Require my 3 routes to my pages
const projectsRoute = require("./routes/projects");

app.use(indexRoute);
app.use(aboutRoute);        //Telling express to use these routes 
app.use(projectsRoute);

app.use((req, res, next) => {
  const err = new Error("Sorry This page is not found!"); // Page not found error
  err.status = 404;
  next(err);
});

// error handler, checks if error is a 404, if not render a general error message 
app.use((err, req, res, next) => {   
  if (err.status === 404) {
  res.locals.error = err;
  res.status(err.status);
  res.render("error");
  console.log("Error 404: Page could not be found.")
  } else {
    err.status = 500; 
    res.locals.error = err;
    err.message = "OH NO! Something went wrong on the server!"
    res.status(err.status);
    res.render("error")
    console.log("Error 500: Something went wrong")
  }
});

//Turns on express app to start server on localhost:3000
app.listen(3000, () => {
  console.log("Your server is running on port 3000!");
});
