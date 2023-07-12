import userService from "../service/userService";
import jwtService from "../service/jwtService";
import checkMiddleware from "../middleware/checkMiddleware";
import socialService from "../service/socialService";
require("dotenv").config();
const postLogin = async (req, res) => {
  try {
    let data = await userService.loginUserService(req.body);
    if (data && data.user) {
      let access_token = checkMiddleware.createJWT(data.user);
      let refresh_token = checkMiddleware.createJWTRefresh(data.user);
      await jwtService.saveRefreshToken(data.user, refresh_token);

      res.cookie("refreshToken", refresh_token, {
        maxAge: parseInt(process.env.MAX_AGE_REFRESH_TOKEN),
        httpOnly: true,
        domain: process.env.COOKIE_DOMAIN,
        secure: true,
        path: "/",
      });

      return res.status(200).json({
        data: data.user,
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
    if (data && data.user) {
      return res.status(201).json({
        data: data,
        EC: 1,
      });
    } else {
      return res.status(400).json({
        message: data.message,
        EC: -1,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Wrong somthing at server",
      EC: -1,
    });
  }
};

const getUserAdress = async (req, res) => {
  try {
    let data = await jwtService.getInfoDelivery();
    if (data) {
      return res.status(200).json({
        data: data,
        EC: 1,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Some thing wrong server",
      EC: -1,
    });
  }
};

const getListUser = async (req, res) => {
  try {
    let { current, pageSize, field, sort, searchName, searchEmail } = req.query;
    console.log("check query", req.query);
    let data = await userService.getListUserService(
      current,
      pageSize,
      field,
      sort,
      searchName,
      searchEmail
    );
    if (data) {
      return res.status(200).json({
        data: {
          EC: 1,
          meta: {
            current: current,
            pageSize: pageSize,
            pages: Math.ceil(+data.total / +pageSize),
            total: data.total,
          },
          result: data.list,
        },
      });
    } else {
      return res.status(500).json({
        message: "Something wrong in server",
        EC: -1,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something wrong in server",
      EC: -1,
    });
  }
};

const delelteUser = async (req, res) => {
  let data = await userService.deleteUserService(req.params.id);
  if (data && data.DT) {
    return res.status(200).json({
      data: "Delete success",
      EC: 1,
    });
  } else {
    return res.status(400).json({
      message: "wwrong some thing",
    });
  }
};
export default {
  postLogin,
  postLogout,
  postRegisterUser,
  getUserAdress,
  getListUser,
  delelteUser,
};
