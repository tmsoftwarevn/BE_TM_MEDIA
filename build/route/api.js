"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _apiController = _interopRequireDefault(require("../controllers/apiController"));
var _checkMiddleware = _interopRequireDefault(require("../middleware/checkMiddleware"));
var _jwtService = _interopRequireDefault(require("../service/jwtService"));
var _passport = _interopRequireDefault(require("passport"));
var _socialService = _interopRequireDefault(require("../service/socialService"));
var _fileController = _interopRequireDefault(require("../controllers/fileController"));
var _bookController = _interopRequireDefault(require("../controllers/bookController"));
var _categoryController = _interopRequireDefault(require("../controllers/categoryController"));
var _deliveryController = _interopRequireDefault(require("../controllers/deliveryController"));
var _orderController = _interopRequireDefault(require("../controllers/orderController"));
var _orderDetailController = _interopRequireDefault(require("../controllers/orderDetailController"));
var _statusController = _interopRequireDefault(require("../controllers/statusController"));
var _userService = _interopRequireDefault(require("../service/userService"));
var _forgotPassword = _interopRequireDefault(require("../controllers/forgotPassword"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
require("dotenv").config();
var initApiRouter = function initApiRouter(app) {
  router.get("/", function (req, res) {
    res.send("helloooooo");
  });
  //--------- login google--------------------
  router.get("/auth/google", _passport["default"].authenticate("google", {
    scope: ["profile", "email"]
  }));
  router.get("/google/redirect", _passport["default"].authenticate("google"), function (req, res) {
    console.log("checkkkkkk reqqqqqqqq", req.user);
    //res.redirect(`${process.env.PORT_URL}/FE-book-deploy/login`);
    res.redirect("/");
  }
  // passport.authenticate("google", {
  //   // successRedirect: `${process.env.PORT_URL}/login`,
  //   // failureRedirect: `${process.env.PORT_URL}/login`,
  //   successRedirect: `${process.env.PORT_URL}/FE-book-deploy/login`,
  //   failureRedirect: `${process.env.PORT_URL}/FE-book-deploy/login`,
  // })
  );
  //-------------- login facebook-----------------
  router.get("/auth/facebook", _passport["default"].authenticate("facebook", {
    scope: ["public_profile", "email"]
  }));
  router.get("/facebook/redirect", _passport["default"].authenticate("facebook", {
    successRedirect: "".concat(process.env.PORT_URL, "/login"),
    failureRedirect: "".concat(process.env.PORT_URL, "/login")
  }));
  //-----------------------------------------
  router.get("/login/success", _socialService["default"].createAcessTokenSocial);
  // router.get("/login/success", (req, res, next) => {
  //   res.redirect(`${process.env.PORT_URL}/login`);
  //   console.log("check req router: ", req.user);
  // });
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
      //res.redirect(`${process.env.PORT_URL}/login`);
      res.redirect("".concat(process.env.PORT_URL, "/FE-book-deploy/login"));
    });
  });
  //---------------------------------

  router.post("/auth/login", _apiController["default"].postLogin);
  router.get("/auth/account", _checkMiddleware["default"].checkJWT, _jwtService["default"].getAccount);
  router.get("/auth/refresh", _jwtService["default"].newAccessTokenFromRT);
  router.post("/auth/logout", _checkMiddleware["default"].checkJWT, _apiController["default"].postLogout);
  router.post("/user/register", _apiController["default"].postRegisterUser);
  router.get("/user", _checkMiddleware["default"].checkJWT, _apiController["default"].getListUser);
  router["delete"]("/user/:id", _checkMiddleware["default"].checkJWT, _apiController["default"].delelteUser);
  router.post("/file/upload", _checkMiddleware["default"].checkJWT, _fileController["default"]);
  router.post("/book", _checkMiddleware["default"].checkJWT, _bookController["default"].postCreateBook);
  router.get("/book/:id", _bookController["default"].getInfoBook);
  router.get("/book", _checkMiddleware["default"].checkJWT, _bookController["default"].getListBookPaginateAdmin);
  router.get("/home/book", _bookController["default"].getListBookHome);
  router["delete"]("/book/delete/:id", _checkMiddleware["default"].checkJWT, _bookController["default"].deleteBook);
  router.put("/book/:id", _checkMiddleware["default"].checkJWT, _bookController["default"].updateBook);
  router.put("/updateBook", _bookController["default"].putBookAfterOrder);
  router.post("/category/create", _checkMiddleware["default"].checkJWT, _categoryController["default"].postCreateCategory);
  router.get("/database/category", _categoryController["default"].getListCategory);
  router.post("/delivery", _deliveryController["default"].postCreateInfoDelivery);
  router.get("/delivery/:id", _deliveryController["default"].getInfoDelivery);
  router.put("/delivery/:id", _deliveryController["default"].putInfoDelivery);
  router.post("/order", _checkMiddleware["default"].checkJWT, _orderController["default"].postCreateOrder);
  router.get("/user/orderHistory/:id", _checkMiddleware["default"].checkJWT, _orderController["default"].fetchOrderHistory);
  router.get("/order", _checkMiddleware["default"].checkJWT, _orderController["default"].getOrderAdmin);
  router.put("/orderStatus/:id", _orderController["default"].putOrderStatus);
  router.post("/orderDetail", _checkMiddleware["default"].checkJWT, _orderDetailController["default"].postOrderDetail);
  router.get("/orderDetail/:id", _checkMiddleware["default"].checkJWT, _orderDetailController["default"].getOrderDetail);
  router.get("/status", _checkMiddleware["default"].checkJWT, _statusController["default"].getStatusAdmin);
  router.put("/user/:id", _apiController["default"].putUser);
  router.put("/user", _apiController["default"].checkPass, _apiController["default"].putPasswordUser);
  router.post("/forgot-password", _forgotPassword["default"].getCode);
  router.post("/checkOTP", _forgotPassword["default"].checkOTP);
  router.post("/newPass", _apiController["default"].putPasswordUser);
  router.get("/user/orderStatus/:id", _orderController["default"].fetchOrderStatus);
  router.get("/book/popular/all", _bookController["default"].getListBookPopulateAll);
  router.get("/search", _bookController["default"].getListSearchBook);
  return app.use("/api/v1", router);
};
var _default = initApiRouter;
exports["default"] = _default;