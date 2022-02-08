function solution(a) {
  const MIN_RANGE = 2
  const MAX_RANGE = 100000
  if (!Array.isArray(a)) {
    return -1
  }
  if (a.length < MIN_RANGE || a.length > MAX_RANGE) {
    return -1
  }
  let current = null
  for (let i = 0, l = a.length - 1; i < l; i++) {
    const position = i + 1
    const reducer = (x, y) => {
      if (x > 1000 || x < -1000 || y > 1000 || y < -1000) {
        throw new Error("Number out of range")
      }
      return x + y
    }
    const former = [ ...a ].splice(0, position)
    const formerSum = former.reduce(reducer, 0)
    const latest = [ ...a ].splice(position)
    const latestSum = latest.reduce(reducer, 0)
    const actual = Math.abs(formerSum - latestSum)
    // console.log(i, position, former, latest, formerSum, latestSum, current, actual)
    if (current === null || (current !== null && current > actual)) {
      current = actual
    }
    // console.log(i, position, former, latest, formerSum, latestSum, current, actual)
  }
  return current
}

module.exports = { solution }
