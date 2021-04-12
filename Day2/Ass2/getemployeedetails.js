const express = require("express");

const router = express.Router();
const fetch = require("node-fetch");

router.get("/", function (req, res) {
  fetch("http://localhost:3000/employees")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let newData = [];
      data.forEach(function (employee) {
        var projId = employee.projectId;

        fetch("http://localhost:3000/projects/" + projId)
          .then(function (response) {
            return response.json();
          })
          .then(function (projData) {
            newData.push(projData);
            console.log(newData);

            let displayData = data.concat(newData);
            if (data.length === newData.length) {
              res.status(200).json(displayData);
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});

module.exports = router;
