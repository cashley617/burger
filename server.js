// Requires
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

// Server 
var app = express();

var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Routes
var routes = require("./controllers/burgers_controller");

app.use(routes);

// Listen
app.listen(PORT, function() {
    console.log("Server is listening on: http://localhost:" + PORT);
});