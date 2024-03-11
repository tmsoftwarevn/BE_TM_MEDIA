const db = require("../models");
import { Op } from "sequelize";
import { sequelize } from "../models/index";

const insertBaiviet = async (data) => {
  try {
    let c = await db.baiviet.create({
      tieude: data.tieude,
      key_word: data.key_word,
      meta_des: data.meta_des,
      mota_ngan: data.mota_ngan,
      noidung: data.noidung,
      thumbnail: data.thumbnail,
      slug: data.slug,
    });
    c = c.get({ plain: true });
    return c;
  } catch (error) {
    console.log(error);
  }
};

const get_detail_baiviet = async (slug) => {
  try {
    let g = await db.baiviet.findOne({
      attributes: [
        "id",
        "tieude",
        "key_word",
        "meta_des",
        "mota_ngan",
        "noidung",
        "thumbnail",
        "slug",
        "view",
        "createdAt",
        "updatedAt",
      ],
      where: { slug: slug },
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
      order: [["createdAt", "desc"]],
      attributes: [
        "id",
        "tieude",
        "key_word",
        "meta_des",
        "mota_ngan",
        "noidung",
        "thumbnail",
        "slug",
        "view",
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
        key_word: data.key_word,
        meta_des: data.meta_des,
        mota_ngan: data.mota_ngan,
        noidung: data.noidung,
        thumbnail: data.thumbnail,
        active: data.active,
        slug: data.slug,
        uu_tien: data.uu_tien
      },
      {
        where: { id: id },
      }
    );
    if (u[0] > 0)
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

const get_all_baiviet = async () => {
  try {
    let g = await db.baiviet.findAll({
      order: [["createdAt", "desc"]],
      attributes: [
        "id",
        "tieude",
        "key_word",
        "meta_des",
        "mota_ngan",
        "noidung",
        "thumbnail",
        "active",
        "slug",
        "view",
        "uu_tien",
        "createdAt",
        "updatedAt",
      ],

      raw: true,
    });

    return g;
  } catch (error) {
    console.log(error);
  }
};

const get_baiviet_trangchu = async (req, res) => {
  try {
    let a = await db.baiviet.findAll({
      order: [["uu_tien", "asc"]],      ///desc: update mới nhất lên đầu, theo ngày
      attributes: [
        "id",
        "tieude",
        "key_word",
        "meta_des",
        "mota_ngan",
        "noidung",
        "thumbnail",
        "slug",
        "view",
        "uu_tien",
        "createdAt",
        "updatedAt",
      ],
      where: { active: 1 },
      raw: true,
    });
    return a;
  } catch (error) {
    console.log(error);
  }
};
const up_view_baiviet = async (id) => {
  try {
    let u = await db.baiviet.update(
      {
        view: sequelize.literal(`view + 1`),
      },
      {
        where: { id: id },
      }
    );
    if (u[0] > 0)
      return {
        DT: "update success",
      };
  } catch (error) {
    console.log(error);
  }
};
const search_baiviet = async (string, page, limit) => {
  page = +page;
  limit = +limit;
  try {
    let count = await db.baiviet.findAll({
      where: {
        tieude: { [Op.like]: `%${string}%`},
      },
      raw: true,
    })

    let s = await db.baiviet.findAll({
      offset: (page - 1) * limit,
      limit: limit,
      where: {
        tieude: { [Op.like]: `%${string}%`},
      },
      raw: true,
    });
    return {
      total: count.length,
      list: s
    }
  } catch (error) {
    console.log(error)
  }
};
export default {
  insertBaiviet,
  get_all_baiviet_paginate,
  get_detail_baiviet,
  updateBaiviet,
  deleteBaiviet,
  get_all_baiviet,
  get_baiviet_trangchu,
  up_view_baiviet,
  search_baiviet,
};
