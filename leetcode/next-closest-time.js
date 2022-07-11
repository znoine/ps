/**
 * @param {string} time
 * @return {string}
 */
const nextClosestTime = (time) => {
  const COLON = ':';
  const [tenH, oneH, , tenM, oneM] = [...time];
  const sorted = [tenH, oneH, tenM, oneM].sort();
  const minNum = sorted[0];
  const nextOneM = sorted.filter(n => n > oneM)[0] || minNum;
  if (nextOneM !== minNum) return [tenH, oneH, COLON, tenM, nextOneM].join('');
  const nextTenM = sorted.filter(n => n > tenM && n < 6)[0] || minNum;
  if (nextTenM !== minNum) return [tenH, oneH, COLON, nextTenM, nextOneM].join('');
  let nextOneH;
  if (tenH < 2) nextOneH = sorted.filter(n => n > oneH)[0] || minNum;
  else nextOneH = sorted.filter(n => n > oneH && n < 4)[0] || minNum;
  if (nextOneH !== minNum) return [tenH, nextOneH, COLON, nextTenM, nextOneM].join('');
  const nextTenH = sorted.filter(n => n > tenH && n < 3)[0] || minNum;
  return [nextTenH, nextOneH, COLON, nextTenM, nextOneM].join('');
};