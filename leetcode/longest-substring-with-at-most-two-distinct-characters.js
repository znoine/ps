/**
 * @param {string} s
 * @return {number}
 */
 const lengthOfLongestSubstringTwoDistinct = (s) => {
  const sLen = s.length;
  const distinctChar = [];
  const distinctIdx = [];
  let start = 0;
  let cur = 0;
  let max = 0;
  while (cur < sLen) {
    const ch = s.charAt(cur);
    if (distinctChar.includes(ch)) {
      const [first, second] = distinctChar;
      if (second && ch === first) {
        distinctChar[0] = second;
        distinctChar[1] = first;
        distinctIdx[0] = distinctIdx[1];
        distinctIdx[1] = cur;
      }
    } else {
      if (distinctChar.length === 2) {
        distinctChar.splice(0, 1);
        distinctIdx.splice(0, 1);
        start = distinctIdx[0];
      }
      distinctChar.push(ch);
      distinctIdx.push(cur);
    }
    const len = cur - start + 1;
    max = len > max ? len : max;
    cur++;
  }
  return max;
};