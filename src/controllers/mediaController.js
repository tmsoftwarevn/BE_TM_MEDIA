import mediaService from "../service/mediaService";

const inserMedia = async (req, res) => {
  const data = await mediaService.insertMedia(req.body.data);
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

const get_detail_media = async (req, res) => {
  const data = await mediaService.get_detail_media(req.params.id);
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

const updateMedia = async (req, res) => {
    try {
      let data = await mediaService.updateMedia(req.body.data, req.params.id);
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
export default { inserMedia, get_detail_media , updateMedia};
