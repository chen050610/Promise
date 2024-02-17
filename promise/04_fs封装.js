function mineReadFile(path){
    return new Promise((resolve, reject)=>{
        require('fs').readFile(path,(err,data)=>{
            if (err) reject(err); else resolve(data.toString())
        })
    })
}


p=mineReadFile('./1.txt')
p.then((value)=>{
    console.log(value)
},(reason)=>{
    console.log(reason)
})