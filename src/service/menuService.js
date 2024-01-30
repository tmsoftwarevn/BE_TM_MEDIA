const db = require("../models");

const insertMenuService = async (data) => {
  
  try {
    let c = await db.menu.create({
      name: data.name,
      type_id: data.type_id,
    });
    c = c.get({ plain: true });
    return c;
  } catch (error) {
    console.log(error);
  }
};

const updateMenu = async (data, id) => {
  try {
    let u = await db.menu.update(
      {
        name: data.name,
        active: data.active,
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

const deleteMenu = async (id) => {
  try {
    let del = await db.menu.destroy({
      where: { id: id },
    });
    if (del) return { DT: "Delete success" };
  } catch (error) {
    console.log(error);
  }
};

const getMenu_byId = async (id) => {
  try {
    let g = await db.menu.findAll({
      attributes: ["id", "name", "active"],
      where: { type_id: id },
      raw: true,
    });
    return g;
  } catch (error) {
    console.log(error);
  }
};

const get_ActiveMenu  = async()=>{
  try {
    let a = await db.menu.findAll(
      {
        attributes: ["id", "name"],
        where: { active: 1},
        raw: true,
      }
    )
    return a
  } catch (error) {
    
  }
}
export default { insertMenuService, updateMenu, deleteMenu, getMenu_byId , get_ActiveMenu};
