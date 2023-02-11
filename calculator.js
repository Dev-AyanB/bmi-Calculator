
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator.html", function (req, res) {

    var weight = Number(req.body.weight);
    var Height = Number(req.body.Height);
    var result = weight / (Height * Height);

    res.send("Your BMI is " + result);
});

app.listen(3000, function () {
    console.log("Server started at 3000");
});