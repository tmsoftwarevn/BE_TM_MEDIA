import orderDetailService from "../service/orderDetailService";

const postOrderDetail = async (req, res) => {
  let data = await orderDetailService.createOrderDetail(req.body);
  if (data && data.DT) {
    return res.status(201).json({
      message: "Create success",
      data: data.DT,
    });
  } else {
    return res.status(400).json({
      message: "Some thing wrong",
    });
  }
};

const getOrderDetail = async (req, res) => {
  let data = await orderDetailService.getOrderDetailService(+req.params.id);
  if (data && data.list) {
    return res.status(200).json({
      data: data.list,
    });
  } else {
    return res.status(400).json({
      message: "Something wrong ",
      EC: -1,
    });
  }
};
export default { postOrderDetail, getOrderDetail };
