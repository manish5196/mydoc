const express = require('express');
const router = express.Router();

router.get('/jit', (req, res) => {
    res.render('java/jit.ejs');
});

module.exports = router;