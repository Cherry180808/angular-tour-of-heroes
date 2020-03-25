function delay(time){
    return new Promise((resolve, reject) => {
        console.log(`wait ${time}s`)
        setTimeout(() => {
            console.log('execute')
            resolve("resolve" + time)
        }, time * 1000)
    })
}

const arr = [3, 4, 5]

//method1---reduce
arr.reduce((s, v) => {
    return s.then(() => delay(v))
}, Promise.resolve())

//method2---async+循环+await
// (async function(){
//     for(const v of arr){
//         await delay(v)
//     }
// })