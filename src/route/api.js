import express from "express";
const router = express.Router();
import apiController from "../controllers/apiController";
import checkMiddleware from "../middleware/checkMiddleware";
import jwtService from "../service/jwtService";
const initApiRouter = (app) => {
  //router.all("*", checkMiddleware.checkJWT,);

  router.post("/auth/login", apiController.postLogin);
  router.get("/auth/account", checkMiddleware.checkJWT, jwtService.getAccount);
  router.get("/auth/refresh", jwtService.newAccessTokenFromRT);
  router.post("/auth/logout", apiController.postLogout);

  router.post("/user/register");

  return app.use("/api/v1", router);
};

export default initApiRouter;
