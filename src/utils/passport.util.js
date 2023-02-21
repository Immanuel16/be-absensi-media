const config = require("../configs/env.config");
const userQueries = require("../queries/user_profiles.query");
const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const { ExtractJwt } = require("passport-jwt");

require("dotenv").config();

const strategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.app.secretKey,
};

passport.use(
  "user",
  new JwtStrategy(strategyOptions, (jwtPayload, done) => {
    const { username } = jwtPayload;

    userQueries
      .findOne({
        where: {
          username,
        },
      })
      .then((results) => {
        done(null, results || false);
      });
  })
);
