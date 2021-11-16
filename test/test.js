const assert = require('assert');
const NameAnalyzer = require('../controllers/name-analyzer')

describe('NameAnalyzer',function(){
    describe('getHash()',function(){
        it('should match the MD5 hash of xyz',function(){
            const nameAnalyzer = new NameAnalyzer();
            const hashVerify = 'd16fb36f0911f878998c136191af705e';
            assert.strictEqual(nameAnalyzer.getHash('xyz'),hashVerify);
        });
    });
});