function solution(k, n) {
  for (let i = 0; i < n; i++) {
    const last = k.splice(k.length - 1, 1)
    k = [ ...last, ...k ]
  }
  return k
}

module.exports = { solution }
