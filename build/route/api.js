"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _apiController = _interopRequireDefault(require("../controllers/apiController"));
var _menuController = _interopRequireDefault(require("../controllers/menuController"));
var _accountController = _interopRequireDefault(require("../controllers/accountController"));
var _lienheController = _interopRequireDefault(require("../controllers/lienheController"));
var _mediaController = _interopRequireDefault(require("../controllers/mediaController"));
var _videonoibatController = _interopRequireDefault(require("../controllers/videonoibatController"));
var _videonoibatService = _interopRequireDefault(require("../service/videonoibatService"));
var _baivietController = _interopRequireDefault(require("../controllers/baivietController"));
var _uploadfileController = _interopRequireDefault(require("../controllers/uploadfileController"));
var _trangchuController = _interopRequireDefault(require("../controllers/trangchuController"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
require("dotenv").config();
var initApiRouter = function initApiRouter(app) {
  router.get("/", function (req, res) {
    res.send("helloooooo");
  });
  router.post("/test", _apiController["default"].getTest);
  // menu
  router.post("/menu", _menuController["default"].postMenu);
  router.put("/menu/:id", _menuController["default"].updateMenu);
  router["delete"]("/menu/:id", _menuController["default"].deleteMenu);
  router.get("/menu/:id", _menuController["default"].getMenu_byId);
  router.get("/menu_active", _menuController["default"].get_ActiveMenu);

  //account
  router.post("/register", _accountController["default"].postRegister);
  router.post("/login", _accountController["default"].postLogin);
  router.put("/changepassword", _accountController["default"].checkPass, _accountController["default"].putPasswordUser);
  // liên hệ
  router.post("/lienhe", _lienheController["default"].insertLienhe);
  router["delete"]("/lienhe/:id", _lienheController["default"].deleteLienhe);
  router.get("/lienhe", _lienheController["default"].getAll_Lienhe);

  //media
  router.get("/media/:id", _mediaController["default"].get_detail_media);
  router.post("/media", _mediaController["default"].inserMedia);
  router.put("/media/:id", _mediaController["default"].updateMedia);

  // video noi bat
  router.get("/video-noibat/detail/:id", _videonoibatController["default"].get_detail_video);
  router.get("/video-noibat/:id", _videonoibatController["default"].get_all_video_byId);
  router.post("/video-noibat", _videonoibatController["default"].inserVideo);
  router.put("/video-noibat/:id", _videonoibatController["default"].updateVideo);
  router["delete"]("/video-noibat/:id", _videonoibatController["default"].deleteVideo);

  // bai viet
  router.post("/baiviet", _baivietController["default"].insertBaiviet);
  router.put("/baiviet/:id", _baivietController["default"].updateBaiviet);
  router["delete"]("/baiviet/:id", _baivietController["default"].deleteBaiviet);
  router.get("/baiviet/:id", _baivietController["default"].get_detail_baiviet);
  router.get("/baiviet-page", _baivietController["default"].get_all_baiviet_paginate);
  router.get("/listbaiviet", _baivietController["default"].get_all_baiviet);
  router.get("/tintuc-noibat", _baivietController["default"].get_baiviet_trangchu);

  //upload file img
  router.post("/uploadImg_baiviet", _uploadfileController["default"].postFileUploadImage_baiviet);
  router.post("/uploadImg", _uploadfileController["default"].postFileUploadImage);
  router.post("/deleteImg", _uploadfileController["default"].deleteImage);

  // trang chủ
  router.put("/trang-chu", _trangchuController["default"].updateTrangchu);
  router.get("/trang-chu", _trangchuController["default"].getTrangchu);
  return app.use("/api/v1", router);
};
var _default = initApiRouter;
exports["default"] = _default;