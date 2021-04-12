const express = require("express");

const router = express.Router();
const empData = require("./employees.json");

router.get("/", function (req, res) {
  res.status(200).json(empData);
});

router.get("/:id", function (req, res) {
  let found = empData.find(function (employee) {
    return employee.id === parseInt(req.params.id);
  });

  if (found) {
    res.status(200).json(found);
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;
