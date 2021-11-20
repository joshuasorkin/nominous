const express = require('express');
const router = express.Router();
const ToneSequenceBuilder = require('../controllers/tone-sequence-builder');
const toneSequenceBuilder = new ToneSequenceBuilder();
const yearRegex = /^[1-9]\d+$/

/* GET home page. */
router.get('/:name/:birthyear', function(req, res, next) {
    //get parameters from input url
    let name = req.params.name;
    let birthyear = req.params.birthyear;
    let currentYear = new Date().getFullYear();

    //todo: refactor this year test to its own module since it also appears in api.js
    //check if birth year is a valid year
    if (yearRegex.test(birthyear)){
        //check if birth year is current year or earlier
        if(birthyear<=currentYear){
            //get tone sequence for this name-year pair; name is concatenated to year to ensure unique hash for each pair
            let toneSequence = toneSequenceBuilder.stringToToneSequence(name.concat(birthyear),2);
            //render song page, stringifying tone sequence so it can be passed to Pug template
            res.render('song',{
                toneSequence:JSON.stringify(toneSequence),
                title:'Song Player'
            });
        }
        else{
            res.render('layout',{
                title: `A pity!`,
                header: `I'm terribly sorry, but I can't process that.`,
                content: `Your birth year must be ${currentYear} or before.  `
                +`You can use a future date once I get my time machine back from the mechanic.`
            })

        }
    }
    else{
        res.render('layout',{
            title: `A pity!`,
            header: `I'm terribly sorry, but I can't process that.`,
            content: `I don't recognize ${birthyear} as a year.`
        })
    }



    
});

module.exports = router;

