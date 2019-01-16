exports.equal = function(a, b, eps = 0) {
  return Math.abs(a - b) <= eps
}
