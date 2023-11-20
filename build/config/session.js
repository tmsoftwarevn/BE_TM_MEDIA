"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _expressSession = _interopRequireDefault(require("express-session"));
var _passport = _interopRequireDefault(require("passport"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var configSession = function configSession(app) {
  _passport["default"].serializeUser(function (user, done) {
    done(null, user);
  });
  _passport["default"].deserializeUser(function (user, done) {
    done(null, user);
  });
};
var _default = configSession;
exports["default"] = _default;