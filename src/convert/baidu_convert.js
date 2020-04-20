var pinyin = require("pinyin");
var _ = require("lodash");
var fs = require("fs");
var option = {
    style: pinyin.STYLE_NORMAL, // 设置拼音风格
    heteronym: true
};
// var str = _.flatten(pinyin('西安', option)).join('');
// console.log(str);
let jData = fs.readFileSync('./baidu_cood.json',{ options: {encoding: "utf8"}}).toString('utf8');
let data = JSON.parse(jData);
// console.log(data);
let result = [];
for(let item in data) {
    let _pinyin = _.flatten(pinyin(item, option)).join('');
    result.push({
        key: _pinyin,
        latitude: data[item][1],
        longitude: data[item][0],
        name: item
    });
}
fs.writeFileSync('./china.json', JSON.stringify(result));