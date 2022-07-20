/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
 const shortestDistance = (wordsDict, word1, word2) => {
  const MAX_DICT_LEN = 3 * (10 ** 4);
  const found = {};
  let min = MAX_DICT_LEN + 1;
  for (let i = 0; i < wordsDict.length; i++) {
    const word = wordsDict[i];
    if (word === word1 || word === word2) {
      const { word: prevFoundStr, idx: prevFoundIdx } = found;
      if (prevFoundStr && word !== prevFoundStr) {
        const len = i - prevFoundIdx;
        min = len < min ? len : min;
      }
      found.word = word;
      found.idx = i;
    }
  }
  return min;
};