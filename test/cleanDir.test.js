const fs       = require('fs');
const path     = require('path');
const cleanDir = require('../lib/cleanDir');
const {expect} = require('chai');

describe('cleanDir.js', () => {
    if(!fs.existsSync("./tempdir")){
        fs.mkdirSync('./tempdir');
    }

    if(!fs.existsSync("./tempdir/file.txt")){
        fs.writeFileSync('./tempdir/file.txt','Hello world!');
    }
        
    if(!fs.existsSync("./tempdir/file.js")){
        fs.writeFileSync('./tempdir/file.js','Hello world!');
    }

    it('should clean JS only',()=>{
        expect(cleanDir('./tempdir',{
            ext:['.js']
        })).to.equal(true);
        expect(fs.readdirSync(path.resolve('./tempdir'))).to.have.lengthOf(1);
    });

    it('should clean a directory',()=>{
        expect(cleanDir('./tempdir')).to.equal(true);
    });

    it(`shouldn't clean a directory`,()=>{
        expect(cleanDir('./tempdir2')).to.equal(false);
    });
});