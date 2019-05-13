// Given a binary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

var maxDepth = function(root) {
  if (!root) {
    return 0;
  }

  const right = maxDepth(root.right);

  const left = maxDepth(root.left);

  return Math.max(right, left) + 1;
};

// Runtime: 56 ms, faster than 99.43% of JavaScript online submissions for Maximum Depth of Binary Tree.
