/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 const licenseKeyFormatting = (s, k) => {
  const DIFF_LOW_A_TO_UPP_A = 'a'.charCodeAt() - 'A'.charCodeAt();
  let cnt = k;
  const licenseKey = [...s].reduceRight((str, ch) => {
      if (ch === '-') return str;
      if (ch > 'Z') ch = String.fromCharCode(ch.charCodeAt() - DIFF_LOW_A_TO_UPP_A);
      if (--cnt === 0) cnt = k;
      return `${cnt === k ? '-' : ''}${ch}${str}`
  }, '');
  return licenseKey[0] === '-' ? licenseKey.substring(1) : licenseKey;
};