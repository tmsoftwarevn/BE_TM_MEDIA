import db from "../models/index";
import jwtService from "./jwtService";
import bcrypt from "bcryptjs";

const valiateDataLogin = (rawData) => {
  try {
    if (!rawData.email || !rawData.password) return false;
    return true;
  } catch (error) {
    console.log(error);
  }
};
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
const loginUserService = async (rawData) => {
  try {
    if (valiateDataLogin(rawData) === false) {
      return {
        message: ["Chưa nhập mật khẩu hoặc email"],
      };
    }
    if (!validateEmail(rawData.email)) {
      return {
        message: ["Email chưa đúng định dạng"],
      };
    }
    let user = await db.User.findOne({
      where: {
        email: rawData.email,
      },
    });
    if (user) {
      let userData = user.get({ plain: true });
      //   let isPassword = bcrypt.compareSync(
      //     rawData.inputPassword,
      //     userData.password
      //   );
      if (userData.password === rawData.password) {
        let infoUser = await jwtService.getInfoUser(userData);
        return {
          DT: infoUser,
        };
      }
    }
    return {
      message: "Email hoặc mật khẩu chưa đúng.Hãy kiểm tra lại",
    };
  } catch (error) {
    console.log("error", error);
    return {
      message: "Something wrong from server",
    };
  }
};

const salt = bcrypt.genSaltSync(10);
const hashUserPassword = (userPassword) => {
  let hash = bcrypt.hashSync(userPassword, salt);
  return hash;
};
const checkEmailExist = async (userEmail) => {
  try {
    let user = await db.User.findOne({
      where: { email: userEmail },
    });
    if (user) {
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
  }
};

const registerUserService = async (rawData) => {
  try {
    // ko dc de trong
    if (checkEmailExist(rawData.email) === true) {
      return {
        message: "Email đã được đăng kí.Hãy kiểm tra lại",
      };
    }
    if (!validateEmail(rawData.email)) {
      return {
        message: ["Email chưa đúng định dạng. Hãy kiểm tra lại"],
      };
    }
    let hashPassword = hashUserPassword(rawData.password);
  } catch (error) {
    console.log(error);
  }
};
export default { loginUserService, registerUserService };
