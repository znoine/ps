/**
 * @param {string} time
 * @return {string}
 */
const nextClosestTime = (time) => {
  const COLON = ':';
  const [tenH, oneH, , tenM, oneM] = [...time];
  const sorted = [tenH, oneH, tenM, oneM].sort();
  const min = sorted[0];
  const newOneM = sorted.filter((n) => n > oneM)[0] || min;
  if (newOneM !== min) return [tenH, oneH, COLON, tenM, newOneM].join('');
  const newTenM = sorted.filter((n) => n > tenM && n < 6)[0] || min;
  if (newTenM !== min) return [tenH, oneH, COLON, newTenM, newOneM].join('');
  let newOneH;
  if (tenH < 2) newOneH = sorted.filter((n) => n > oneH)[0] || min;
  else newOneH = sorted.filter((n) => n > oneH && n < 4)[0] || min;
  if (newOneH !== min) return [tenH, newOneH, COLON, newTenM, newOneM].join('');
  const newTenH = sorted.filter((n) => n > tenH && n < 3)[0] || min;
  return [newTenH, newOneH, COLON, newTenM, newOneM].join('');
};
