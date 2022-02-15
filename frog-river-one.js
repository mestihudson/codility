function solution(moment, leaves) {
  const setOfLeaves = [ ...new Set([ ...leaves ]) ].sort((x, y) => x - y)
  return setOfLeaves.length >= moment ? leaves.indexOf(moment) : -1
}

module.exports = { solution }
