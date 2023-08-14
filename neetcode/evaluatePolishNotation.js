/**
 * 150. Evaluate Reverse Polish Notation
https://leetcode.com/problems/evaluate-reverse-polish-notation/description/
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = []
  const sum = (a, b) => a + b
  const subst = (a, b) => a - b
  const mul = (a, b) => a * b
  const div = (a, b) => Math.trunc(a / b)

  const operators = new Map([
    ['+', sum],
    ['-', subst],
    ['*', mul],
    ['/', div]
  ])

  for (str of tokens) {
    if (operators.has(str)) {
      const rightNum = parseInt(stack.pop())
      const leftNum = parseInt(stack.pop())
      const operate = operators.get(str)
      const result = operate(leftNum, rightNum)
      stack.push(result)
    } else {
      stack.push(str)
    }
  }
  return stack.pop()
};

const tokens = ["2", "1", "+", "3", "*"]
console.log(evalRPN(tokens))