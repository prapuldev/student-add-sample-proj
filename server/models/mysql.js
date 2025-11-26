import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: 3306,
    dialect: "mysql",
    logging: false,
  }
);

try {
  await sequelize.authenticate();
  console.log("Connected to MySQL ✔️");
} catch (err) {
  console.error("MySQL Error ❌", err);
}

export default sequelize;
