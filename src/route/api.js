import express from "express";
const router = express.Router();
require("dotenv").config();

import apiController from "../controllers/apiController";
import menuController from "../controllers/menuController";
import accountController from "../controllers/accountController";
import lienheController from "../controllers/lienheController";
import mediaController from "../controllers/mediaController";
import videonoibatController from "../controllers/videonoibatController";
import videonoibatService from "../service/videonoibatService";
import baivietController from "../controllers/baivietController";
import postFileUploadImage from "../controllers/uploadfileController";
import uploadfileController from "../controllers/uploadfileController";

const initApiRouter = (app) => {
  router.get("/", (req, res) => {
    res.send("helloooooo");
  });

  router.post("/test", apiController.getTest);
  // menu
  router.post("/menu", menuController.postMenu);
  router.put("/menu/:id", menuController.updateMenu);
  router.delete("/menu/:id", menuController.deleteMenu);
  router.get("/menu/:id", menuController.getMenu_byId);
  router.get("/menu_active", menuController.get_ActiveMenu)
  
  //account
  router.post("/register", accountController.postRegister);
  router.post("/login", accountController.postLogin);
  router.put(
    "/changepassword",
    accountController.checkPass,
    accountController.putPasswordUser
  );
  // liên hệ
  router.post("/lienhe", lienheController.insertLienhe);
  router.delete("/lienhe/:id", lienheController.deleteLienhe);
  router.get("/lienhe", lienheController.getAll_Lienhe);

  //media
  router.get("/media/:id", mediaController.get_detail_media);
  router.post("/media", mediaController.inserMedia);
  router.put("/media/:id", mediaController.updateMedia);

  // video noi bat
  router.get(
    "/video-noibat/detail/:id",
    videonoibatController.get_detail_video
  );
  router.get("/video-noibat/:id", videonoibatController.get_all_video_byId);
  router.post("/video-noibat", videonoibatController.inserVideo);
  router.put("/video-noibat/:id", videonoibatController.updateVideo);
  router.delete("/video-noibat/:id", videonoibatController.deleteVideo);

  // bai viet
  router.post("/baiviet", baivietController.insertBaiviet);
  router.put("/baiviet/:id", baivietController.updateBaiviet);
  router.delete("/baiviet/:id", baivietController.deleteBaiviet);
  router.get("/baiviet/:id", baivietController.get_detail_baiviet);
  router.get(
    "/baiviet-page",
    baivietController.get_all_baiviet_paginate
  );
  router.get(
    "/listbaiviet",
    baivietController.get_all_baiviet
  );
  //upload file img
  router.post("/uploadImg_baiviet", uploadfileController.postFileUploadImage_baiviet);
  router.post("/uploadImg", uploadfileController.postFileUploadImage);
  router.post("/deleteImg",uploadfileController.deleteImage);

  
  return app.use("/api/v1", router);
};

export default initApiRouter;
