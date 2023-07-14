import db from "../models";
import categoryService from "../service/categoryService";

const postCreateCategory = async (req, res) => {
  let data = await categoryService.createCategoryService(req.body.category);
  if (data && data.info) {
    return res.status(200).json({
      message: "Create success",
      data: data.info,
    });
  } else {
    return res.status(400).json({
      message: "Create failed",
    });
  }
};

const getListCategory = async (req, res) => {
  let data = await categoryService.listCatgoryService();
  if (data) {
    return res.status(200).json({
      EC: 1,
      data: data,
    });
  } else {
    return res.status(500).json({
      message: "Some thing wrong",
    });
  }
};
export default { postCreateCategory, getListCategory };
