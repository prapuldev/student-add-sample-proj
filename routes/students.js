const express = require("express");
const router = express.Router();
const Student = require("../server/models/students");

// Get all students
router.get("/", async (req, res) => {
  try {
    const students = await Student.findAll();
    res.send({ students });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

// Get student by ID
router.get("/:id", async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);
    if (!student)
      return res.status(404).send({ message: "Student not found!" });
    res.send({ student });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

// Create a student
router.post("/", async (req, res) => {
  try {
    const newStudent = await Student.create(req.body);
    res.send({ newStudent });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

// Update student
router.put("/:id", async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);
    if (!student)
      return res.status(404).send({ message: "Student not found!" });
    await student.update(req.body);
    res.send({ message: "The student was updated" });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

// Delete student
router.delete("/:id", async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);
    if (!student)
      return res.status(404).send({ message: "Student not found!" });
    await student.destroy();
    res.send({ message: "The student was removed" });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

module.exports = router;
