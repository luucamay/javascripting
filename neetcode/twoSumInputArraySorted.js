/** 167. Two Sum II - Input Array Is Sorted
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 * 
 * Solution:
 * set two pointers start and end
 * calculate the complement
 * if complement is 0 return indexes
 * if not choose which pointer move so we are close to the target
 */
var twoSum = function (numbers, target) {
  let start = 0
  let end = numbers.length
  while (start < end) {
    leftNum = numbers[start]
    rightNum = numbers[end]
    complement = target - rightNum
    if (complement === leftNum) {
      return [start + 1, end + 1]
    }
    if (leftNum < complement) {
      start++
    } else {
      end--
    }
  }
  return [-1, -1]
};