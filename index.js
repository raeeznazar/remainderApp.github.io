//import express
const express = require("express");
const { JsonWebTokenError } = require("jsonwebtoken");

// importing data service file
const dataService = require("./services/data.services");

//create server app using express
const app = express();

// to parse jason
app.use(express.json());

// JsonWebToken import
const jwt = require("jsonwebtoken");

app.get("/", (req, res) => {
  res.send("GET REQUEST");
});

// jwtMiddleWare
const jwtMiddleWare = (req, res, next) => {
  try {
    const token = req.body.token;
    const data = jwt.verify(token, "supersecret123456789");
    console.log(jwt.verify(token, "supersecret123456789"));
    req.reqcurrentUsername = data.currentUsername;
    next();
  } catch {
    res.status(401).json({
      status: false,
      message: "please login",
    });
  }
};

// register function call

app.post("/register", (req, res) => {
  const result = dataService.register(
    req.body.uname,
    req.body.username,
    req.body.password
  );
  res.status(result.statuscode).json(result);
});

app.post("/login", (req, res) => {
  const result = dataService.login(req.body.username, req.body.password);
  res.status(result.statuscode).json(result);
});

app.post("/add", jwtMiddleWare, (req, res) => {
  const result = dataService.add(
    req,
    req.body.username,
    req.body.password,
    req.body.date,
    req.body.eventText
  );
  res.status(result.statuscode).json(result);
});

app.post("/viewEvent", jwtMiddleWare, (req, res) => {
  const result = dataService.viewEvent(req.body.username);
  res.status(result.statuscode).json(result);
});

app.listen(3001, () => {
  console.log("server started at 3001");
});
