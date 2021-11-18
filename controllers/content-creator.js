const NounPhraseCollector = require('./noun-phrase-collector');
const ContentAssembler = require('./content-assembler');
const nounPhraseCollector=new NounPhraseCollector();
const contentAssembler = new ContentAssembler();

class ContentCreator{
    constructor(){
        this.nounPhraseCollector = nounPhraseCollector;
        this.contentAssembler = contentAssembler;
    }

    create(name,year){
        let phraseArray = this.nounPhraseCollector.nounPhraseArray(name,year);
        let paragraph = this.contentAssembler.assemble(name,year,phraseArray);
        return paragraph;
    }
}

module.exports = ContentCreator;