const { DataTypes } = require("sequelize");
const sequelize = require("./mysql");

const Student = sequelize.define(
  "Student",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 33],
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    enrollnumber: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
        max: 120,
      },
    },
  },
  {
    tableName: "students",
    timestamps: false,
  }
);

// Sync table with database
Student.sync();

module.exports = Student;
