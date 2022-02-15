function solution(moment, leaves) {
  let setOfLeaves = new Set()
  for (let i = 0; i < leaves.length; i++) {
    setOfLeaves.add(leaves[i])
    if (setOfLeaves.size === moment) {
      return i
    }
  }
  return -1
}

module.exports = { solution }
