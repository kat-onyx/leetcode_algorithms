//recursive solution 1
var preorderTraversal = function(root) {
  if (!root) {
    return [];
  }

  return [
    root.val,
    ...preorderTraversal(root.left),
    ...preorderTraversal(root.right)
  ];
};
//Your runtime beats 100.00 % of javascript submissions.

var preorderTraversal = function(root, arr = []) {
  if (!root) {
    return arr;
  }

  arr.push(root.val);

  if (root.left) {
    preorderTraversal(root.left);
  }
  if (root.right) {
    preorderTraversal(root.right);
  }

  return result;
};

//Runtime: 72 ms, faster than 27.01% of JavaScript online submissions for Binary Tree Preorder Traversal.

//iterative solution
var preorderTraversal = function (root) {
  let result = [];

  if (root === null) {
    return result;
  }

  let stack = [root];

  while (stack.length > 0) {
    root = stack.shift();
    result.push(root.val);
    if (root.right != null) {
      stack.unshift(root.right);
    }
    if (root.left != null) {
      stack.unshift(root.left);
    }
  }

  return result;
};

//Runtime: 72 ms, faster than 27.01% of JavaScript online submissions for Binary Tree Preorder Traversal.