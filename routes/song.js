const express = require('express');
const router = express.Router();
const ToneSequenceBuilder = require('../controllers/tone-sequence-builder');
const toneSequenceBuilder = new ToneSequenceBuilder();
const Tone = require('tone');

/* GET home page. */
router.get('/:name/:birthyear', function(req, res, next) {
    //get parameters from input url
    let name = req.params.name;
    let birthyear = req.params.birthyear;
    //get tone sequence for this name-year pair; name is concatenated to year to ensure unique hash for each pair
    let toneSequence = toneSequenceBuilder.stringToToneSequence(name.concat(birthyear),2);
    //render song page, stringifying tone sequence so it can be passed to Pug template
    res.render('song',{
        toneSequence:JSON.stringify(toneSequence),
        title:'Song Player'
    });
});

module.exports = router;

