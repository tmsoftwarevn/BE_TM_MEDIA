import db from "../models";

const updateTrangchu = async (data, id) => {
  try {
    let u = await db.trangchu.update(
      {
        key_word: data.key_word,
        meta_des: data.meta_des,
        banner_bg: data.banner_bg,
        video_bg: data.video_bg,
        link: data.link,
        logo: data.logo,
        icon_web: data.icon_web,
        mota_cty: data.mota_cty,
        thuonghieu: data.thuonghieu,
        bg_thongke: data.bg_thongke,
        s1: data.s1,
        s2: data.s2,
        s3: data.s3,
        t1: data.t1,
        t2: data.t2,
        t3: data.t3,
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

const getTrangchu = async()=>{
    try {
        let g = await db.trangchu.findOne({
          
          where: { id: 1 },
          raw: true,
        });
    
        return g;
      } catch (error) {
        console.log(error);
      }
}
export default { updateTrangchu, getTrangchu };
