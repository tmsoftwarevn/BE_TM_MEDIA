import accountService from "../service/accountService";

const postLogin = async (req, res) => {
    try {
      let data = await accountService.loginService(req.body);
      if (data && data.DT) {
    
        return res.status(200).json({
          data: 'Login success',
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
        message: "Some thing wrong server",
      });
    }
  };
  const postRegister = async (req, res) => {
    try {
      let data = await accountService.registerService(req.body);
      if (data && data.user) {
        return res.status(201).json({
          data: "Đăng kí thành công",
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

export default {postRegister, postLogin}