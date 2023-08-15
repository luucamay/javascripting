/**
 * 121. Best Time to Buy and Sell Stock
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let max = 0
  const size = prices.length
  let left = 0
  let right = 1

  while (right < size) {
    const profit = prices[right] - prices[left]
    max = Math.max(profit, max)

    if (profit < 0) {
      left = right
    }
    right++
  }

  return max
};

const p = [7, 1, 5, 3, 6, 4]
console.log(maxProfit(p))