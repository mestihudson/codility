function solution(source, times) {
  for (let i = 0; i < times; i++) {
    const [last, ...others] = source.reverse()
    source = [ ...[last], ...others.reverse() ]
  }
  return source
}

module.exports = { solution }
