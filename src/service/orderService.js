import db from "../models";
const createOrderService = async (order) => {
  let c = await db.Order.create({
    totalProduct: order.totalProduct,
    payment: order.payment,
    total: order.total,
    idUser: order.idUser,
    idStatus: order.idStatus,
    fullname: order.fullname,
    phone: order.phone,
    address: order.address,
  });
  c = c.get({ plain: true });
  if (c) {
    return {
      DT: c,
    };
  }
};

const getOrderHistoryUser = async (idUser, page, limit) => {
  page = +page;
  limit = +limit;
  let total = await db.Order.count({
    include: [
      {
        model: db.User,
        where: { id: idUser },
        attributes: [],
      },
      {
        model: db.Status,
        attributes: [],
      },
    ],
  });
  let list = await db.Order.findAll({
    offset: (page - 1) * limit,
    limit: limit,
    order: [["createdAt", "DESC"]],
    attributes: [
      "totalProduct",
      "payment",
      "total",
      "id",
      "createdAt",
      "Status.status",
      "address",
      "phone",
      "fullname",
    ],
    include: [
      {
        model: db.User,
        where: { id: idUser },
        attributes: [],
      },
      {
        model: db.Status,
        attributes: [],
      },
    ],
    raw: true,
  });
  if (list) {
    return { list, total };
  }
};

const getOrderAdminService = async (page, limit, search) => {
  page = +page;
  limit = +limit;
  let total = await db.Order.count({
    include: {
      model: db.Status,
      where: search ? { id: search } : "",
      attributes: [],
    },
  });
  let list = await db.Order.findAll({
    order: [["createdAt", "DESC"]],
    attributes: [
      "totalProduct",
      "payment",
      "total",
      "id",
      "createdAt",
      "address",
      "phone",
      "fullname",
      "Status.status",
    ],
    include: {
      model: db.Status,
      where: search ? { id: search } : "",
      attributes: [],
    },
    raw: true,
  });
  if (list) {
    return { list, total };
  }
};

const updateOrderStatusService = async (Order, Status) => {
  try {
    let values = {
      idStatus: +Status,
    };
    let selector = {
      where: { id: +Order },
    };
    let a = await db.Order.update(values, selector);
    if (a) {
      return {
        DT: "update success",
      };
    }
  } catch (error) {}
};
export default {
  createOrderService,
  getOrderHistoryUser,
  getOrderAdminService,
  updateOrderStatusService,
};
