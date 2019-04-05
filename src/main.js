const myCode = async () => {
  // Your code here ->
  console.log('Nothing here')
}

;(async function start() {
  console.log('Start --->\n')
  await myCode()
  console.log('\n<--- End')
})()
