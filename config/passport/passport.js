const bCrypt = require('bcrypt-nodejs');

module.exports = (passport, user) => {
// Initialize passport local strategy and User
  var User = user;
  var LocalStrategy = require('passport-local').Strategy;

  passport.use('local-signup', new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true
    },
    (req, email, password, done) => {
      // Storing user data
      var generateHash = (password) => {
        return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
      };

      // Check to see if user exists already, if not add them
      User.findOne({
        where: {
          email: email
        }
      }).then((user) => {
        if (user) {
          return done(null, false, {
            message: 'That email is already taken'
          });
        } else {
          var userPassword = generateHash(password);

          var data = {
              email: email,

              password: userPassword,

              firstname: req.body.firstname,

              lastname: req.body.lastname

            };

          User.create(data).then(function(newUser, created) {

            if (!newUser) {

              return done(null, false);

            }

            if (newUser) {

              return done(null, newUser);

            }

          });
        }
      })
    }
  ));

  // Serialize user
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  // Deserialize user
  passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
      if (user) {
        done(null, user.get());
      } else {
        done(user.errors, null);
      }
    });
  });
};
