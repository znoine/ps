/**
 * @param {number[][]} intervals
 * @return {number}
 */
 const minMeetingRooms = (intervals) => {
  const cnt = [];
  for (const interval of intervals) {
    let [s, e] = interval;
    while (s < e) {
      cnt[s] = (cnt[s] ?? 0) + 1;
      s++;
    }
  }
  return cnt.reduce((max, c) => {
    return c > max ? c : max;
  }, 1);
};