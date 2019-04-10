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
