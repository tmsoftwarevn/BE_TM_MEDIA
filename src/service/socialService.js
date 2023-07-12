import db from "../models/index";
import checkMiddleware from "../middleware/checkMiddleware";
import jwtService from "./jwtService";

const createUserSocial = async (drawData, type) => {
  try {
    let check = await db.User.findOne({
      where: { email: drawData.email },
    });
    if (check) check = check.get({ plain: true });
    if (!check) {
      let newUser = await db.User.create({
        fullName: drawData.username,
        email: drawData.email,
        type: type,
      });
      newUser = newUser.get({ plain: true });
      return newUser;
    }
    return check;
  } catch (error) {
    console.log(error);
  }
};

const createAcessTokenSocial = async (req, res) => {
  try {
    if (req.user) {
      let user = req.user;
      let access_token = checkMiddleware.createJWT(user);
      let refresh_token = checkMiddleware.createJWTRefresh(user);
      await jwtService.saveRefreshToken(user, refresh_token);
      res.cookie("refreshToken", refresh_token, {
        maxAge: parseInt(process.env.MAX_AGE_REFRESH_TOKEN),
        httpOnly: true,
        domain: process.env.COOKIE_DOMAIN,
        secure: true,
        path: "/",
      });
      req.user = null;
      return res.status(200).json({
        data: user,
        access_token: access_token,
        EC: 1,
      });
    } else {
      return res.status(401).json({
        message: "login failed",
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

export default {
  createUserSocial,
  createAcessTokenSocial,
};
