import db from "../models";
const createOrderService = async (order) => {
  let c = await db.Order.create({
    totalProduct: order.totalProduct,
    payment: order.payment,
    total: order.total,
    idInfoDelivery: order.idInfoDelivery,
    idUser: order.idUser,
    idStatus: order.idStatus,
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
  let total = await db.Order.count({});
  let list = await db.Order.findAll({
    offset: (page - 1) * limit,
    limit: limit,
    attributes: [
      "totalProduct",
      "payment",
      "total",
      "id",
      "createdAt",
      "Status.status",
    ],
    include: {
      model: db.User,
      where: { id: idUser },
      attributes: [],
    },
    include: {
      model: db.Status,
      attributes: [],
    },
    raw: true,
  });
  if (list) {
    return { list, total };
  }
};
export default { createOrderService, getOrderHistoryUser };
