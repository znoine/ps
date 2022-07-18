/**
 * @param {number[][]} mat1
 * @param {number[][]} mat2
 * @return {number[][]}
 */
 const multiply = (mat1, mat2) => {
  const result = [];
  for (let i = 0; i < mat1.length; i++) {
    result[i] = [];
    for (let j = 0; j < mat2[0].length; j++) {
      result[i][j] = 0;
      for (let k = 0; k < mat2.length; k++) {
        result[i][j] += mat1[i][k] * mat2[k][j];  
      } 
    }
  }
  return result;
};