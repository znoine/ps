/**
 * @param {string} num
 * @return {boolean}
 */
 const isStrobogrammatic = (num) => {
  const candidates = {
    lengthIsOne: ['0', '1', '8'],
    centerPossible: ['0', '1', '8'],
    normal: ['0', '1', '6', '8', '9']
  }
  const numLen = num.length;
  const digits = [...num];
  if (numLen === 1) return candidates.lengthIsOne.includes(digits[0]);
  if (digits[0] === '0' || digits.at(-1) === '0') return false;
  const halfLen = Math.floor(numLen / 2);
  const isWithCenter = numLen % 2 === 1;
  if (isWithCenter && !candidates.centerPossible.includes(digits[halfLen])) return false;
  for (let i = 0; i < halfLen; i++) {
    const digit = digits[i];
    if (!candidates.normal.includes(digit)) return false;
    const symmetryDigit = digits.at(-(i + 1));
    if (digit === '6') {
      if (symmetryDigit === '9') continue;
      else return false;
    } else if (digit === '9') {
      if (symmetryDigit === '6') continue;
      else return false;
    } else {
      if (digit === symmetryDigit) continue;
      else return false;
    }
  }
  return true;
};