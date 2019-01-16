/* global test expect*/
const fuzzy = require("./fuzzy")

test("no input is false", () => {
  expect(fuzzy.equal()).toBe(false)
})

test("invalid input", () => {
  expect(fuzzy.equal(() => {}, {}, "pro")).toBe(false)
})

test("not equal", () => {
  expect(fuzzy.equal(1, 1.001)).toBe(false)
})

test("equal", () => {
  expect(fuzzy.equal(1, 1.001, 0.001)).toBe(true)
})

test("not equal", () => {
  expect(fuzzy.equal(1, 1.001, 0.0001)).toBe(false)
})
