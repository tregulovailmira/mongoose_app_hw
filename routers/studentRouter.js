const { Router } = require('express');
const { validate } = require('../middleware');
const { studentController } = require('../controllers');

const studentRouter = new Router();

studentRouter
  .route('/')
  .post(validate.createStudentValidate, studentController.createStudent)
  .get(studentController.getAllStudents);

studentRouter
  .route('/:studentId')
  .get(studentController.getStudent)
  .patch(validate.updateStudentValidate, studentController.updateStudent)
  .delete(studentController.deleteStudent);

module.exports = studentRouter;
