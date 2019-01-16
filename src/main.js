import { isNumber } from './util/validate'
import { range } from 'lodash'

const myCode = () => {
  // Your code here ->
  const a = isNumber(45)
  const b = isNumber('45')
  const c = isNumber('4g5')

  console.log('a = ', a)
  console.log('b = ', b)
  console.log('c = ', c)
  console.log(range(4))
}

;(function start() {
  console.log('Start --->\n')
  myCode()
  console.log('\n<--- End')
})()
