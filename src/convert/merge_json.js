var process = require('process');
var fs = require('fs');
var _ = require('lodash');
var path = require('path');
var $1 = process.argv[2];
var $2 = process.argv[3];
var $3 = process.argv[4];
// var pathReg = /(\\\\?([^\\/]*[\\/])*)([^\\/]+)$/g;
console.log($1, $2, $3);
if(!$1 || !$2 || !$3) {
    // process.exit(-1);
    throw('输入参数为 src1, src2, dist 的路径')
}
// if(!pathReg.test($1) || !pathReg.test($2) || !pathReg.test($3) ) {
//     throw('不是一个正确的路径')
// } 
$1 = path.resolve('.', $1);
$2 = path.resolve('.', $2);
$3 = path.resolve('.', $3);

console.log('src1 ==>', $1);
console.log('src2 ==>', $2);
console.log('dist ==>', $3);

if(!fs.existsSync($1) || !fs.existsSync($2) || !fs.existsSync($3)) {
    throw('文件不存在');
}

let src1 = JSON.parse(fs.readFileSync($1).toString('utf8'))
let src2 = JSON.parse(fs.readFileSync($2).toString('utf8'))


let dist = _.union(src1, src2, 'key');

console.log(src1.length, src2.length, dist.length);

fs.writeFileSync($3, JSON.stringify(dist));
