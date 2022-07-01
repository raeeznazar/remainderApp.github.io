// register name, username, password

database = {
  1000: {
    username: 1000,
    uname: "raeez",
    password: 1000,
    date: "10/05/2022",
    eventText: "",
    viewEvent: [],
  },
};

const register = (uname, username, password) => {
  // username already exist
  if (username in database) {
    return {
      statuscode: 401,
      status: false,
      message: "Account number already exist",
    };
  } else {
    // add to database
    database[username] = {
      username,
      uname,
      password,
      date: 0,
      eventText: "",
      viewEvent: [],
    };

    console.log(database);

    return {
      statuscode: 200,
      status: true,
      message: "Sucessfully registered, please login",
    };
  }
};

const login = (username, password) => {
  // already in database

  if (username in database) {
    if (password == database[username]["password"]) {
      currentUser = [database]["uname"];
      currentUsername = username;
      return {
        statuscode: 200,
        status: true,
        message: "Sucessfully login",
      };
    } else {
      return {
        statuscode: 422,
        status: false,
        message: "Incorrect password",
      };
    }
  } else {
    return {
      statuscode: 401,
      status: false,
      message: "user does not exist, register first",
    };
  }
};

const add = (username, password, date, eventText) => {
  if (username in database) {
    if (password == database[username]["password"]) {
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
