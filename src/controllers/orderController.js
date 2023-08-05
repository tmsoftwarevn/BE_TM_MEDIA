import orderService from "../service/orderService";

const postCreateOrder = async (req, res) => {
  let data = await orderService.createOrderService(req.body);
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
const fetchOrderHistory = async (req, res) => {
  const { current, pageSize } = req.query;
  let data = await orderService.getOrderHistoryUser(
    req.params.id,
    current,
    pageSize
  );
  if (data && data.list) {
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
    return res.status(400).json({
      message: "Something wrong ",
      EC: -1,
    });
  }
};

const getOrderAdmin = async (req, res) => {
  const { current, pageSize, search } = req.query;
  let data = await orderService.getOrderAdminService(current, pageSize, search);
  if (data && data.list) {
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
    return res.status(400).json({
      message: "Something wrong ",
      EC: -1,
    });
  }
};

const putOrderStatus = async (req, res) => {
  const idOrder = req.params.id;
  const idStatus = req.body.idStatus;
  let data = await orderService.updateOrderStatusService(idOrder, idStatus);
  if (data && data.DT) {
    return res.status(200).json({
      EC: 1,
      data: data.DT,
    });
  } else {
    return res.status(400).json({
      message: "Có lỗi xảy ra",
    });
  }
};
const fetchOrderStatus = async (req, res) => {
  const idUser = req.params.id;
  const { current, pageSize, idStatus } = req.query;
  let data = await orderService.getOrderStatus1(
    idUser,
    idStatus,
    current,
    pageSize
  );
  if (data && data.list) {
    return res.status(200).json({
      data: {
        EC: 1,
        meta: {
          current: +current,
          pageSize: pageSize,
          pages: Math.ceil(+data.total / +pageSize),
          total: data.total,
        },
        result: data.list,
      },
    });
  } else {
    return res.status(400).json({
      message: "Something wrong ",
      EC: -1,
    });
  }
};
export default {
  postCreateOrder,
  fetchOrderHistory,
  getOrderAdmin,
  putOrderStatus,
  fetchOrderStatus,
};
