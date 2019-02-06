const through2 = require('through2');
const cleanDir = require('./lib/cleanDir');
module.exports  = (dir, options) => {
    let stream = through2.obj(cleanDir.apply(null,[dir,options]));
    stream.resume();
    return stream;
};