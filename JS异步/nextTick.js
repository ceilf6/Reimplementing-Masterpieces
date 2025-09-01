process.nextTick(() => {
    console.log('nextTick')
  })
  Promise.resolve()
    .then(() => {
      console.log('then')
    })
  setImmediate(() => {
    console.log('setImmediate')
  })
  console.log('end')


  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

async function main(){
    await sleep(3000)

    await Promise.resolve().then(() => {
            console.log()
        }
    )

    process.nextTick(() => {
        console.log('nextTick')
      })
      Promise.resolve()
        .then(() => {
          console.log('then')
        })
      setImmediate(() => {
        console.log('setImmediate')
      })
      console.log('end')
}

main()