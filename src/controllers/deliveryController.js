import deliveryService from "../service/deliveryService";
const postCreateInfoDelivery = async (req, res) => {
  let data = await deliveryService.createDeliveryService(req.body);
  if (data && data.DT) {
    return res.status(201).json({
      EC: 1,
      data: data.DT,
    });
  } else {
    return res.status(400).json({
      message: "Có lỗi xảy ra",
    });
  }
};

const getInfoDelivery = async (req, res) => {
  let data = await deliveryService.getInfoDeliveryService(req.params.id);
  if (data && data.DT) {
    return res.status(200).json({
      EC: 1,
      data: data.DT,
    });
  } else {
    return res.status(400).json({
      EC: -1,
      message: "Some thing wrong",
    });
  }
};
const putInfoDelivery = async (req, res) => {
  let id = req.params.id;
  let up = req.body;
  let data = await deliveryService.updateDeliveryService(id, up);
  if (data && data.DT) {
    return res.status(200).json({
      message: "Update success",
      data: data.DT,
    });
  } else {
    return res.status(400).json({
      message: "Some thing wrong",
    });
  }
};
export default { postCreateInfoDelivery, getInfoDelivery, putInfoDelivery };
