function solution(tape) {
  const MIN_RANGE = 2
  const MAX_RANGE = 100000
  if (!Array.isArray(tape)) {
    return -1
  }
  if (tape.length < MIN_RANGE || tape.length > MAX_RANGE) {
    return -1
  }
  let current = null
  let left = 0
  let right = 0
  for (let i = 0, l = tape.length - 1; i < l; i++) {
    left += tape[i]
    if (i === 0) {
      right += [ ...tape ].splice(i + 1).reduce((x, y) => {
        if (x < -1000 || x > 1000 || y < -1000 || y > 1000) {
          throw new Error("Number out of range")
        }
        return x + y
      }, 0)
    } else {
      right -= tape[i]
    }
    let sub = Math.abs(Math.abs(left) - Math.abs(right))
    if (current === null || sub < current) {
      current = sub
    }
  }
  return current
}

module.exports = { solution }
