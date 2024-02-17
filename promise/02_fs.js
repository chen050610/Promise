const fs = require ('fs')


//回调函数的形式
fs.readFile('./resource/1.txt',(err,data)=>{
    if (err) throw err;
    console.log(data.toString())
})

//
let p = new Promise((resolve,reject)=>{
    fs.readFile('./resource/1.txt',(err,data)=>{
        if (err) reject(err); else resolve(data)
    })
})
p.then(
    (value)=>{
        console.log(value.toString())
    }
    ,
    (reason)=>{
        console.log(reason)
    }
)