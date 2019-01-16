/* global test expect*/
const validate = require("./validate")

test("1 is a number", () => {
  expect(validate.isNumber(1)).toBe(true)
})

test("'1' is a !number", () => {
  expect(validate.isNumber("1")).toBe(true)
})

test("{} is a !number", () => {
  expect(validate.isNumber({})).toBe(false)
})

test("0x23 is a number", () => {
  expect(validate.isNumber(0x23)).toBe(true)
})

test("0x23_string is a number", () => {
  expect(validate.isNumber("0x23_string")).toBe(false)
})

test("1 > 0", () => {
  expect(validate.isPositiveNumber(1)).toBe(true)
})

test("-1 > 0", () => {
  expect(validate.isPositiveNumber(-1)).toBe(false)
})
