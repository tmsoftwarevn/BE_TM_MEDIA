import db from "../models";
const createOrderDetail = async (arr) => {
  let c = await db.OrderDetail.bulkCreate(arr, {});
  if (c) {
    return {
      DT: c,
    };
  }
};

export default { createOrderDetail };
