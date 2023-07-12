import upload from "../service/uploadFileService";
const postFileUploadImage = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  let result = await upload.uploadSingleFile(req.files.fileImg);
  return res.status(200).json({
    EC: 1,
    data: result.data,
  });
};
export default postFileUploadImage;
