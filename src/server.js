import express from "express";
import configViewEngine from "./config/viewEngine";
import initApiRouter from "./route/api";
import bodyParser from "body-parser";
import connectDB from "./config/connectDB";
import cookieParser from "cookie-parser";
import configLoginWithSocial from "./controllers/socialController";
import passport from "passport";
import session from "express-session";
//import cors from "./config/cors";
const fileUpload = require("express-fileupload");
const cors = require("cors");

const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(fileUpload());
configViewEngine(app);

// app.use(
//   session({
//     resave: false,
//     saveUninitialized: true,
//     secret: "SECRETSESSIONLG",
//   })
// );
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: "SECRETSESSIONLG",
    cookie: {
      httpOnly: true,
      secure: true,
    },
  })
);
///

app.use(passport.initialize());
app.use(passport.session());
//cors(app);
//////
app.use(
  cors({
    origin: process.env.PORT_URL,
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

connectDB();
initApiRouter(app);
configLoginWithSocial();

// app.get("/images/book/:id", (req, res) => {
//   res.render("image.ejs", { urlImage: req.params.id });
// });
app.listen(PORT, () => {
  console.log("run app success , port is: ", +PORT);
});
