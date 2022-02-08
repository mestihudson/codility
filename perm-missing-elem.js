function solution(a) {
  const MIN = 0
  const MAX = 100000
  if (!Array.isArray(a)) {
    return 0
  }
  if (a.length > MAX) {
    return 0
  }
  return [ ...a ]
    .sort((x, y) => x - y)
    .map((e, i) => [e, i + 1])
    .filter((e) => e[0] !== e[1])[0][1]
}

module.exports = { solution }
