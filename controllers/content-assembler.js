const pluralize = require('pluralize');
const ChineseZodiac = require('./chinese-zodiac');
const chineseZodiac = new ChineseZodiac();
class ContentAssembler{

    constructor(){
        this.chineseZodiac = chineseZodiac;
    }

    assemble(name,year,nounPhraseArray){
        let animal = this.chineseZodiac.getAnimal(year);
        let indefiniteArticle;
        if (animal === "Ox"){
            indefiniteArticle = "an"
        }
        else{
            indefiniteArticle = "a"
        }
        const paragraph =
        `If you're named ${name} and you were born in the year ${year}, you are ${indefiniteArticle} ${animal}, and your life will be one of ${this.plural(nounPhraseArray[0])}.  `
        +`Your ideal career involves the pursuit of ${this.plural(nounPhraseArray[1])}, but beware that you are not corrupted `
        +`by the influence of their ${this.plural(nounPhraseArray[2])}. `
        +`Your biography will be titled "${this.capitalize(nounPhraseArray[3])}: ${name} and The ${this.capitalize(nounPhraseArray[4])}". `
        +`You will find true love with someone who admires ${this.plural(nounPhraseArray[6])}, provided that you woo them `
        +`with ${this.plural(nounPhraseArray[7])}.  `
        +`Your greatest asset is your ${nounPhraseArray[8]}, and you will need it, because soon `
        +`you will face the biggest decision of your life: ${nounPhraseArray[9]} or ${nounPhraseArray[10]}?`

        return paragraph;
    }
    
    capitalize(nounPhrase){
        let arr = nounPhrase.split(' ');
        for(let i = 0;i<arr.length;i++){
            arr[i]=arr[i][0].toUpperCase()+arr[i].substring(1);
        }
        return arr.join(' ');
    }

    plural(nounPhrase){
        let arr = nounPhrase.split(' ');
        arr[1]=pluralize(arr[1]);
        return arr.join(' ');

        const lastChar=nounPhrase.substring(nounPhrase.length-1);
        if (lastChar === 's' || lastChar === 'z'){
            return nounPhrase+'es';
        }
        else{
            return nounPhrase+'s';
        }
    }
}

module.exports = ContentAssembler