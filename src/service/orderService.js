import db from "../models";
const orderService = async (order) => {
  let c = await db.Order.create({
    totalProduct: order.totalProduct,
    payment: order.payment,
    total: order.total,
    idInfoDelivery: order.idInfoDelivery,
    idUser: order.idUser,
    idStatus: order.idStatus,
  });
};
export default orderService;
