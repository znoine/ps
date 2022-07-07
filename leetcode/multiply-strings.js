/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 const multiply = (num1, num2) => {
  const isNum1GeNum2 = num1.length >= num2.length
  const aboveNum = isNum1GeNum2 ? num1 : num2;
  const belowNum = isNum1GeNum2 ? num2 : num1;
  const aboveDigits = [...aboveNum].map(ch => parseInt(ch, 10)).reverse();
  const belowDigits = [...belowNum].map(ch => parseInt(ch, 10)).reverse();
  const multiplied = [];
  for (let i = 0; i < belowDigits.length; i++) {
      for (let j = 0; j < aboveDigits.length; j++) {
          const mulIdx = j + i;
          multiplied[mulIdx] = multiplied[mulIdx] ?? 0;
          multiplied[mulIdx] += aboveDigits[j] * belowDigits[i];
          if (mulIdx > 0 && multiplied[mulIdx - 1] >= 10) {
              const prev = multiplied[mulIdx - 1];
              multiplied[mulIdx] += Math.floor(prev / 10);
              multiplied[mulIdx - 1] = prev % 10;
          }
      }
  }
  const result = multiplied.reverse().join('').replace(/^(0*)/, '');
  return result || '0';
};