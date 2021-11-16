const express = require('express');
const router = express.Router();
const path = require('path');
const soundtestHTML = '../public/javascripts/soundtest.html';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname,soundtestHTML));
});

module.exports = router;
