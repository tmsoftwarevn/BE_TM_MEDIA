import jwt from "jsonwebtoken";
require("dotenv").config();

const createJWT = (payload) => {
  let key = process.env.JWT_SECRET;
  let token = null;
  try {
    token = jwt.sign(payload, key, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
  } catch (error) {
    console.log(error);
  }
  return token;
};
const createJWTRefresh = (payload) => {
  let key = process.env.JWT_SECRET;
  let token = null;
  try {
    token = jwt.sign(payload, key, {
      expiresIn: process.env.JWT_EXPIRES_REFRESH,
    });
  } catch (error) {
    console.log(error);
  }
  return token;
};

const verifyToken = (token) => {
  try {
    let key = process.env.JWT_SECRET;
    let data = null;
    data = jwt.verify(token, key);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const checkJWT = (req, res, next) => {
  try {
    let headerToken = extractToken(req);
    if (!headerToken) {
      return res.status(400).json({
        message: "Không có access token, Vui lòng đăng nhập để lấy token",
        EC: -1,
      });
    } else {
      let access_token = headerToken;
      let decoded = verifyToken(access_token);
      if (decoded) {
        req.account = decoded;
        return next();
      } else {
        return res.status(401).json({
          message: "Token hết hạn hoặc không đúng",
          EC: -1,
        });
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Some thing wrong at server",
      EC: -1,
    });
  }
};

const extractToken = (req) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    return req.headers.authorization.split(" ")[1];
  }
  return null;
};

export default { createJWT, createJWTRefresh, verifyToken, checkJWT };
