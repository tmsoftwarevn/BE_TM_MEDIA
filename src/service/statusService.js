import db from "../models";
const getStatusService = async () => {
  let g = await db.Status.findAll({});
  if (g) {
    return {
      DT: g,
    };
  }
};
export default { getStatusService };
