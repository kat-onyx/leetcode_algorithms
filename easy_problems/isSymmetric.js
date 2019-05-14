var isSymmetric = function(root) {
  if (!root) {
    return true;
  }

  let isMirror = (left, right) => {
    if (!left && !right) {
      return true;
    }
    if (!left || !right) {
      return false;
    }
    if (left.val != right.val) {
      return false;
    }
    return isMirror(left.left, right.right) && isMirror(left.right, right.left);
  };

  return isMirror(root.left, root.right);
};


//Runtime: 64 ms, faster than 96.61% of JavaScript online submissions for Symmetric Tree.
// Memory Usage: 35.8 MB, less than 17.20% of JavaScript online submissions for Symmetric Tree