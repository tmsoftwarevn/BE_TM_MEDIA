import bookService from "../service/bookService";

const postCreateBook = async (req, res) => {
  let data = await bookService.createBookService(req.body);
  console.log("ddddddddddd", data.slider[0]);
};
const getInfoBook = async (req, res) => {
  let data = await bookService.getInfoBookService(req.params.id);
  console.log("ddddddddd", data);
};
export default { postCreateBook, getInfoBook };
