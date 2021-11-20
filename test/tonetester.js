/***code for testing Tone.js */


const Tone = require('tone');
const ToneSequenceBuilder = require('../controllers/tone-sequence-builder');
const toneSequenceBuilder = new ToneSequenceBuilder();

const play = function (tone,toneSequence) {
    console.log("playing...")
    let noteTime=tone.now();
    toneSequence.forEach(noteobj=>{
        const synthobj = new tone.Synth().toDestination();
        synthobj.triggerAttackRelease(`${noteobj}`, "8n",noteTime);
        noteTime+=0.5
    });
}

const hash = '5c19522fae9201dd8bfc335155a54ed4';
const toneSequence = toneSequenceBuilder.stringToToneSequence(hash,4);
console.log(toneSequence);
return;

play(Tone,toneSequence)
return;



// create two monophonic synths
const synthA = new Tone.FMSynth().toDestination();
const synthB = new Tone.AMSynth().toDestination();
//play a note every quarter-note
const loopA = new Tone.Loop(time => {
	synthA.triggerAttackRelease("C2", "8n", time);
}, "4n").start(0);
//play another note every off quarter-note, by starting it "8n"
const loopB = new Tone.Loop(time => {
	synthB.triggerAttackRelease("C4", "8n", time);
}, "4n").start("8n");
// the loops start when the Transport is started
Tone.Transport.start()
// ramp up to 800 bpm over 10 seconds
Tone.Transport.bpm.rampTo(800, 10);