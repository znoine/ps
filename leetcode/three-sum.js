/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
  const MAX_NUM = 10 ** 5;
  const MIN_NUM = -MAX_NUM;
  const NEGATIVE_OFFSET = MAX_NUM;
  const cnt = [];
  const compact = [];
  const getIdxWithOffset = (num) => (num < 0 ? -num + NEGATIVE_OFFSET : num);
  let compactIdx = 0;
  for (const num of nums) {
    const cntIdx = getIdxWithOffset(num);
    if (!cnt[cntIdx]) {
      compact[compactIdx++] = num;
      cnt[cntIdx] = 0;
    }
    cnt[cntIdx]++;
  }
  compact.sort((n1, n2) => n1 - n2);
  const result = [];
  for (let i = 0; i < compact.length; i++) {
    for (let j = i; j < compact.length; j++) {
      const numOne = compact[i];
      const numTwo = compact[j];
      const twoSum = numOne + numTwo;
      const numThree = -twoSum;
      if (numThree < MIN_NUM || numThree > MAX_NUM) continue;
      if (numThree < numOne || numThree < numTwo) continue;
      let cntNumOne = cnt[getIdxWithOffset(numOne)];
      let cntNumTwo = cnt[getIdxWithOffset(numTwo)];
      let cntNumThree = cnt[getIdxWithOffset(numThree)];
      if (!cntNumThree) continue;
      cntNumOne--;
      cntNumTwo--;
      cntNumThree--;
      if (numOne === numTwo) {
        cntNumOne--;
        cntNumTwo--;
      }
      if (numOne === numThree) {
        cntNumOne--;
        cntNumThree--;
      }
      if (numTwo === numThree) {
        cntNumTwo--;
        cntNumThree--;
      }
      if ([cntNumOne, cntNumTwo, cntNumThree].some((c) => c < 0)) continue;
      result.push([numOne, numTwo, numThree]);
    }
  }
  return result;
};
