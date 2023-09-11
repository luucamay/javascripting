/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 704. Binary Search
 * https://leetcode.com/problems/binary-search/
 * Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * [-1,0,3,5,9,12]; t=9
 * s = 0; e = 5; m = 3; v = 5
 * s = 4; e = 5; m = 5; v = 12
 * s = 4; e = 4; m = 4; v = 9
 * it defaults to the lower half if array length is even
 */

var search = function (nums, target) {
  let start = 0
  let end = nums.length - 1

  while (end >= start) {
    const middle = start + Math.ceil((end - start) / 2) // round number to highest point
    const value = nums[middle]
    if (value === target)
      return middle
    if (value < target)
      start = middle + 1
    else
      end = middle - 1
  }

  return -1
};