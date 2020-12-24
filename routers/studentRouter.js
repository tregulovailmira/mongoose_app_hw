const { Router } = require('express');

const studentRouter = new Router();

studentRouter.route('./').post().get();

studentRouter.route('./:studentId').get().patch().delete();

module.exports = studentRouter;
