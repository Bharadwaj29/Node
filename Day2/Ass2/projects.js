const express = require("express");
const router = express.Router();
const projData = require("./projects.json");

router.get("/", function (req, res) {
  res.status(200).json(projData);
});

router.get("/:id", function (req, res) {
  let found = projData.find(function (project) {
    return project.id === parseInt(req.params.id);
  });

  if (found) {
    res.status(200).json(found);
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;
