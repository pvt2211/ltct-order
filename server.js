const express = require("express");
const app = express();
// var cors = require('cors')
const bodyParser = require("body-parser");
require("dotenv").load();
const port = process.env.PORT || 3000;

// app.use(cors());

app.get("/products/:id", function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for all origins!" });
});

// app.listen(80, function () {
//   console.log("CORS-enabled web server listening on port 80");
// });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let routes = require("./api/routes"); //importing route
routes(app);

app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + " not found" });
});

app.listen(port);

console.log("RESTful API server started on: " + port);
