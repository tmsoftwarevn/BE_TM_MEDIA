import express from "express";

const router = express.Router();

const initApiRouter = (app) => {
  //router.all("*", checkJWT, checkPermission);
  router.get("/", (req, res) => {
    return res.send("hello world");
  });
  return app.use("/", router);
};

export default initApiRouter;
