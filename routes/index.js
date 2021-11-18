const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(`Welcome to Nominous, the Name Analyzer!  To use the API, make a GET request to `
  +`${req.headers.host + req.url}api/[your first name]/[your birth year].`)
});

module.exports = router;
