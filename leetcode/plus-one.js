/**
 * @param {number[]} digits
 * @return {number[]}
 */
 const plusOne = (digits) => {
  for (let i = digits.length - 1; i >= 0; i--) {
      digits[i] += 1;
      if (digits[i] <= 9) return digits;
      digits[i] = 0;
  }
  return [1, ...digits];
};