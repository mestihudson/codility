const { solution } = require("./frog-river-one")

it("should return frog river one", () => {
  expect(solution(5, [1, 3, 1, 4, 2, 3, 5, 4])).toBe(6)
  expect(solution(2, [2, 2, 2, 2, 2])).toBe(-1)
  expect(solution(2, [2, 2, 2, 2, 1])).toBe(4)
  expect(solution(7, [7, 8, 2, 3, 8, 3, 2, 1])).toBe(-1)
})
