/* start time: 12:33
Remove Dups! Write code to remove duplicates from an unsorted linked list.
FOLLOW UP: How would you solve this problem if a temporary buffer is not allowed?
*/

/**
 * Definition for singly-linked list.
 * THIS is always something that breaks my mind!!!
 */

const removeDups = (node) => {
  const head = node;
  const tempBuffer = new Set();
  while (node && node.next) {
    if (tempBuffer.has(node.val)) {
      // removeNode
      node.next = node.next.next;
    } else {
      tempBuffer.add(node.val);
    }
    node = node.next;
  }
  return head;
}

