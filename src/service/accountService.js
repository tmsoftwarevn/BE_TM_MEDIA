import bcrypt from "bcryptjs";
const db = require("../models");
const salt = bcrypt.genSaltSync(10);
const hashUserPassword = (userPassword) => {
  let hash = bcrypt.hashSync(userPassword, salt);
  return hash;
};

const registerService = async (rawData) => {
  try {
    let hashPassword = hashUserPassword(rawData.password);
    let newUser = await db.admin.create({
      name: rawData.name,
      password: hashPassword,
    });

    return {
      user: newUser,
    };
  } catch (error) {
    console.log(error);
  }
};

const loginService = async (rawData) => {
  try {
    let user = await db.admin.findOne({
      where: {
        name: rawData.name,
      },
    });

    if (user) {
      let userData = user.get({ plain: true });

      let isPassword = bcrypt.compareSync(rawData.password, userData.password);
      if (isPassword) {
        return {
          DT: 'Login success'
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
export default { registerService, loginService };
