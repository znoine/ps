/**
 * @param {number[]} fruits
 * @return {number}
 */
const totalFruit = (fruits) => {
  const sp = [];
  const pick = [];
  let len = 0;
  let max = 0;
  for (let i = 0; i < fruits.length; i++) {
    const fruit = fruits[i];
    if (i === 0 || fruits[i - 1] !== fruit) sp[fruit] = i;
    if (!pick.includes(fruit)) pick.push(fruit);
    len++;
    if (len > max) max = len;
    if (pick.length === 3) {
      const [fruitOne, fruitTwo] = pick;
      pick.splice(sp[fruitOne] > sp[fruitTwo] ? 1 : 0, 1);
      len = 1;
    }
  }
  return max;
};
