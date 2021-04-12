const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
var cors = require("cors");

const employeesRouter = require("./routes/employees");
const projectsRouter = require("./routes/projects");
const getemployeedetailsRouter = require("./routes/getemployeedetails");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:8200" }));

app.use("/employees", employeesRouter);
app.use("/projects", projectsRouter);
app.use("/getemployeedetails", getemployeedetailsRouter);

app.use("/", function (req, res) {
  res.send("project works :-)");
});

const server = app.listen(3000, () => {
  console.log("listening on port %s...", server.address().port);
});
