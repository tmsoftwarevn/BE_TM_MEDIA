import express from "express";
import configViewEngine from "./config/viewEngine";
import initApiRouter from "./route/api";
import bodyParser from "body-parser";
//import cors from "./config/cors";
import connectDB from "./config/connectDB";
import cookieParser from "cookie-parser";
import configLoginWithSocial from "./controllers/socialController";
import passport from "passport";
import session from "express-session";
const cors = require("cors");

const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
configViewEngine(app);

//cors(app);
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: "SECRETSESSIONLG",
  })
);
app.use(passport.initialize());
app.use(passport.session());
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

app.listen(PORT, () => {
  console.log("run app", +PORT);
});
