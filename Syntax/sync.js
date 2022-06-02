var fs = require('fs');

// //readFileSync
// console.log('A');
// var  result  = fs.readFileSync('syntax/sample.txt' , 'utf8');
// console.log(result);
// console.log('C');

console.log('A');
//callback 파일 읽는거 끝나면 callback위치에이는 함수를 실행시키는것
fs.readFile('syntax/sample.txt' , 'utf8' , function(err, result) {
console.log(result);
});

console.log('C');
