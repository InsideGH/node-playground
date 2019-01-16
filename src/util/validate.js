exports.isNumber = function(num) {
  const number = Number(num)
  return typeof number === "number" && !isNaN(number)
}

exports.isPositiveNumber = function(num) {
  return exports.isNumber(num) && num >= 0
}
