"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
require("dotenv").config();
var createJWT = function createJWT(payload) {
  var key = process.env.JWT_SECRET;
  var token = null;
  try {
    token = _jsonwebtoken["default"].sign(payload, key, {
      expiresIn: process.env.JWT_EXPIRES_IN
    });
  } catch (error) {
    console.log(error);
  }
  return token;
};
var createJWTRefresh = function createJWTRefresh(payload) {
  var key = process.env.JWT_SECRET;
  var token = null;
  try {
    token = _jsonwebtoken["default"].sign(payload, key, {
      expiresIn: process.env.JWT_EXPIRES_REFRESH
    });
  } catch (error) {
    console.log(error);
  }
  return token;
};
var verifyToken = function verifyToken(token) {
  try {
    var key = process.env.JWT_SECRET;
    var data = null;
    data = _jsonwebtoken["default"].verify(token, key);
    return data;
  } catch (error) {
    console.log(error);
  }
};
var checkJWT = function checkJWT(req, res, next) {
  try {
    var headerToken = extractToken(req);
    if (!headerToken) {
      return res.status(400).json({
        message: "Không tìm thấy accessToken ở header.",
        EC: -1
      });
    } else {
      var access_token = headerToken;
      var decoded = verifyToken(access_token);
      if (decoded) {
        req.account = decoded;
        return next();
      } else {
        return res.status(401).json({
          message: "Token hết hạn hoặc không đúng",
          EC: -1
        });
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Some thing wrong at server",
      EC: -1
    });
  }
};
var extractToken = function extractToken(req) {
  if (req.headers.authorization && req.headers.authorization.split(" ")[0] === "Bearer") {
    return req.headers.authorization.split(" ")[1];
  }
  return null;
};
var _default = {
  createJWT: createJWT,
  createJWTRefresh: createJWTRefresh,
  verifyToken: verifyToken,
  checkJWT: checkJWT
};
exports["default"] = _default;