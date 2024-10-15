var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var mongoose = require("mongoose");
var User = mongoose.model("User");

function handleLogin(username, password) {
  return new Promise((resolve, reject) => {
    User.findOne({ username: username, password: password }, (err, user) => {
      if (err) {
        reject(err);
      } else {
        resolve(user);
      }
    });
  });
}

// Call the function
handleLogin("exampleUser", "examplePassword")
  .then((user) => {
    console.log("User found:", user);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
