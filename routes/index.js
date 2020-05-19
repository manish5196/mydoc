const express = require('express');
const router = express.Router();
const javaRoutes = require('./java-route');

router.use('/java', javaRoutes);

module.exports = router;