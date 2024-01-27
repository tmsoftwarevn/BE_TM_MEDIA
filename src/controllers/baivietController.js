import baivietService from "../service/baivietService";

const insertBaiviet = async (req, res) => {
  const data = await baivietService.insertBaiviet(req.body);
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

const get_detail_baiviet = async (req, res) => {
  const data = await baivietService.get_detail_baiviet(req.params.id);
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

const get_all_baiviet_paginate = async (req, res) => {
  const { page, limit } = req.query;

  const data = await baivietService.get_all_baiviet_paginate(page, limit);
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

const updateBaiviet = async (req, res) => {
  try {
    let data = await baivietService.updateBaiviet(req.body, req.params.id);
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

const deleteBaiviet = async (req, res) => {
  try {
    let data = await baivietService.deleteBaiviet(req.params.id);
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

export default {
  insertBaiviet,
  get_all_baiviet_paginate,
  get_detail_baiviet,
  updateBaiviet,
  deleteBaiviet,
};
