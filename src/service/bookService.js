import { Op } from "sequelize";
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
    return {
      DT: "SUCCESS",
      info: info,
    };
  }
};

const getInfoBookService = async (idBook) => {
  let inf = await db.Book.findOne({
    where: { id: idBook },
    attributes: [
      "id",
      "author",
      "thumbnail",
      "slider",
      "mainText",
      "price",
      "sold",
      "quantity",
      "rate",
      "Category.category",
      "createdAt",
      "updatedAt",
    ],
    include: {
      model: db.Category,
      attributes: [],
    },
    raw: true,
  });

  if (inf) {
    return {
      DT: "SUCCESS",
      inf: inf,
    };
  }
};

const deleteBookService = async (id) => {
  let del = db.Book.destroy({
    where: { id: id },
  });
  if (del) {
    return {
      DT: "delete success",
    };
  } else {
    return {
      message: "Some thing Wrong",
    };
  }
};
const updateBookService = async (id, up) => {
  let values = {
    author: up.author,
    thumbnail: up.thumbnail,
    slider: up.slider,
    mainText: up.mainText,
    price: up.price,
    quantity: up.quantity,
    idCategory: up.idCategory,
  };
  let selector = {
    where: { id: id },
  };
  let find = await db.Book.findOne({
    where: { id: id },
  });
  if (find) {
    let a = await db.Book.update(values, selector);
    return {
      DT: a,
    };
  } else {
    return null;
  }
};

const getListBookService = async (
  page,
  limit,
  field,
  sort,
  author,
  price,
  category
) => {
  page = +page;
  limit = +limit;
  try {
    let total = await db.Book.count({
      where: {
        [Op.and]: [
          {
            author: {
              [Op.like]: author ? `%${author}%` : "%%",
            },
          },
          {
            price: {
              [Op.gt]: price ? +price : 0,
            },
          },
        ],
      },
      include: {
        where: category ? { id: category } : "",
        model: db.Category,
        attributes: [],
      },
    });
    //----------------------------------------
    let list = await db.Book.findAll({
      offset: (page - 1) * limit,
      limit: limit,
      order: [[field, sort]],
      where: {
        [Op.and]: [
          {
            author: {
              [Op.like]: author ? `%${author}%` : "%%",
            },
          },
          {
            price: {
              [Op.gt]: price ? +price : 0,
            },
          },
        ],
      },

      attributes: [
        "id",
        "author",
        "thumbnail",
        "slider",
        "mainText",
        "price",
        "sold",
        "quantity",
        "rate",
        "Category.category",
        "createdAt",
        "updatedAt",
      ],
      include: {
        where: category ? { id: category } : "",
        model: db.Category,
        attributes: [],
      },
      raw: true,
    });
    return { list, total };
  } catch (error) {
    console.log(error);
  }
};

const getListBookHomeService = async (page, limit) => {
  page = +page;
  limit = +limit;
  try {
    let total = await db.Book.count({});
    let list = await db.Book.findAll({
      offset: (page - 1) * limit,
      limit: limit,
      attributes: [
        "id",
        "author",
        "thumbnail",
        "slider",
        "mainText",
        "price",
        "sold",
        "quantity",
        "rate",
        "Category.category",
        "createdAt",
        "updatedAt",
      ],
      include: {
        model: db.Category,
        attributes: [],
      },
      raw: true,
    });
    return { list, total };
  } catch (error) {
    console.log(error);
  }
};
export default {
  createBookService,
  getInfoBookService,
  getListBookService,
  deleteBookService,
  updateBookService,
  getListBookHomeService,
};