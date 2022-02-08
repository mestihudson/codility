const { solution } = require("./frog-jump")

it("should return frog jumps", () => {
  expect(solution(10, 85, 30)).toBe(3)
  expect(solution(20, 49, 30)).toBe(1)
  expect(solution(20, 49, 15)).toBe(2)
})
