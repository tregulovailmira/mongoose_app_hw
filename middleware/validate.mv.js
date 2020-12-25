const yup = require('yup');

const currentDate = new Date();
const reciptMinDate = new Date(
  currentDate.setFullYear(currentDate.getFullYear() - 6)
);
const birthdayMaxDate = new Date(
  currentDate.setFullYear(currentDate.getFullYear() - 16)
);

module.exports.createStudentValidate = async (req, res, next) => {
  const { body } = req;

  const validationSchema = yup.object({
    first_name: yup.string().trim().min(2).max(128).required(),
    last_name: yup.string().trim().min(2).max(128).required(),
    email: yup.string().email().required(),
    group: yup.string().required(),
    receipt_date: yup
      .date()
      .min(reciptMinDate)
      .max(new Date())
      .default(new Date())
      .required(),
    birthday: yup.date().max(birthdayMaxDate).required(),
  });

  try {
    req.body = await validationSchema.validate(body);
    next();
  } catch (error) {
    next(error);
  }
};

module.exports.updateStudentValidate = async (req, res, next) => {
  const { body } = req;

  const validationSchema = yup.object({
    first_name: yup.string().trim().min(2).max(128),
    last_name: yup.string().trim().min(2).max(128),
    email: yup.string().email(),
    group: yup.string(),
    receipt_date: yup.date().min(reciptMinDate).max(new Date()),
    birthday: yup.date().max(birthdayMaxDate),
  });

  try {
    req.body = await validationSchema.validate(body);
    next();
  } catch (error) {
    next(error);
  }
};
