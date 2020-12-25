const mongoose = require('mongoose');

const { Schema } = mongoose;

const studentSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  idGroup: {
    type: String,
    required: true,
  },
  receipt_date: {
    type: Date,
    required: true,
    max: new Date(),
  },
  birthday: Date,
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
