import userService from "../service/userService";
import jwtService from "../service/jwtService";
import checkMiddleware from "../middleware/checkMiddleware";
require("dotenv").config();
const postLogin = async (req, res) => {
  try {
    let data = await userService.loginUserService(req.body);
    if (data && data.DT) {
      // thanh cong
      let access_token = checkMiddleware.createJWT(data.DT);
      let refresh_token = checkMiddleware.createJWTRefresh(data.DT);
      await jwtService.saveRefreshToken(data.DT, refresh_token);

      res.cookie("refreshToken", refresh_token, {
        maxAge: parseInt(process.env.MAX_AGE_REFRESH_TOKEN),
        httpOnly: true,
        domain: process.env.COOKIE_DOMAIN,
        secure: true,
        path: "/",
      });

      return res.status(200).json({
        data: data.DT,
        access_token: access_token,
        EC: 1,
      });
    }
    return res.status(400).json({
      EC: -1,
      message: data.message,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EC: -1,
      message: ["Some thing wrong server"],
    });
  }
};

const postLogout = (req, res) => {
  try {
    res.clearCookie("refreshToken", {
      domain: process.env.COOKIE_DOMAIN,
      path: "/",
    });
    return res.status(200).json({
      EC: 1,
      data: "Logout success",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EC: -1,
      message: "Some thing wrong server",
    });
  }
};
const postRegisterUser = async (req, res) => {
  try {
    let data = await userService.registerUserService(req.body);
    if (data && data.DT) {
      return res.status(200).json({
        data: data.DT,
        EC: 1,
      });
    } else {
      return res;
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Wrong somthing at server",
      EC: -1,
    });
  }
};
export default { postLogin, postLogout, postRegisterUser };
