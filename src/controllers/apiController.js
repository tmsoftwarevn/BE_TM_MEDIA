
const getTest = (req, res) => {

  if (req.body.id) {
    return res.status(200).json({
      message: "Get info success",
      
    });
  } else {
    return res.status(400).json({
      message: "Get info fail",
    });
  }
};

export default {getTest}