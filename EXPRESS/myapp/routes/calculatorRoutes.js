const express = require("express");
const calculatorController = require("../controllers/calculatorController");
const router = express.Router();

// new route for adding two numbers
router.get("/add", (req, res) => {
  console.log(req.query);
  calculatorController.addNumbers(req, res);
});

// new route for subtracting two numbers
router.get("/subtract", (req, res) => {
  console.log(req.query);
  calculatorController.subtractNumbers(req, res);
});

// new route for multiplying two numbers
router.get("/multiply", (req, res) => {
  console.log(req.query);
  calculatorController.multiplyNumbers(req, res);
});

// new route for dividinig two numbers
router.get("/divide", (req, res) => {
  console.log(req.query);
  calculatorController.divideNumbers(req, res);
});

module.exports = router;
