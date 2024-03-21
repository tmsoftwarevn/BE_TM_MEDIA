import mailService from "../service/mailService";

const sendEmail = async(req, res) => {
  try {
    let data = await mailService.sendEmail(req.body);
    if (data && data.EC === 1) {
      return res.status(200).json({
        EC: 1,
        message: "Gửi mail thành công",
      });
    } else {
      return res.status(400).json({
        EC: -1,
        message: "Có lỗi xảy ra",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Có lỗi",
      EC: -1,
    });
  }
};

export default { sendEmail };
