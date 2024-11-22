/*
Write a function to read all files in a directory recursively and return their paths as an array.
(For example, given a directory structure, return ['dir/file1.txt', 'dir/subdir/file2.txt'].)
*/

const fs = require('node:fs');
let getPaths = function(folderPath){
    const isFile = fileName => {
        return fs.lstatSync(fileName).isFile();
    };
    return fs.readdirSync(folderPath)
        .map(fileName => {
          return [folderPath, fileName].join('\\');
        })
        .map(ele =>{
            if(!isFile(ele)){
                return  getPaths(ele)
            }
            return ele
            
        }).flat(Infinity);
}
console.log(getPaths(__dirname))

