const express = require("express");

const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'pug')

app.get("/", (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
    res.send()
})

app.listen(3000, () => {
  console.log("Your server is running on port 3000!");
});
