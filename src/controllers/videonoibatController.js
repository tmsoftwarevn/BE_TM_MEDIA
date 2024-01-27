import videonoibatService from "../service/videonoibatService";

const inserVideo = async (req, res) => {
  const data = await videonoibatService.insertVideo(req.body);
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

const get_detail_video = async (req, res) => {
  const data = await videonoibatService.get_detail_video(req.params.id);
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

const get_all_video_byId = async (req, res) => {
    const data = await videonoibatService.get_all_video_byId(req.params.id);
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
const updateVideo = async (req, res) => {
    try {
      let data = await videonoibatService.updateVideo(req.body, req.params.id);
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

  const deleteVideo = async (req, res) => {
    try {
      let data = await videonoibatService.deleteVideo(req.params.id);
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
export default { inserVideo, get_detail_video , updateVideo, deleteVideo,get_all_video_byId};
