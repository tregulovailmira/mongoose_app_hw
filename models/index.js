const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://admin:admin@cluster0.xfq1o.mongodb.net/students',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));

db.once('open', () => {
  console.log('Connection OK');
});

module.exports.Student = require('./student.model');
