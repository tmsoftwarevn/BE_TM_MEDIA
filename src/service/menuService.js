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

const updateMenu = async (name, id) => {
  try {
    let u = await db.menu.update(
      {
        name: name,
      },
      {
        where: { id: id },
      }
    );
    return {
      DT: "update success",
    };
  } catch (error) {
    console.log(error);
  }
};

const deleteMenu = async (id) => {
    try {
        let del = db.menu.destroy({
            where: { id: id },
          });
          return {DT: 'Delete success'}
    } catch (error) {
        console.log(error);
    }
  
  };
export default { insertMenuService, updateMenu, deleteMenu };
