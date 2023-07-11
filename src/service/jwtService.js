import db from "../models";
import checkMiddleware from "../middleware/checkMiddleware";
const getInfoDelivery = async (user) => {
  try {
    let infoDelivery = await db.infoDelivery.findAll({
      where: { idUser: user.id },
      attributes: ["fullName", "phone", "address", "id"],
      include: {
        model: db.User,
        attributes: [],
      },
      raw: true,
      nest: true,
    });
    return infoDelivery ? infoDelivery : {};
  } catch (error) {
    console.log(error);
  }
};

const getInfoUser = async (user) => {
  try {
    const info = await db.User.findOne({
      where: { id: user.id },
      attributes: [
        "fullName",
        "email",
        "type",
        "role",
        "id",
        "createdAt",
        "updatedAt",
      ],
      raw: true,
    });
    return info ? info : {};
  } catch (error) {
    console.log(error);
  }
};
const getAccount = async (req, res) => {
  try {
    let infoUser = await getInfoUser(req.account);
    return res.status(200).json({
      EC: 1,
      data: infoUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EC: -1,
      message: "wrong some thing at server",
    });
  }
};
const saveRefreshToken = async (user, newRT) => {
  const update = await db.User.update(
    { refreshToken: newRT },
    { where: { email: user.email }, raw: true }
  );
};

const newAccessTokenFromRT = async (req, res) => {
  try {
    const cookies = req.cookies;
    if (cookies && cookies?.refreshToken) {
      const checkUser = await db.User.findOne({
        where: { refreshToken: cookies.refreshToken },
      });
      let decoded = checkMiddleware.verifyToken(cookies.refreshToken);
      if (checkUser && decoded) {
        let infoUser = await getInfoUser(decoded);
        let access_token = checkMiddleware.createJWT(infoUser);
        return res.status(200).json({
          data: {
            access_token: access_token,
          },
        });
      }
      return res.status(400).json({
        message: "Refresh Token hết hạn hoặc không đúng.",
        EC: -1,
      });
    } else {
      return res.status(400).json({
        message: "Không tìm thấy refresh token ở cookie",
        EC: -1,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EC: -1,
      message: "wrong some thing at server",
    });
  }
};

export default {
  getInfoDelivery,
  getInfoUser,
  saveRefreshToken,
  newAccessTokenFromRT,
  getAccount,
};
