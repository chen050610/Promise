function Promise(executor) {
    //为实例对象添加属性
    this.PromiseState = 'pendding'
    this.PromiseResult = null
    this.callbacks = []
    const self = this

    function resolve(data) {
        if (self.PromiseState !== 'pending') return;
        //改变对象状态和属性值
        //注意这里的this时window所以需要
        self.PromiseState = 'fulfilled'
        self.PromiseResult = 'data'
        self.callbacks.forEach(item =>{
            item.onResolved(data)
        })
    }

    function reject(data) {
        //状态只能修改一次
        if (self.PromiseState !== 'pending') return;
        //改变对象状态和属性值
        //注意这里的this时window所以需要
        self.PromiseState = 'rejected'
        self.PromiseResult = 'data'
        self.callbacks.forEach(item =>{
            item.onRejected(data)
        })
    }
    //throw抛出异常改变状态
    try{    //执行器函数同步调用
        executor(resolve,reject);}
    catch (e){
        reject(e)
    }
}
Promise.prototype.then = function (onResolved,onRejected) {
    return Promise((resolve,reject)=>{
        if (this.PromiseState === 'fulfilled') {
            let result=onResolved(this.PromiseResult)
            try{
                if (result instanceof Promise){
                    result.then((value)=>{
                        resolve(value)
                    },(error)=>{
                        reject(error)
                    })
                } else {
                    resolve(result)
                }
            } catch (e) {
                reject(e)
            }
        }
        if (this.PromiseState === 'rejected') {
            onRejected(this.PromiseResult)
        }
        if (this.PromiseState === 'pedding') {
            this.callbacks.push(        {
                onResolved,
                onRejected
            })

        }
    })
}