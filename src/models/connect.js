import { Sequelize } from "sequelize";

// yarn sequelize-auto -h localhost -d node35 -u root -x 1234 -p 3307 --dialect mysql -o ./src/models -l esm

const sequelize = new Sequelize("node35", "root", "1234", {
  host: "localhost",
  port: "3307",
  dialect: "mysql",
});

export default sequelize;
