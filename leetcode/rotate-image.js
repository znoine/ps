/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = (matrix) => {
  const matrixLen = matrix.length;
  const squareLen = Math.floor(matrixLen / 2);
  for (let i = 0; i < squareLen; i++) {
    const len = matrixLen - 1 - i * 2;
    for (let j = 0; j < len; j++) {
      let r = i;
      let c = j + i;
      let curVal = matrix[r][c];
      for (let k = 0; k < 4; k++) {
        let cnt = 0;
        while (cnt < len) {
          if (r === i && c < i + len) c++;
          else if (c === i + len && r < i + len) r++;
          else if (r === i + len && c > i) c--;
          else if (c === i && r > i) r--;
          cnt++;
        }
        const temp = matrix[r][c];
        matrix[r][c] = curVal;
        curVal = temp;
      }
    }
  }
};
