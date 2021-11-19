const express = require('express');
const router = express.Router();
const ToneSequenceBuilder = require('../controllers/tone-sequence-builder');
const toneSequenceBuilder = new ToneSequenceBuilder();
const tone = require('tone');

/* GET home page. */
router.get('/:name/:birthyear', function(req, res, next) {
    let name = req.params.name;
    let birthyear = req.params.birthyear;
    let toneSequence_name = toneSequenceBuilder.stringToToneSequence(name);
    let toneSequence_birthyear = toneSequenceBuilder.stringToToneSequence(birthyear);
    let toneSequence = toneSequence_name.concat(toneSequence_birthyear); 
    res.render('song',{
        toneSequence:toneSequence,
        tone:tone
    });
});

module.exports = router;

