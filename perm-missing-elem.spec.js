const { solution } = require("./perm-missing-elem")

it("should return missing element", () => {
  expect(solution([2, 3, 1, 5])).toBe(4)
  expect(solution([2, 3, 1, 5, 4, 7])).toBe(6)
  expect(solution([2, 3, 1, 5, 4, 7, 10, 9, 8, 11, 13, 15, 12, 14])).toBe(6)
  const [a, ...b] = Array(100001).fill(0).map((e, i) => i + 1)
  expect(solution(b)).toBe(1)
})
