const { solution } = require("./tape-equilibrium")

it("should return lower difference between splits", () => {
  expect(solution([1, 2])).toBe(1)
  expect(solution([1, 2, 3])).toBe(0)
  expect(solution([3, 1, 2, 4, 3])).toBe(1)
  expect(solution([1, 2, 3, 4])).toBe(2)
  expect(solution([-1000, 1000])).toBe(2000)
  try {
    solution([-1001, 1001])
    expect(true).toFalsy()
  } catch (e) {
  }
})
