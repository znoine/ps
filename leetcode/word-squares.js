const genWordSquares = (words, result) => {
  const n = words[0].length;
  const recursive = (i, selectedList) => {
    if (i === n) {
      result.push(selectedList);
      return;
    }
    const selectedLen = selectedList.length;
    for (const word of words) {
      if (selectedLen >= 1) {
        const isWrong = selectedList.some((selected, idx) => {
          return selected.charAt(selectedLen) !== word.charAt(idx);
        });
        if (isWrong) continue;
      }
      recursive(i + 1, [...selectedList, word]);
    }
  }
  return recursive;
}
/**
 * @param {string[]} words
 * @return {string[][]}
 */
const wordSquares = (words) => {
  const result = [];
  genWordSquares(words, result)(0, []);
  return result;
};