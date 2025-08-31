
/*
console.log('T1')
const promise1 = new Promise((resolve, reject) => {
	console.log('1')
  setTimeout(() => {
    resolve('success')
  }, 1000)
  console.log('2')
})
const promise2 = promise1.then(() => {
  throw new Error('error!!!')
}).catch(err => {
    console.log('捕获到错误:', err.message)
})
 
console.log('promise1', promise1)
console.log('promise2', promise2)
 
setTimeout(() => {
  console.log('promise1', promise1)
  console.log('promise2', promise2)
}, 2000)

//======
console.log()
console.log('T2')
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('once')
      resolve('success')
    }, 1000)
  })
   
  const start = Date.now()
  promise.then((res) => {
    console.log(res, Date.now() - start)
  })
  promise.then((res) => {
    console.log(res, Date.now() - start)
  })

  //=====
console.log()
console.log('T3')
Promise.resolve()
  .then(() => {
    return new Error('error!!!')
  })
  .then((res) => {
    console.log('then: ', res)
  })
  .catch((err) => {
    console.log('catch: ', err)
  })
*/