const passport = require("passport");
const jwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("../model/user");

//set secretkey
let opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "NMaSNppZvKmDVqtVwaUWLBviPaO5qa9X", //secret key used to encrypt/decrypt
};

//passport use
passport.use(
  new jwtStrategy(opts, function (jwtPayLoad, done) {
    User.findById(jwtPayLoad._id, function (err, user) {
      if (err) {
        //if error occured
        console.log("Error in finding User --> Passport JWT");
        return done(err);
      }
      if (User) {
        //if user found
        return done(null, user);
      } else {
        //if user not found
        return done(null, false);
      }
    });
  })
);
