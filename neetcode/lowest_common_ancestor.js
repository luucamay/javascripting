/**
 * 235. Lowest Common Ancestor of a Binary Search Tree
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
 * Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.
 *
 * According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 
 * Side note: I do not like that there is two values but OKAY
 * 
 * My approach:
 * Default ancestor is the root
 * Cases:
 * p or q value are equal to root, then that is the lower ancestor
 * update ancestor
 * if p and q are bigger than root check the right nodes
 * else they are smaller to root so check the left nodes
 * if p is smaller than ancestor and q is bigger than ancestor then that is the smallest ancestor
 * if q is smaller than ancestor and p is bigger than ancestor then that is the smallest ancestor
 * 
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

var lowestCommonAncestor = function (root, p, q) {
  let curr = root
  while (curr) {
    const value = curr.val
    if (p.val > value && q.val > value)
      curr = curr.right
    else if (p.val < value && q.val < value)
      curr = curr.left
    else
      return curr
  }
};