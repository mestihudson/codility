function solution(a) {
  const MIN = 0
  const MAX = 100000
  if (!Array.isArray(a)) {
    return 0
  }
  if (a.length > MAX) {
    return 0
  }
  let l = a.length
  let t = l + 1
  let p = 0
  for (let i = 0; i < l; i++) {
    p += a[i]
    t += i + 1
  }
  return t - p
}

module.exports = { solution }
