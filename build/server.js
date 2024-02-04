"use strict";

var _express = _interopRequireDefault(require("express"));
var _viewEngine = _interopRequireDefault(require("./config/viewEngine"));
var _api = _interopRequireDefault(require("./route/api"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _connectDB = _interopRequireDefault(require("./config/connectDB"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var fileUpload = require("express-fileupload");
var cors = require("cors");
var app = (0, _express["default"])();
require("dotenv").config();
var PORT = process.env.PORT || 8000;
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use(_bodyParser["default"].json());
app.use(fileUpload());
(0, _viewEngine["default"])(app);
app.use(cors({
  origin: process.env.PORT_URL,
  methods: "GET,POST,PUT,DELETE",
  credentials: true
}));
(0, _connectDB["default"])();
(0, _api["default"])(app);
app.listen(PORT, function () {
  console.log("run app success , port is: ", +PORT);
});