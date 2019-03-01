import { isNumber } from './util/validate'
import { range } from 'lodash'

const escapeRegExp = string => {
  return string.replace(/\$&/g, '\\dollar')
}

const fakeReplace = function(source, pattern, substitute) {
  return source.split(pattern).join(substitute)
}

function replacer(str, offset, s) {
  console.log(`Found ${str} at position ${offset} in string ${s}`)
  return str.toLowerCase()
}

const myCode = () => {
  // Your code here ->
  var re = new RegExp('kalleponk', 'y')
  let markup = `<pre class="CodeRay highlight"><code data-lang="console">$&gt; cd sdk`
  let content = '<div>kalleponk</div>'

  console.log('markup: ', markup)

  // let result = content.replace(re, markup)

  // let result = content.replace(re, escapeRegExp(markup))

  let result = fakeReplace(content, 'kalleponk', markup)

  // let result = content.replace(re, replacer)

  console.log('result', result)
}

;(function start() {
  console.log('Start --->\n')
  myCode()
  console.log('\n<--- End')
})()
