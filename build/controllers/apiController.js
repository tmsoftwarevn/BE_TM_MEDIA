"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var getTest = function getTest(req, res) {
  if (req.body.id) {
    return res.status(200).json({
      message: "Get info success"
    });
  } else {
    return res.status(400).json({
      message: "Get info fail"
    });
  }
};
var _default = {
  getTest: getTest
};
exports["default"] = _default;