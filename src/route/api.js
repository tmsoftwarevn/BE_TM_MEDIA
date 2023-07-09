import express from "express";
const router = express.Router();
import apiController from "../controllers/apiController";
import checkMiddleware from "../middleware/checkMiddleware";
import jwtService from "../service/jwtService";
import userService from "../service/userService";
const initApiRouter = (app) => {
  //router.all("*", checkMiddleware.checkJWT,);

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

  router.get("user/address");
  return app.use("/api/v1", router);
};

export default initApiRouter;
