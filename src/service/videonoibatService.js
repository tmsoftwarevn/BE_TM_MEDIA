const db = require("../models");

const insertVideo = async (data) => {
  try {
    let c = await db.video_noi_bat.create({
      video_bg: data.video_bg,
      link: data.link,
      name: data.name,
      type_id: data.type_id,
    });
    c = c.get({ plain: true });
    return c;
  } catch (error) {
    console.log(error);
  }
};

const get_detail_video = async (id) => {
  try {
    let g = await db.video_noi_bat.findOne({
      attributes: ["id","video_bg", "link", "name"],
      where: { id: id },
      raw: true,
    });
    
    return g;
  } catch (error) {
    console.log(error);
  }
};
const get_all_video_byId = async (id) => {
    try {
      let g = await db.video_noi_bat.findAll({
        attributes: ["id","video_bg", "link", "name"],
        where: { type_id: id },
        raw: true,
      });
      return g;
    } catch (error) {
      console.log(error);
    }
  };
const updateVideo = async (data, id) => {
  try {
    let u = await db.video_noi_bat.update(
      {
        video_bg: data.video_bg,
        link: data.link,
        name: data.name,
      },
      {
        where: { type_id: id },
      }
    );
    return {
      DT: "update success",
    };
  } catch (error) {
    console.log(error);
  }
};

const deleteVideo = async (id) => {
  try {
    let del = await db.video_noi_bat.destroy({
      where: { id: id },
    });
    
    if (del) return { DT: "Delete success" };
  } catch (error) {
    console.log(error);
  }
};
export default { insertVideo, get_detail_video, updateVideo, deleteVideo,get_all_video_byId };
