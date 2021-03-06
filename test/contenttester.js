/***code for testing content creation */

const NounPhraseCollector = require('../controllers/noun-phrase-builder');
const ContentAssembler = require('../controllers/content-assembler.js');
const nounPhraseCollector = new NounPhraseCollector();
const contentAssembler = new ContentAssembler();

let name = "Spsdioiof";
let trait = "1978";
let arr = nounPhraseCollector.nounPhraseArray(name,trait);
console.log(contentAssembler.assemble(name,trait,arr))