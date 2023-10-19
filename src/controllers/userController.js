import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

let model = initModels(sequelize);

const getUser = async (req, res) => {
  let data = await model.users.findAll();
  res.send(data);
};

const getUserOrder = async (req, res) => {
  let { userId } = req.params;
  let data = await model.orders.findAll({
    where: {
      user_id: userId,
    },
    include:["user","food"]
  });

  res.send(data);
};
export { getUser, getUserOrder };
