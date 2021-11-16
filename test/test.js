const assert = require('assert');
const NameAnalyzer = require('../controllers/name-analyzer')

describe('NameAnalyzer',function(){
    describe('getHash()',function(){
        const nameAnalyzer = new NameAnalyzer();
        const hashVerify = 'd16fb36f0911f878998c136191af705e';
        console.log(hashVerify);
        assert.strictEqual(nameAnalyzer.getHash('xyz'),hashVerify)
        .catch(err => console.log(err));
    });
});