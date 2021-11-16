const md5 = require('blueimp-md5');

class NameAnalyzer{

    //gets the MD5 hash of a string passed in
    getHash(name){
        return md5(name);
    }
}

module.exports = NameAnalyzer;