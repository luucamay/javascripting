/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function(root) {
    let some_map = new Map();
    helperFunc(root,1,some_map);
    
    let mapIter = some_map.entries();
    
    let highest_level = 0;
    let highest_value = -1;
    for (const [key, value] of mapIter) {
      if (value > highest_value) {
          highest_level = key;
          highest_value = value;
      }
    }
    return highest_level;
};

var helperFunc = function (node, level, map) {
    if (!map.get(level)) {
        map.set(level, node.val);
    } else {
        map.set(level, node.val + map.get(level));
    }
    
    if (node.left) {
        helperFunc(node.left, level+1, map);
    }
    
    if (node.right) {
        helperFunc(node.right, level+1, map);
    }
};
