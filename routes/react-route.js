const express = require('express');
const router = express.Router();

router.get('/use-state', (req, res) => {
    res.render('react/use-state-hooks.ejs');
});

module.exports = router;