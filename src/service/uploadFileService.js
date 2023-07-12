const path = require("path");

const uploadSingleFile = async (fileObject) => {
  let uploadPath = path.resolve(__dirname, "../public/images/book");
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

export default {
  uploadSingleFile,
};
