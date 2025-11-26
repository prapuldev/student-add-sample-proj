import { DataTypes } from "sequelize";
import sequelize from "./mysql.js";
import express from "express";

const router = express.Router();

const Student = sequelize.define(
  "Student",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [3, 33] },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { isEmail: true },
    },
    enrollnumber: { type: DataTypes.INTEGER, validate: { min: 1, max: 120 } },
  },
  { tableName: "students", timestamps: false }
);

await Student.sync();

// Example routes
router.get("/", async (req, res) => {
  const students = await Student.findAll();
  res.json(students);
});

export default router;
