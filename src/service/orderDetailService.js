import { BOOLEAN } from "sequelize";
import db from "../models";
const createOrderDetail = async (arr) => {
  let c = await db.OrderDetail.bulkCreate(arr, {});
  if (c) {
    return {
      DT: c,
    };
  }
};

const getOrderDetailService = async (idOrder) => {
  let list = await db.OrderDetail.findAll({
    attributes: [
      "quantity",
      "price",
      "Book.mainText",
      "Book.thumbnail",
      "Book.id",
    ],
    include: [
      {
        model: db.Order,
        where: { id: idOrder },
        attributes: [],
      },
      {
        model: db.Book,
        attributes: [],
      },
    ],
    raw: true,
  });

  if (list && list.length > 0) {
    return { list };
  }
};
export default { createOrderDetail, getOrderDetailService };
