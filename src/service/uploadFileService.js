const path = require("path");
const fs = require("fs");

const uploadSingleFile = async (fileObject) => {
  let uploadPath = path.resolve(__dirname, "../public/images");

  let extName = path.extname(fileObject.name);
  let baseName = path.basename(fileObject.name, extName);
  // custom name image
  let finalName = `${baseName}-${Date.now()}${extName}`;
  let finalPath = `${uploadPath}/${finalName}`;
  try {
    await fileObject.mv(finalPath);
    return {
      data: {
        fileUploaded: finalName,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      message: "upload failed",
      error: JSON.stringify(err),
    };
  }
};

const deleteImage = (fileImg) => {
  let filePath = path.resolve(__dirname, "../public/images/");
  const imagePath = filePath + "/" + fileImg;
  console.log("ccccc", imagePath);
  // Check if the file exists
  if (fs.existsSync(imagePath)) {
    fs.unlinkSync(imagePath);
    return { DT: "delete success" };
  } else {
    console.log("Not delete");
  }
};
export default {
  uploadSingleFile,
  deleteImage,
};
