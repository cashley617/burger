// Express
var express = require("express");

// Create router
var router = express.Router(); 

// Import the burger model 
var burger = require("../models/burger");

// Create routes and logic 
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
    res.render("index", hbsObject);
    });
});

router.post("/api/burger", function(req, res) {
    console.log("Burger Route");
    burger.insertOne(
        ["burger_name", "devoured"], 
        [req.body["burger_name"], req.body.devoured], 
        function(result) {
        console.log(result);
    res.json(result);
    });
});

router.put("/api/burger/:id", function(req, res) {
    var burgerID = req.params.id 
    var condition = "id = " + burgerID;

    console.log("Burger Route with ID is " + burgerID);

    burger.updateOne(
        ["devoured"],
        [req.body.devoured],
        condition, 
        function(result) {
            console.log(result);
        res.json(result);
        });
});


// Export routes
module.exports = router;

