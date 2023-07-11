import session from "express-session";
import passport from "passport";
const configSession = (app) => {
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });
};
export default configSession;
