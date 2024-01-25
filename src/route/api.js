import express from "express";
const router = express.Router();
require("dotenv").config();

const initApiRouter = (app) => {
  router.get("/", (req, res) => {
    res.send("helloooooo");
  });
  
  return app.use("/api/v1", router);
};

export default initApiRouter;
