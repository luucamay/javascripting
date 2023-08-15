/**
 * 3. Longest Substring Without Repeating Characters
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/submissions/
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const size = s.length
  let maxSubSize = size === 1 ? 1 : 0
  let subSize = 1
  let left = 0
  let right = 1
  const set = new Set()
  set.add(s[left])

  while (right < size) {
    const currChar = s[right]
    if (!set.has(currChar)) {
      set.add(currChar)
      right++
      subSize++
    } else {
      // left does not change to right
      // left moves 1 forward to see if with that now we still have a substring with unique chars
      set.delete(s[left])
      left++
      subSize--
    }
    maxSubSize = Math.max(maxSubSize, subSize)
  }

  return maxSubSize
};

const s = "dvdf"
console.log(lengthOfLongestSubstring(s))