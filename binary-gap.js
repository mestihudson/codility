function solution(n) {
  if (Number.isInteger(n)) {
    const MIN = 1
    const MAX = 2147483647
    if (n >= MIN && n <= MAX) {
      const bin = new Number(n).toString(2)
      let last = 0
      let next = 0
      let gt = result = 0
      while (true) {
        next = bin.indexOf("1", next + 1)
        if (next === -1) return gt
        result = next - (last + 1)
        if (result > gt) {
          gt = result
        }
        last = next
      }
    }
  }
  return 0
}

module.exports = { solution }
