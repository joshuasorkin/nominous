const md5 = require('blueimp-md5');

class ToneSequenceBuilder{


    //converts md5 hash of string to a sequence of notes that can be played by Tone.js
    stringToToneSequence(str,octaveStart){
        let hash = md5(str);
        let arr = hash.toUpperCase().split('');
        let arr2=[];
        let pushVal;
        for(let i=0;i<arr.length;i++){
            let char = arr[i];
            //for A-F, use that actual note
            if(/^[A-F]$/.test(char)){
                pushVal=char+octaveStart;
            }
            //for 0, use "G" since hex letters will only go up to "F"
            else if(/^[0]$/.test(char)){
                pushVal="G"+octaveStart;
            }
            //for 1-7, use A-G one octave up
            else if(/^[1-7]$/.test(char)){
                pushVal=String.fromCharCode(64+parseInt(char))+(octaveStart+1)
            }
            //for 8-9, use A-B two octaves up
            else if(/^[8-9]$/.test(char)){
                pushVal=String.fromCharCode(57+parseInt(char))+(octaveStart+2)
            }
            //get note duration by taking the next character's ASCII value
            //and using the ones digit
            let duration;
            //default value for last character in hash
            if(i === arr.length-1){
                duration = '8';
            }
            else{
                let next = arr[i+1];
                let nextAscii = next.charCodeAt().toString();
                let final = nextAscii.substring(nextAscii.length-1);
                duration = final;
                //duration cannot be zero, so arbitrarily setting it to 4
                if (duration === '0'){
                    duration = '4'
                }
            }
            //add object with name and duration to tone sequence array
            let pushObj = {
                note:pushVal,
                duration:duration
            }
            arr2.push(pushObj);
        }
        return arr2;
    }
}

module.exports = ToneSequenceBuilder;