import lienheService from "../service/lienheService";

const insertLienhe = async (req, res) => {
  const data = await lienheService.insert(req.body);
  if (data) {
    return res.status(201).json({
      data: data,
      EC: 1,
    });
  } else {
    return res.status(400).json({
      message: "Không thêm được",
      EC: -1,
    });
  }
};
const deleteLienhe = async (req, res) => {
  try {
    let data = await lienheService.deleteLienhe(req.params.id);
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

const getAll_Lienhe = async (req, res)=>{
  const data = await lienheService.getAllLienhe();
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
}
export default { insertLienhe, deleteLienhe , getAll_Lienhe};
