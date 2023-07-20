import statusService from "../service/statusService";

const getStatusAdmin = async (req, res) => {
  let data = await statusService.getStatusService();
  if (data && data.DT) {
    return res.status(200).json({
      EC: 1,
      data: data.DT,
    });
  } else {
    return res.status(400).json({
      EC: -1,
      message: "Some thing wrong",
    });
  }
};

export default { getStatusAdmin };
