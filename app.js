const express = require("express");


const { render } = require("pug");

const app = express();
app.use('/static', express.static("public")); 

app.set("view engine", "pug");

const indexRoute = require('./routes/index');
const aboutRoute = require('./routes/about');
const projectsRoute = require('./routes/projects');

app.use(indexRoute);
app.use(aboutRoute);
app.use(projectsRoute);


app.listen(3000, () => {
  console.log("Your server is running on port 3000!");
});
