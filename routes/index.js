const express = require('express');
const router = express.Router();
const javaRoutes = require('./java-route');
const reactRoutes = require('./react-route');

router.use('/java', javaRoutes);
router.use('/react', reactRoutes);

module.exports = router;