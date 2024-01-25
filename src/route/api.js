import express from "express";
const router = express.Router();
require("dotenv").config();

import apiController from "../controllers/apiController";
import menuController from "../controllers/menuController";
import accountController from "../controllers/accountController";

const initApiRouter = (app) => {
  router.get("/", (req, res) => {
    res.send("helloooooo");
  });

  router.post("/test", apiController.getTest);
  // menu
  router.post("/menu", menuController.postMenu);
  router.put("/menu/:id", menuController.updateMenu);
  router.delete("/menu/:id", menuController.deleteMenu);
  //account
  router.post("/register", accountController.postRegister);
  router.post("/login", accountController.postLogin);
  router.put("/account", menuController.updateMenu);


  return app.use("/api/v1", router);
};

export default initApiRouter;
