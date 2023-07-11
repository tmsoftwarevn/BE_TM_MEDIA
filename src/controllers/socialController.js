const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
import "dotenv/config";
import passport from "passport";
import socialService from "../service/socialService";
import jwtService from "../service/jwtService";
const configLoginWithSocial = () => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_APP_CLIENT_ID,
        clientSecret: process.env.GOOGLE_APP_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_APP_REDIRECT_LOGIN,
      },
      async function (accessToken, refreshToken, profile, done) {
        const typeAcc = "GOOGLE";
        let drawData = {
          username: profile.displayName,
          email:
            profile.emails && profile.emails.length > 0
              ? profile.emails[0].value
              : profile.id,
        };
        let user = await socialService.createUserSocial(drawData, typeAcc);
        let info = await jwtService.getInfoUser(user);
        done(null, info);
      }
    )
  );

  passport.use(
    new FacebookStrategy(
      {
        clientID: process.env.FACEBOOK_APP_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_APP_CLIENT_SECRET,
        callbackURL: process.env.FACEBOOK_APP_REDIRECT_LOGIN,
        profileFields: ["id", "emails", "displayName"],
      },
      async function (accessToken, refreshToken, profile, cb) {
        const typeAcc = "FACEBOOK";
        let drawData = {
          username: profile.displayName,
          email:
            profile.emails && profile.emails.length > 0
              ? profile.emails[0].value
              : profile.id,
        };

        let user = await socialService.createUserSocial(drawData, typeAcc);
        let info = await jwtService.getInfoUser(user);
        console.log("bugggggggggg");
        done(null, info);
      }
    )
  );

  passport.serializeUser((user, done) => {
    console.log("seriiiiii", user);
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    console.log("deserrrrrrrr", user);
    done(null, user);
  });
};

export default configLoginWithSocial;
