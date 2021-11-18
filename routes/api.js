const express = require('express');
const router = express.Router();
const yearRegex = /^[1-9]\d+$/
const ContentCreator = require('../controllers/content-creator');
const contentCreator = new ContentCreator();

router.get('/:name/:birthyear', function(req, res, next) {
  let name = req.params.name;
  let birthyear = req.params.birthyear;
  let output;
  let currentYear = new Date().getFullYear();

  res.setHeader('Content-Type', 'application/json');
  if (yearRegex.test(birthyear)){
      if(birthyear<=currentYear){
        let outputText = contentCreator.create(name,birthyear);
        output = {
            nameAnalysis:outputText
        }
      }
      else{
          output = {
              error: `Year must be ${birthyear} or before`
            }
      }
  }
  else{
      output = {
          error: `Invalid birth year`
      }
  }

  res.end(JSON.stringify(output));


});

module.exports = router;