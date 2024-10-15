var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var mongoose = require("mongoose");
var User = mongoose.model("User");

passport.use(
  new LocalStrategy(
    {
      usernameField: "user[email]",
      passwordField: "user[password]",
    },
    async function (email, password, done) {
      try {
        const user = await User.findOne({ email: email });
        if (!user || !user.validPassword(password)) {
          return done(null, false, {
            errors: { "email or password": "is invalid" },
          });
        }

        return await done(null, user);
      } catch (e) {
        done(e);
      }
    }
  )
);
