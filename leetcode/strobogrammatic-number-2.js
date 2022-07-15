/**
 * @param {number} n 
 * @param {string[]} result 
 * @returns 
 */
const getStrobogrammatic = (n, result) => {
  const isWithCenter = n % 2 === 1;
  const turningPoint = Math.floor(n / 2) + (isWithCenter ? 0 : -1);
  /**
   * 
   * @param {string} str 
   * @param {number} i 
   * @returns 
   */
  const recursive = (str, i) => {
    if (i === n) {
      result.push(str);
      return;
    }
    for (const candidate of ['0', '1', '6', '8', '9']) {
      if (n !== 1 && (i === 0 || i === n - 1) && candidate === '0') continue;
      if (isWithCenter && i === turningPoint && ['6', '9'].includes(candidate)) continue;
      if (i > turningPoint) {
        const symmetry = str[n - i - 1];
        if (candidate === '6' && symmetry !== '9') continue;
        if (candidate === '9' && symmetry !== '6') continue;
        if (['0', '1', '8'].includes(candidate) && candidate !== symmetry) continue;  
      }
      recursive(`${str}${candidate}`, i + 1);
    }
  }
  return recursive;
}

/**
 * @param {number} n
 * @return {string[]}
 */
const findStrobogrammatic = (n) => {
  const result = [];
  getStrobogrammatic(n, result)('', 0);
  return result;
};