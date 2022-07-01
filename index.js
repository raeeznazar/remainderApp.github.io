//import express
const express = require("express");

// importing data service file
const dataService = require("./services/data.services");

//create server app using express
const app = express();

// to parse jason
app.use(express.json());

app.get("/", (req, res) => {
  res.send("GET REQUEST");
});

// register function call

app.post("/register", (req, res) => {
  const result = dataService.register(
    req.body.uname,
    req.body.username,
    req.body.password
  );
  res.status(result.statuscode).json(result);
});

app.post("/add", (req, res) => {
  const result = dataService.add(
    req.body.username,
    req.body.password,
    req.body.date,
    req.body.eventText
  );
  res.status(result.statuscode).json(result);
});

app.post("/viewEvent", (req, res) => {
  const result = dataService.viewEvent(req.body.username);
  res.status(result.statuscode).json(result);
});

app.post("/login", (req, res) => {
  const result = dataService.login(req.body.username, req.body.password);
  res.status(result.statuscode).json(result);
});

app.listen(3001, () => {
  console.log("server started at 3001");
});
