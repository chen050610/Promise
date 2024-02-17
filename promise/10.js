// let p =new Promise((resolve,reject)=>{
//     resolve('haha')
//     console.log(11111)
// })
// p.then((value)=>{
//     console.log(value)
// })
// console.log(22222)
//

let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('OK');
    }, 1000);
});

console.log(p.then(value => {
        console.log(111);
    })
)