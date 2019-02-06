const path    = require('path');
const fs      = require('fs');  

const cleanDir = (dir, options) => {
    options     = options || {};
    options.ext = options.ext || [];
    let files   = [];
    try{
        files = fs.readdirSync(path.resolve(dir));
    }catch(error){
        return false;
    }
    for(let file of files) try { 
        let current    = dir+'/' + file;
        let currentExt = path.extname(current);
        if(options.ext.length && options.ext.includes(currentExt))
            fs.unlinkSync(path.resolve(dir+'/'+file),()=>{});
        else if (!options.ext.length)
            fs.unlinkSync(path.resolve(dir+'/'+file),()=>{});
    }catch(error){
        return false;
    } 
    return true;
};

module.exports = cleanDir;