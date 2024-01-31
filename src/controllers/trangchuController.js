import trangchuService from "../service/trangchuService";

const updateTrangchu = async (req, res) => {
  try {
    const data = await trangchuService.updateTrangchu(req.body, 1);
    if (data && data.DT) {
      return res.status(200).json({
        data: "Update thành công",
        EC: 1,
      });
    } else {
      return res.status(400).json({
        message: "Không update được",
        EC: -1,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Wrong somthing",
      EC: -1,
    });
  }
};

const getTrangchu = async (req, res) => {
  const data = await trangchuService.getTrangchu();
  if (data) {
    return res.status(200).json({
      data: data,
      EC: 1,
    });
  } else {
    return res.status(400).json({
      message: "Có lỗi",
      EC: -1,
    });
  }
};

export default { updateTrangchu, getTrangchu };
