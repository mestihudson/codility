function solution(x, y, d) {
  const MIN = 1
  const MAX = 1000000000
  if (!(Number.isInteger(x) && Number.isInteger(y) && Number.isInteger(d))) {
    return 0
  }
  if (!((x >= MIN && x <= MAX) && (y >= MIN && y <= MAX) && (d >= MIN && d <= MAX))) {
    return 0
  }
  if (x > y) {
    return 0
  }
  return Math.ceil((y - x) / d)
}

module.exports = { solution }
