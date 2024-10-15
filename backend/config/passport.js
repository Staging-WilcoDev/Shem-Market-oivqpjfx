var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var mongoose = require("mongoose");
var User = mongoose.model("User");

function handleLogin(email, password) {
  return new Promise((resolve, reject) => {
    User.findOne({ email: email })
      .then(function (user) {
        if (!user || !user.validPassword(password)) {
          return reject({ errors: { "email or password": "is invalid" } });
        }

        return resolve(user);
      })
      .catch(reject);
  });
}

passport.use(
  new LocalStrategy(
    {
      usernameField: "user[email]",
      passwordField: "user[password]",
    },
    async function (email, password, done) {
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
