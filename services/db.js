//import mongoose
const mongoose = require("mongoose");

//connection string to connect db with server
mongoose.connect("mongodb://localhost:27017/remainderServer", {
  useNewUrlParser: true,
});

const User = mongoose.model("User", {
  username: Number,
  uname: String,
  password: String,
  date: String,
  eventText: String,
  viewEvent: [],
});

module.exports = {
  User,
};
