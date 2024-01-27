const db = require("../models");

const insertBaiviet = async (data) => {
  try {
    let c = await db.baiviet.create({
      tieude: data.tieude,
      meta_des: data.meta_des,
      noidung: data.noidung,
      thumbnail: data.thumbnail,
    });
    c = c.get({ plain: true });
    return c;
  } catch (error) {
    console.log(error);
  }
};

const get_detail_baiviet = async (id) => {
  try {
    let g = await db.baiviet.findOne({
      attributes: [
        "id",
        "tieude",
        "meta_des",
        "noidung",
        "thumbnail",
        "createdAt",
        "updatedAt",
      ],
      where: { id: id },
      raw: true,
    });

    return g;
  } catch (error) {
    console.log(error);
  }
};
const get_all_baiviet_paginate = async (page, limit) => {
  try {
    page = +page;
  limit = +limit;
    let list = await db.baiviet.findAll({
      offset: (page - 1) * limit,
      limit: limit,
      order: [["createdAt", "asc"]],
      attributes: [
        "id",
        "tieude",
        "meta_des",
        "noidung",
        "thumbnail",
        "createdAt",
        "updatedAt",
      ],

      raw: true,
    });
    return list;
  } catch (error) {
    console.log(error);
  }
};
const updateBaiviet = async (data, id) => {
  try {
    let u = await db.baiviet.update(
      {
        tieude: data.tieude,
        meta_des: data.meta_des,
        noidung: data.noidung,
        thumbnail: data.thumbnail,
      },
      {
        where: { id: id },
      }
    );
    if (u[0] >0)
      return {
        DT: "update success",
      };
  } catch (error) {
    console.log(error);
  }
};

const deleteBaiviet = async (id) => {
  try {
    let del = await db.baiviet.destroy({
      where: { id: id },
    });

    if (del) return { DT: "Delete success" };
  } catch (error) {
    console.log(error);
  }
};
export default {
  insertBaiviet,
  get_all_baiviet_paginate,
  get_detail_baiviet,
  updateBaiviet,
  deleteBaiviet,
};
