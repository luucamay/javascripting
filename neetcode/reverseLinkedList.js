/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * reverse the links while traversing
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let curr = head
  let prev = null

  while (curr) {
    const tmp = curr.next
    curr.next = prev
    prev = curr
    curr = tmp
  }

  return prev
};

// Recursive solution T: O(n) M: O(n)
var reverseList = function (head) {
  let nextHead = null
  // base case
  if (!head.next) {
    nextHead = head
    return nextHead
  }

  let prev = head
  head.next.next = prev
  prev.next = null
  reverseList(head.next)

  return nextHead
};
