import express from "express";
const router = express.Router();
import apiController from "../controllers/apiController";
import checkMiddleware from "../middleware/checkMiddleware";
import jwtService from "../service/jwtService";
import passport from "passport";
import socialService from "../service/socialService";
import postFileUploadImage from "../controllers/fileController";
import bookController from "../controllers/bookController";
import categoryController from "../controllers/categoryController";
import deliveryController from "../controllers/deliveryController";
require("dotenv").config();
const initApiRouter = (app) => {
  router.get("/", (req, res) => {
    res.send("helloooooo");
  });
  //--------- login google--------------------
  router.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );
  router.get(
    "/google/redirect",
    passport.authenticate("google", {
      successRedirect: `${process.env.PORT_URL}/login`,
      failureRedirect: `${process.env.PORT_URL}/login`,
    })
  );
  //-------------- login facebook-----------------
  router.get(
    "/auth/facebook",
    passport.authenticate("facebook", { scope: ["public_profile", "email"] })
  );
  router.get(
    "/facebook/redirect",
    passport.authenticate("facebook", {
      successRedirect: `${process.env.PORT_URL}/login`,
      failureRedirect: `${process.env.PORT_URL}/login`,
    })
  );
  //-----------------------------------------
  router.get("/login/success", socialService.createAcessTokenSocial);
  // router.get("/login/failed", (req, res) => {
  //   res.status(400).json({
  //     message: "Login failed",
  //   });
  // });
  router.get("/social/logout", function (req, res, next) {
    req.logout(function (err) {
      if (err) {
        return next(err);
      }
      res.redirect(`${process.env.PORT_URL}/login`);
    });
  });
  //---------------------------------

  router.post("/auth/login", apiController.postLogin);
  router.get("/auth/account", checkMiddleware.checkJWT, jwtService.getAccount);
  router.get("/auth/refresh", jwtService.newAccessTokenFromRT);
  router.post(
    "/auth/logout",
    checkMiddleware.checkJWT,
    apiController.postLogout
  );

  router.post("/user/register", apiController.postRegisterUser);
  router.get("/user", checkMiddleware.checkJWT, apiController.getListUser);
  router.delete(
    "/user/:id",
    checkMiddleware.checkJWT,
    apiController.delelteUser
  );

  router.post("/file/upload", postFileUploadImage);

  router.post("/book", bookController.postCreateBook);
  router.get("/book/:id", bookController.getInfoBook);
  router.get("/book", bookController.getListBookPaginateAdmin);
  router.get("/home/book", bookController.getListBookHome);
  router.delete("/book/delete/:id", bookController.deleteBook);
  router.put("/book/:id", bookController.updateBook);

  router.post("/category/create", categoryController.postCreateCategory);
  router.get("/database/category", categoryController.getListCategory);

  router.post("/delivery", deliveryController.postCreateInfoDelivery);
  router.get("/delivery/:id", deliveryController.getInfoDelivery);
  router.put("/delivery/:id", deliveryController.putInfoDelivery);

  return app.use("/api/v1", router);
};

export default initApiRouter;
