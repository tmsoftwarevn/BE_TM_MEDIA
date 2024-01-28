import menuService from "../service/menuService";

const postMenu = async (req, res) => {
  try {
    let data = await menuService.insertMenuService(req.body);
    if (data) {
      return res.status(201).json({
        data,
        EC: 1,
      });
    } else {
      return res.status(400).json({
        message: "Không thêm được",
        EC: -1,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Wrong somthing",
      EC: -1,
    });
  }
};

const updateMenu = async (req, res) => {
  try {
    let data = await menuService.updateMenu(req.body, req.params.id);
    if (data && data.DT) {
      return res.status(200).json({
        data: "Update thành công",
        EC: 1,
      });
    } else {
      return res.status(400).json({
        message: "Không update được",
        EC: -1,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Wrong somthing",
      EC: -1,
    });
  }
};
const deleteMenu = async (req, res) => {
  try {
    let data = await menuService.deleteMenu(req.params.id);
    if (data && data.DT) {
      return res.status(200).json({
        data: "xóa thành công",
        EC: 1,
      });
    } else {
      return res.status(400).json({
        message: "Không xóa được",
        EC: -1,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Wrong somthing",
      EC: -1,
    });
  }
};
const getMenu_byId = async (req, res) => {
  const data = await menuService.getMenu_byId(req.params.id);
  if (data) {
    return res.status(200).json({
      data: data,
      EC: 1,
    });
  } else {
    return res.status(400).json({
      message: "Có lỗi",
      EC: -1,
    });
  }
};
export default { postMenu, updateMenu, deleteMenu, getMenu_byId };
