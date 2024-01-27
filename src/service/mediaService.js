const db = require("../models");

const insertMedia = async (data) => {
  try {
    let c = await db.media.create({
      banner_bg: data.banner_bg,
      video_bg: data.video_bg,
      link: data.link,
      noidung: data.noidung,
      type_id: data.type_id,
    });
    c = c.get({ plain: true });
    return c;
  } catch (error) {
    console.log(error);
  }
};

const get_detail_media = async (id) => {
  try {
    let g = await db.media.findAll({
      attributes: ["id","banner_bg", "video_bg", "link", "noidung"],
      where :{type_id: id},
      raw: true,
    });
    return g;
  } catch (error) {
    console.log(error);
  }
};

const updateMedia = async (data, id) => {
    try {
      let u = await db.media.update(
        {
            banner_bg: data.banner_bg,
            video_bg: data.video_bg,
            link: data.link,
            noidung: data.noidung,
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
export default { insertMedia, get_detail_media , updateMedia};
