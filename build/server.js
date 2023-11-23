"use strict";

var _express = _interopRequireDefault(require("express"));
var _viewEngine = _interopRequireDefault(require("./config/viewEngine"));
var _api = _interopRequireDefault(require("./route/api"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _connectDB = _interopRequireDefault(require("./config/connectDB"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _socialController = _interopRequireDefault(require("./controllers/socialController"));
var _passport = _interopRequireDefault(require("passport"));
var _expressSession = _interopRequireDefault(require("express-session"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//import cors from "./config/cors";
var fileUpload = require("express-fileupload");
var cors = require("cors");
var app = (0, _express["default"])();
require("dotenv").config();
var PORT = process.env.PORT || 8000;
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use(_bodyParser["default"].json());
app.use((0, _cookieParser["default"])());
app.use(fileUpload());
(0, _viewEngine["default"])(app);

// app.use(
//   session({
//     resave: false,
//     saveUninitialized: true,
//     secret: "SECRETSESSIONLG",
//   })
// );
app.use((0, _expressSession["default"])({
  resave: false,
  saveUninitialized: true,
  secret: "SECRETSESSIONLG",
  cookie: {
    httpOnly: true,
    secure: true
  }
}));
///

app.use(_passport["default"].initialize());
app.use(_passport["default"].session());
//cors(app);
//////
app.use(cors({
  origin: process.env.PORT_URL,
  methods: "GET,POST,PUT,DELETE",
  credentials: true
}));
(0, _connectDB["default"])();
(0, _api["default"])(app);
(0, _socialController["default"])();

// app.get("/images/book/:id", (req, res) => {
//   res.render("image.ejs", { urlImage: req.params.id });
// });
app.listen(PORT, function () {
  console.log("run app success , port is: ", +PORT);
});