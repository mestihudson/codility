const { solution } = require("./unpaired")

it("should return odd occurrences in array", () => {
  expect(solution([9, 3, 9, 3, 9, 7, 9])).toEqual(7)
})
