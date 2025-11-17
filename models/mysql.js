const { Sequelize } = require("sequelize");

// MySQL connection
const sequelize = new Sequelize("db_test", "admin", "Admin123!", {
  host: "localhost",
  dialect: "mysql",
});

// Test connection
sequelize
  .authenticate()
  .then(() => console.log("Connected to MySQL database!"))
  .catch((err) => console.error("Unable to connect to MySQL:", err));

module.exports = sequelize;
