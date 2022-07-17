const cannotMove = (indexes) => indexes.some(idx => idx < 0 || idx > 2);

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const numberOfPatterns = (m, n) => {
  let result = 0;
  const recursive = (curNum, moveCnt, visited) => {
    if (moveCnt >= m) result++;
    if (moveCnt >= n) return;
    const rowIdx = Math.floor((curNum - 1) / 3);
    const colIdx = (curNum - 1) % 3;
    const directMoveCandidates = [
      [rowIdx - 1, colIdx],
      [rowIdx + 1, colIdx],
      [rowIdx, colIdx - 1],
      [rowIdx, colIdx + 1],
      [rowIdx - 1, colIdx + 1],
      [rowIdx + 1, colIdx + 1],
      [rowIdx + 1, colIdx - 1],
      [rowIdx - 1, colIdx - 1],
      [rowIdx + 2, colIdx + 1],
      [rowIdx + 2, colIdx - 1],
      [rowIdx - 2, colIdx + 1],
      [rowIdx - 2, colIdx - 1],
      [rowIdx + 1, colIdx + 2],
      [rowIdx + 1, colIdx - 2],
      [rowIdx - 1, colIdx + 2],
      [rowIdx - 1, colIdx - 2]
    ];
    for (const [movedRowIdx, movedColIdx] of directMoveCandidates) {
      if (cannotMove([movedRowIdx, movedColIdx])) continue;
      const nextNum = movedRowIdx * 3 + movedColIdx + 1;
      if (visited[nextNum]) continue;
      recursive(nextNum, moveCnt + 1, { ...visited, [nextNum]: true });
    }
    const moveWithWaypointCanidates = [
      [rowIdx + 2, colIdx],
      [rowIdx - 2, colIdx],
      [rowIdx, colIdx + 2],
      [rowIdx, colIdx - 2],
      [rowIdx + 2, colIdx + 2],
      [rowIdx + 2, colIdx - 2],
      [rowIdx - 2, colIdx + 2],
      [rowIdx - 2, colIdx - 2]
    ];
    for (const [movedRowIdx, movedColIdx] of moveWithWaypointCanidates) {
      if (cannotMove([movedRowIdx, movedColIdx])) continue;
      const wayPointNum = ((movedRowIdx + rowIdx) / 2) * 3 + (movedColIdx + colIdx) / 2 + 1;
      if (!visited[wayPointNum]) continue;
      const nextNum = movedRowIdx * 3 + movedColIdx + 1;
      if (visited[nextNum]) continue;
      recursive(nextNum, moveCnt + 1, { ...visited, [nextNum]: true });
    }
  }
  for (let num = 1; num <= 9; num++) {
    recursive(num, 1, { [num]: true });
  }
  return result;
};