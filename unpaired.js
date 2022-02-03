function solution(a) {
  let result = 0

  for (let e of a) {
    result ^= e
  }

  return result
}

module.exports = { solution }
