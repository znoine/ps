/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
 const findMissingRanges = (nums, lower, upper) => {
  const numsWithLU = [lower, ...nums, upper];
  const result = [];
  for (let i = 1; i < numsWithLU.length; i++) {
      const prev = numsWithLU[i - 1];
      const cur = numsWithLU[i];
      const range = [prev + 1, cur - 1];
      if (i === 1) range[0] = lower;
      if (i === numsWithLU.length - 1) range[1] = upper;
      const [s, e] = range;
      if (s > e) continue;
      result.push(s === e ? s.toString() : `${s}->${e}`);
  }
  return result;
};