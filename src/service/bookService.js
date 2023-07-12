import db from "../models/index";

const createBookService = async (book) => {
  let info = await db.Book.create({
    author: book.author,
    thumbnail: book.thumbnail,
    slider: book.slider,
    mainText: book.mainText,
    price: book.price,
    sold: book.sold,
    quantity: book.quantity,
    rate: book.rate,
    idCategory: book.idCategory,
  });
  info = info.get({ plain: true });

  if (info) {
    return info;
  }
};

const getInfoBookService = async (idBook) => {
  let info = await db.Book.findAll({});
  info = info.get({ plain: true });
  return info;
};
export default { createBookService, getInfoBookService };
