const db = require("../models");

const insert = async (data) => {
  try {
    let c = await db.lienhe.create({
      name: data.name,
      email: data.email,
      phone: data.phone,
      noidung: data.noidung,
    });
    c = c.get({ plain: true });
    return c;
  } catch (error) {
    console.log(error);
  }
};
const deleteLienhe = async (id) => {
  try {
    let del =await db.lienhe.destroy({
      where: { id: id },
    });
    if (del) return { DT: "Delete success" };
  } catch (error) {
    console.log(error);
  }
};

const getAllLienhe =async()=>{
  try {
    let g = await db.lienhe.findAll({
      attributes: ["id","name","phone","email","noidung","createdAt"],
      raw: true,
    });
    return g;
  } catch (error) {
    console.log(error);
  }
}

export default { insert, deleteLienhe, getAllLienhe };
