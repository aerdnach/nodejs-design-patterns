import * as fs from 'fs';
var fileReadStream = fs.createReadStream('./test.txt');

fileReadStream.on('data', function(chunk) {
    console.log("Reading In Progress....")
    console.log(chunk.toString())
});