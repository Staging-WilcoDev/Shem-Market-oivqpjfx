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

passport.use(
  new LocalStrategy(
    {
      usernameField: "user[email]",
      passwordField: "user[password]",
    },
    function (email, password, done) {
      handleLogin(email, password)
        .then((user) => {
          done(null, user);
        })
        .catch((error) => {
          done(null, false, error);
        });
    }
  )
);
