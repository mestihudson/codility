function solution(n) {
  const bs = new Number(n).toString(2).split("")
  let last = null
  let s = -1
  let all = [0]
  for (let i = 0, len = bs.length; i < len; i++) {
    let actual = bs[i]
    if (actual === "1") {
      if (last === null) {
        last = actual
        continue
      }
      if (last === "1") {
        last = actual
        continue
      }
      if (last === "0") {
        last = actual
        s++
        all.push(s)
        s = -1
        continue
      }
    }
    if (actual === "0") {
      if (last === null) {
        last = actual
        continue
      }
      if (last === "0") {
        last = actual
        if (i + 1 === len) {
          s = 0
        } else {
          s++
        }
        continue
      }
      if (last === "1") {
        last = actual
        s++
        continue
      }
    }
  }
  return all.reduce(function(a, b) { return Math.max(a, b) })
}

module.exports = { solution }
