// JsonWebToken import
const jwt = require("jsonwebtoken");

//import db
const db = require("./db");

// register name, username, password

const database = {
  1000: {
    username: 1000,
    uname: "raeez",
    password: 1000,
    date: "10/05/2022",
    eventText: "",
    viewEvent: [],
  },
};

// Register function

const register = (uname, username, password) => {
  // asynchronous

  return db.User.findOne({ username }).then((user) => {
    console.log(user);
    // if user already exist
    if (user) {
      return {
        statuscode: 401,
        status: false,
        message: "Account number already exist",
      };
    } else {
      //create object for model that we created in database

      const newUser = new db.User({
        username,
        uname,
        password,
        date: "",
        eventText: "",
        viewEvent: [],
      });
      //method to save new user in db ie newUser.save()
      newUser.save();
      return {
        statuscode: 200,
        status: true,
        message: "Sucessfully registered, please login",
      };
    }
  });

  //   // username already exist
  //   if (username in database) {
  //     return {
  //       statuscode: 401,
  //       status: false,
  //       message: "Account number already exist",
  //     };
  //   } else {
  //     // add to database
  //     database[username] = {
  //       username,
  //       uname,
  //       password,
  //       date: 0,
  //       eventText: "",
  //       viewEvent: [],
  //     };

  //     console.log(database);

  //     return {
  //       statuscode: 200,
  //       status: true,
  //       message: "Sucessfully registered, please login",
  //     };
  //   }
};

// Login function

const login = (username, password) => {
  //  fetch details from mongodb
  return db.User.findOne({ username, password })
  .then((user) => {
    if (user) {
      currentUser = user.uname;
      currentUsername = username;
      const token = jwt.sign(
        {
          // store username in currentUsername
          currentUsername: username,
        },
        "supersecret123456789"
      );

      return {
        statuscode: 200,
        status: true,
        message: "Sucessfully login",
        token,

        currentUser,
        currentUsername,
      };
    } else {
      return {
        statuscode: 401,
        status: false,
        message: "invalid credentials",
      };
    }
  });
  // already in database
  //   if (username in database) {
  //     if (password == database[username]["password"]) {
  //       currentUser = database[username]["uname"];
  //       currentUsername = username;

  //       const token = jwt.sign(
  //         {
  //           // store username in currentUsername
  //           currentUsername: username,
  //         },
  //         "supersecret123456789"
  //       );

  //       return {
  //         statuscode: 200,
  //         status: true,
  //         message: "Sucessfully login",
  //         token,

  //         currentUser,
  //         currentUsername,
  //       };
  //     } else {
  //       return {
  //         statuscode: 422,
  //         status: false,
  //         message: "Incorrect password",
  //       };
  //     }
  //   } else {
  //     return {
  //       statuscode: 401,
  //       status: false,
  //       message: "user does not exist, register first",
  //     };
  //   }
};

const add = (req, username, password, date, eventText) => {
  console.log(req.reqcurrentUsername, username);

  //   if (username in database && req.reqcurrentUsername === username)
  if (username in database) {
    if (password == database[username]["password"]) {
      if (req.reqcurrentUsername !== username) {
        return {
          statuscode: 401,
          status: false,
          message: "access denined",
        };
      } else {
        database[username]["date"] = date;
        database[username]["evenText"] = eventText;
        database[username]["viewEvent"].push({
          date: date,
          details: eventText,
        });
        return {
          statuscode: 200,
          status: true,
          message: `successfully addedadded event date:-- ${database[username]["date"]} & event details:-- ${database[username]["evenText"]}`,
        };
      }
    }
    return {
      statuscode: 422,
      status: false,
      message: "Incorrect password",
    };
  }
  return {
    statuscode: 401,
    status: false,
    message: "user does not exist, register first",
  };
};

const viewEvent = (username) => {
  if (username in database) {
    return {
      statuscode: 200,
      status: true,
      message: database[username].viewEvent,
    };
  } else {
    return {
      statuscode: 422,
      status: false,
      message: "Account number does not exist",
    };
  }
};

module.exports = {
  register,
  login,
  add,
  viewEvent,
};
