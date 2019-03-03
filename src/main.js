import { isNumber } from './util/validate'
import { range } from 'lodash'

const myCode = () => {
  console.log("Nothing here")
}

;(function start() {
  console.log('Start --->\n')
  myCode()
  console.log('\n<--- End')
})()
