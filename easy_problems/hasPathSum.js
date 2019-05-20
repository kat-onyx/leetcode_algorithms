var hasPathSum = function(root, sum) {
  if (!root) {
    return false;
  }
  sum -= root.val;

  let a = hasPathSum(root.left, sum);
  let b = hasPathSum(root.right, sum);

  if (sum === 0 && !root.left && !root.right) {
    return true;
  }

  return a || b;
};
