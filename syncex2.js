var fs = require('fs');

console.log("Starting to read data!");

var data = fs.readFileSync('input.txt');
console.log(data.toString());

console.log('Read Done');
console.log("Starting to append data!");

try {
fs.appendFileSync('input.txt', " Hello World");
}catch(err){
}

console.log('Write Done');

console.log("Starting to re-read data!");

var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("Re-reading finish")