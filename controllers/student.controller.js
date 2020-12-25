const { Student } = require('../models');

module.exports.createStudent = async (req, res, next) => {
  const { body } = req;
  const studentInstace = new Student(body);

  try {
    const createdStudent = await studentInstace.save();
    studentInstace
      ? res.status(201).send({ data: createdStudent })
      : res.status(400).send('Bad request');
  } catch (error) {
    next(error);
  }
};

module.exports.getStudent = async (req, res, next) => {
  const {
    params: { studentId },
  } = req;

  try {
    const foundStudent = await Student.findById(studentId);
    foundStudent
      ? res.status(200).send({ data: foundStudent })
      : res.status(404).send('Student not found');
  } catch (error) {
    next(error);
  }
};

module.exports.getAllStudents = async (req, res, next) => {
  try {
    const foundStudents = await Student.find();
    foundStudents
      ? res.status(200).send({ data: foundStudents })
      : res.status(404).send('Students not found');
  } catch (error) {
    next(error);
  }
};

module.exports.updateStudent = async (req, res, next) => {
  const {
    body,
    params: { studentId },
  } = req;

  try {
    const updatedStudent = await Student.findByIdAndUpdate(studentId, body, {
      new: true,
    });
    updatedStudent
      ? res.status(200).send({ data: updatedStudent })
      : res.status(404).send('Student not found');
  } catch (error) {}
};

module.exports.deleteStudent = async (req, res, next) => {
  const {
    params: { studentId },
  } = req;
  try {
    const deletedStudent = await Student.findByIdAndDelete(studentId);
    deletedStudent
      ? res.status(200).send({ data: deletedStudent })
      : res.status(404).send('Student not found');
  } catch (error) {
    next(error);
  }
};
