const md5 = require('blueimp-md5');

class NameAnalyzer{

    //gets the MD5 hash of a string passed in
    getHash(name){
        let hash = md5(name);
        console.log(hash);
        return hash;
    }
}

module.exports = NameAnalyzer;