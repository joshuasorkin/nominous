const express = require('express');
const router = express.Router();
const yearRegex = /^[1-9]\d+$/
const ContentCreator = require('../controllers/content-creator');
const contentCreator = new ContentCreator();

router.get('/:name/:birthyear', function(req, res, next) {
    //get parameters from request
    let name = req.params.name;
    let birthyear = req.params.birthyear;

    let output;
    let currentYear = new Date().getFullYear();

    //set result to return JSON
    res.setHeader('Content-Type', 'application/json');

    //check if birth year is a valid year
    if (yearRegex.test(birthyear)){
        //check if birth year is current year or earlier
        if(birthyear<=currentYear){
            //generate name analysis
            let outputText = contentCreator.create(name,birthyear);
            //create JSON output
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

    //send JSON as response
    res.end(JSON.stringify(output));


});

module.exports = router;