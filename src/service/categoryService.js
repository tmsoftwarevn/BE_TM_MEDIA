const db = require("../models");
const createCategoryService = async (cate) => {
  let data = await db.Category.create({
    category: cate,
  });
  data = data.get({ plain: true });
  if (data) {
    return {
      DT: "SUCCESS",
      info: data,
    };
  }
};

const listCatgoryService = async () => {
  let data = await db.Category.findAll({
    attributes: ["id", "category"],
    raw: true,
  });
  if (data) {
    return data;
  }
};
export default { createCategoryService, listCatgoryService };
