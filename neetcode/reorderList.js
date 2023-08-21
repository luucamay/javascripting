/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 *
 * Plan:
 * 1. find the head of the second half of the list
 *  1.1 set last element of first half to null?
 * 2. reverse the second half of list
 * 3. merge two lists
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  let slow = head
  let fast = head.next
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  let head2 = slow.next
  slow.next = null

  // reverse second half
  let curr = head2 // [1,2]
  let prev = null //
  while (curr) {
    const tmp = curr.next
    curr.next = prev
    prev = curr
    curr = tmp
  }
  head2 = prev

  // merge
  let tmp, tmp2 = null
  while (head && head2) {
    tmp = head.next
    tmp2 = head2.next
    head.next = head2
    head2.next = tmp
    head = tmp
    head2 = tmp2
  }
}