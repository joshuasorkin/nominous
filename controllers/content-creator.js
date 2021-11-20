const NounPhraseBuilder = require('./noun-phrase-builder');
const ContentAssembler = require('./content-assembler');
const nounPhraseBuilder=new NounPhraseBuilder();
const contentAssembler = new ContentAssembler();

class ContentCreator{
    constructor(){
        this.nounPhraseBuilder = nounPhraseBuilder;
        this.contentAssembler = contentAssembler;
    }

    create(name,year){
        //get the adjective-noun phrases corresponding to this name and year
        let phraseArray = this.nounPhraseBuilder.nounPhraseArray(name,year);
        //build the paragraph
        let paragraph = this.contentAssembler.assemble(name,year,phraseArray);
        return paragraph;
    }
}

module.exports = ContentCreator;