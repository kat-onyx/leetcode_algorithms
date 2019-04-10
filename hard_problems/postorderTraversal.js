//Given a binary tree, return the postorder traversal of its nodes' values.
var postorderTraversal = function(root, arr = []) {
  if (root === null) {
    return arr;
  }

  if (root.left !== null) {
    postorderTraversal(root.left, arr);
  }
  if (root.right !== null) {
    postorderTraversal(root.right, arr);
  }
  arr.push(root.val);
  return arr;
};
// Your runtime beats 100.00 % of javascript submissions.
