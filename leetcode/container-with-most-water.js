/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
  let s = 0;
  let e = height.length - 1;
  let max = 0;
  while (s != e) {
    const sHeight = height[s];
    const eHeight = height[e];
    const area = Math.min(sHeight, eHeight) * (e - s);
    if (area > max) max = area;
    if (sHeight < eHeight) s++;
    else e--;
  }
  return max;
};
