function sendAJAX(url){
    return new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest()
        xhr.open("GET",url)
        xhr.send();
        xhr.onreadystatechange = function (){
            if (xhr.readyState == 4){
                //
                if (xhr.status >=200 && hr.status <300){
                    resolve(xhr.response);
                } else  {reject(xhr.status)}
            }
        }
    })
}

let p =sendAJAX('https://api.xygeng.cn/one')
p.then((value)=>{
    console.log(value)
},
    (reason)=>{
        console.log(reason)}

)
