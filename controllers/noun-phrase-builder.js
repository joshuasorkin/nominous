const noun = require('../noun');
const adjective = require('../adjective');
const md5 = require('blueimp-md5');
class NounPhraseBuilder {
    constructor(){
        this.adjective=this.remove_duplicates_es6(adjective);
        this.noun=this.remove_duplicates_es6(noun);
    }
    
    remove_duplicates_es6(arr) {
        let s = new Set(arr);
        let it = s.values();
        return Array.from(it);
    }

    wordArray(inputWord,sourceWordArray){
        //get the md5 hash of the word
        const hash = md5(inputWord.toLowerCase());
        //split the hash into 3-character segments
        const hashArray=hash.match(/.{1,3}/g)
        //create the blank array that will hold the selected words
        let wordArray=[];
        //iterate over the hashArray
        hashArray.forEach(element=>{
            //convert each segment from hexadecimal to integer
            const hexToInt=parseInt(element,16);
            //add the word from sourceWordArray at this integer index
            //to wordArray           
            const arrayIndex = (hexToInt**2)%sourceWordArray.length
            wordArray.push(sourceWordArray[arrayIndex]);
        })
        return wordArray;
    }

    nounPhraseArray(adjectiveWord,nounWord){
        //get the adjective array
        const adjectiveArray = this.wordArray(nounWord+adjectiveWord,this.adjective);
        //get the noun array
        const nounArray = this.wordArray(adjectiveWord+nounWord,this.noun);
        let outputArray = [];
        for(let i=0;i<adjectiveArray.length;i++){
            //combine each adjective and noun, and push to output
            outputArray.push(`${adjectiveArray[i]} ${nounArray[i]}`);
        }
        return outputArray;
    }
}

module.exports = NounPhraseBuilder