const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/:name/:bloodtype', function(req, res, next) {
  let name = req.params.name;
  let bloodtype = req.params.bloodtype;

});

module.exports = router;