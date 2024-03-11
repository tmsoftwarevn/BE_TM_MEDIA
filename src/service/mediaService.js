const db = require("../models");

const insertMedia = async (data) => {
  try {
    let c = await db.media.create({
      key_word: data.key_word,
      meta_des: data.meta_des,
      banner_bg: data.banner_bg,
      video_bg: data.video_bg,
      link: data.link,
      noidung: data.noidung,
      type_id: data.type_id,
      slug: data.slug,
      title_menu:data.title_menu
    });
    c = c.get({ plain: true });
    if (c) return c;
  } catch (error) {
    console.log(error);
  }
};

const get_detail_media = async (slug) => {
  try {
    let g = await db.media.findOne({
      attributes: [
        "id",
        "key_word",
        "meta_des",
        "banner_bg",
        "video_bg",
        "link",
        "noidung",
        "title_menu"
      ],
      where: { slug: slug },
      raw: true,
    });
    return g;
  } catch (error) {
    console.log(error);
  }
};

const updateMedia = async (data, slug) => {
  // console.log('dataaaa', data);
  try {
    let u = await db.media.update(
      {
        key_word: data.key_word,
        meta_des: data.meta_des,
        banner_bg: data.banner_bg,
        video_bg: data.video_bg,
        link: data.link,
        noidung: data.noidung,
      },
      {
        where: { slug: slug },
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
const updateSlugMedia = async(data)=>{
  
  try {
    let u = await db.media.update(
      {
        slug: data.slug,
        title_menu: data.title_menu
      },
      {
        where: { type_id: data.id },
      }
    );

    if (u[0] > 0)
      return {
        DT: "update success",
      };
  } catch (error) {
    console.log(error);
  }
}
export default { insertMedia, get_detail_media, updateMedia, updateSlugMedia };
