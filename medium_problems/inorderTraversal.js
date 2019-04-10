//Given a binary tree, return the inorder traversal of its nodes' values.
var inorderTraversal = function(root, arr = []) {
  if (root === null) {
    return arr;
  }

  if (root.left) {
    inorderTraversal(root.left, arr);
  }
  arr.push(root.val);

  if (root.right) {
    inorderTraversal(root.right, arr);
  }

  return arr;
};
//Runtime: 56 ms, faster than 100.00% of JavaScript online submissions for Binary Tree Inorder Traversal.
