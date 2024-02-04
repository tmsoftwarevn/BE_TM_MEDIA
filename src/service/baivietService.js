const db = require("../models");

const insertBaiviet = async (data) => {
  try {
    let c = await db.baiviet.create({
      tieude: data.tieude,
      key_word: data.key_word,
      meta_des: data.meta_des,
      mota_ngan: data.mota_ngan,
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
        "key_word",
        "meta_des",
        "mota_ngan",
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
      order: [["createdAt", "desc"]],
      attributes: [
        "id",
        "tieude",
        "key_word",
        "meta_des",
        "mota_ngan",
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
        key_word: data.key_word,
        meta_des: data.meta_des,
        mota_ngan: data.mota_ngan,
        noidung: data.noidung,
        thumbnail: data.thumbnail,
        active: data.active
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

const get_baiviet_trangchu = async(req,res)=>{
  try {
    let a = await db.baiviet.findAll(
      {
        order: [["updatedAt", "desc"]], ///desc: update mới nhất lên đầu
        attributes: [
          "id",
          "tieude",
          "key_word",
          "meta_des",
          "mota_ngan",
          "noidung",
          "thumbnail",
          "createdAt",
          "updatedAt",
        ],
        where: { active: 1},
        raw: true,
      }
    )
    return a
  } catch (error) {
    console.log(error)
  }
}
export default {
  insertBaiviet,
  get_all_baiviet_paginate,
  get_detail_baiviet,
  updateBaiviet,
  deleteBaiviet,
  get_all_baiviet,
  get_baiviet_trangchu
};
