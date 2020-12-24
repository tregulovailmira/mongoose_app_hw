const { Router } = require('express');
const studentRouter = require('./routers/studentRouter');

const router = new Router();

router.use('/students', studentRouter);

module.exports = router;
