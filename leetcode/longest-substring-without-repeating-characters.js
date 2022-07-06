/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
    const sp = [];
    let start = 0, max = 0;
    [...s].forEach((ch, idx) => {
        const chCode = ch.charCodeAt(); 
        if (sp[chCode] === undefined || sp[chCode] < start) {
            const len = idx - start + 1;
            if (len > max) max = len;
        } else {
            start = sp[chCode] + 1;
        }
        sp[chCode] = idx;
    });
    return max;
};