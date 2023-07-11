import express from "express";
const router = express.Router();
import apiController from "../controllers/apiController";
import checkMiddleware from "../middleware/checkMiddleware";
import jwtService from "../service/jwtService";
import userService from "../service/userService";
import passport from "passport";
import socialService from "../service/socialService";
require("dotenv").config();

require("dotenv").config();
const initApiRouter = (app) => {
  router.get("/", (req, res) => {
    res.send("helloooooo");
  });

  router.post("/auth/login", apiController.postLogin);
  router.get("/auth/account", checkMiddleware.checkJWT, jwtService.getAccount);
  router.get("/auth/refresh", jwtService.newAccessTokenFromRT);
  router.post(
    "/auth/logout",
    checkMiddleware.checkJWT,
    apiController.postLogout
  );

  //--------- login google---------------
  router.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );
  router.get(
    "/google/redirect",
    passport.authenticate("google", {
      successRedirect: process.env.PORT_URL,
      failureRedirect: `${process.env.PORT_URL}/login`,
    })
  );
  //-------------- login facebook----------
  router.get(
    "/auth/facebook",
    passport.authenticate("facebook", { scope: ["email"] })
  );

  router.get(
    "/facebook/redirect",
    passport.authenticate("facebook", {
      successRedirect: process.env.PORT_URL,
      failureRedirect: `${process.env.PORT_URL}/login`,
    })
  );
  //--------------------------
  router.get("/login/success", socialService.createAcessTokenSocial);

  router.get("/login/failed", (req, res) => {
    res.status(400).json({
      message: "Login failed",
    });
  });
  router.get("/social/logout", function (req, res, next) {
    req.logout(function (err) {
      if (err) {
        return next(err);
      }
      res.redirect(`${process.env.PORT_URL}/login`);
    });
  });
  //----------------------
  router.post("/user/register", apiController.postRegisterUser);
  router.get("/user", checkMiddleware.checkJWT, apiController.getListUser);

  router.get("user/address");
  return app.use("/api/v1", router);
};

export default initApiRouter;
