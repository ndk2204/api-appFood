import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

let model = initModels(sequelize);

const getLike = async (req, res) => {
  let data = await model.like_res.findAll({
    include: ["user", "re"],
  });
  res.send(data);
};
const getRate = async (req, res) => {
  let data = await model.rate_res.findAll({
    include: ["user", "re"],
  });
  res.send(data);
};

export { getLike, getRate };
