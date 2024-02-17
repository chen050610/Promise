const  util= require('util')
const fs = require('fs')
let mineReadFile = util.promisify(fs.readFile)

mineReadFile('./1.txt').then((value)=>
{
    console.log(value.toString())
})//util.promisify 方法将回调形式的 fs.readFile 方法转换为 Promise 形式，以便更容易地处理文件读取操作。