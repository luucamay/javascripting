/**
 * This week's question:
Given an array of integers, sort them into two separate sorted arrays of even and odd numbers. If you see a zero, skip it.

Example:

> separateAndSort([4,3,2,1,5,7,8,9])
> [[2,4,6], [1,3,5,7,9]]

> separateAndSort([1,1,1,1])
> [[], [1,1,1,1]]
 */

const separateAndSort = (nums) => {
  const evens = []
  const odds = []
  const sorted = nums.sort()
  sorted.forEach(num => {
    if (num !== 0) {
      if (num % 2 === 0)
        evens.push(num)
      else
        odds.push(num)
    }
  });
  return [evens, odds]
}

console.log(separateAndSort([4, 3, 2, 1, 5, 7, 8, 9]))
console.log(separateAndSort([1, 1, 1, 1]))
console.log(separateAndSort([0, 2, 1, 4, 1, 1]))
