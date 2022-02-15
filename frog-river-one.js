function solution(x, A) {
  let B = [];
  for (let i = 0; i < x; i++) {
    B[i] = -1;
  }
  let n = A.length;
  for (let i = 0; i < n; i++) {
    if (B[A[i] - 1] == -1) {
      B[A[i] - 1] = i;
    }
  }
  let r = 0;
  for (let i in B) {
    let b = B[i];
    if (b > r) {
      r = b;
    } else if (b == -1) {
      return -1;
    }
  }
  return r;
}

module.exports = { solution }
