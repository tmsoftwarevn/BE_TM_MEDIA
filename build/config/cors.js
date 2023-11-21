"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("dotenv").config();
var cors = function cors(app) {
  app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", process.env.PORT_URL);
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type,Authorization");
    res.setHeader("Access-Control-Allow-Credentials", true);
    if (req.method === "OPTIONS") {
      return res.sendStatus(200);
    }
    next();
  });
};
var _default = cors;
exports["default"] = _default;