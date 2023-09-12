/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * 74. Search a 2D Matrix

You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
"The first integer of each row" is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.

test case:
target = 5
[ [2, 5],
  [7, 8],
  [17,80] ]

solution:
binary search to find which row potentially is our target
binary search the row to find our target

 */
var searchMatrix = function (matrix, target) {
  const ROWS = matrix.length
  if (ROWS < 1)
    return false
  const COLS = matrix[0].length

  // BS to find the row
  let top = 0
  let bottom = ROWS - 1
  let row
  while (bottom >= top) {
    row = Math.floor((top + bottom) / 2) // round the division to lower number
    const smallest = matrix[row][0] // first element of row
    const biggest = matrix[row][COLS - 1] // last element of row
    if (target > biggest)
      top = row + 1
    else if (target < smallest)
      bottom = row - 1
    else
      break
  }

  if (bottom < top) // out of the while condition because we are out of rows
    return false

  // BS to find target
  let left = 0
  let right = COLS - 1
  while (right >= left) {
    const middle = Math.floor((left + right) / 2)
    const value = matrix[row][middle] // first element of row
    if (value === target)
      return true
    if (target > value)
      left = middle + 1
    else
      right = middle - 1
  }

  return false
};

//console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3))
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 11))